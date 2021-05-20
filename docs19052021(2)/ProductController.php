<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductDetailCollection;
use App\Http\Resources\SearchProductCollection;
use App\Http\Resources\FlashDealCollection;
use App\Models\Brand;
use App\Models\Category;
use App\Models\FlashDeal;
use App\Models\FlashDealProduct;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\Review;
use App\Models\Shop;
use App\Models\Color;
use Illuminate\Http\Request;
use App\Utility\CategoryUtility;
use Illuminate\Support\Facades\Validator;
use App\Product;
use App\Recent;
use App\Category as Categorys;
use DB;
use App\Models\Cart;
use App\DeviceToken;
use App\Wishlist;
use App\Productattribute;
use App\Attribute;
use App\Categoryattributes;
use App\ProductStock;
use App\Seller;
class ProductController extends Controller
{
    public function __construct()
    {
        $this->page_size = 10;
    }
    public function index()
    {
        return new ProductCollection(Product::latest()->paginate(10));
    }

    public function show($id)
    {
        return new ProductDetailCollection(Product::where('id', $id)->get());
    }

    public function admin()
    {
        return new ProductCollection(Product::where('added_by', 'admin')->latest()->paginate(10));
    }

    public function seller()
    {
        return new ProductCollection(Product::where('added_by', 'seller')->latest()->paginate(10));
    }

    public function category($id)
    {
        $category_ids = CategoryUtility::children_ids($id);
        $category_ids[] = $id;

        return new ProductCollection(Product::whereIn('category_id', $category_ids)->latest()->paginate(10));
    }
    public function category_id($cat)
    {
        $category_ids = Categorys::where('slug',$cat)->first();
        $id= $category_ids->id;
        $result_array=['id' => $id];
        return response()->json(['status' => true, "error" => [], 'message' => "category id received successfully", 'data' => $result_array]);
    }
    public function subCategory($id)
    {
        $category_ids = CategoryUtility::children_ids($id);
        $category_ids[] = $id;

        return new ProductCollection(Product::whereIn('category_id', $category_ids)->latest()->paginate(10));
    }

    public function subSubCategory($id)
    {
        $category_ids = CategoryUtility::children_ids($id);
        $category_ids[] = $id;

        return new ProductCollection(Product::whereIn('category_id', $category_ids)->latest()->paginate(10));
    }

    public function brand($id)
    {
        return new ProductCollection(Product::where('brand_id', $id)->latest()->paginate(10));
    }

    public function todaysDeal(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'page_no' => 'required',

            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => (object)[], "code" => 200], 200);
            }
            $seller_id = $request->seller_id;
            if(empty($seller_id)){
                $total_items = Product::where('todays_deal', 1)->where('published', 1)->count();
                $lower_bound = ($request->page_no - 1) * $this->page_size;
                $data = Product::select('id', 'name', 'thumbnail_img', 'min_qty as minimum_qty','discount','discount_type')->where('published', 1)->where('todays_deal', 1);
                $data = $data->skip($lower_bound)->take($this->page_size);
                $data = $data->get();
            }else{
                /* identifying seller */
                $seller = \App\Seller::where('user_id',$seller_id)->count();
                if($seller > 0){
                    $total_items = Product::where('todays_deal', 1)->where('published', 1)->where('user_id',$seller_id)->count();
                    $lower_bound = ($request->page_no - 1) * $this->page_size;
                    $data = Product::select('id', 'name', 'thumbnail_img', 'min_qty as minimum_qty','discount','discount_type')
                    ->where('published', 1)
                    ->where('todays_deal', 1)
                    ->where('user_id',$seller_id);
                    $data = $data->skip($lower_bound)->take($this->page_size);
                    $data = $data->get();
                }else{
                    return response()->json(['status' => false, "error" => [], 'message' => "Seller is not exsits", 'data' =>(object)[]]);
                }
               

            }
           
            $result_array['products'] = $data;
            $result_array['total_items'] = $total_items;
            $result_array['per_page'] = $this->page_size;
            return response()->json(['status' => true, "error" => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, "error" => "error", 'message' => "Error : " . $ex->getMessage(), 'data' => (object)[]]);
        }
    }
    /* recent view list */
    public function recentView(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'page_no' => 'required',
               
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => (object)[], "code" => 200], 200);
            }

            $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data = Product::join('recent_views', 'recent_views.product_id', '=', 'products.id')
                ->select('products.id', 'products.name', 'products.thumbnail_img', 'min_qty as minimum_qty','products.discount','products.discount_type','products.published','recent_views.product_id','recent_views.user_id','recent_views.device_id');
               
            if (Auth::guard('api')->check()) {
                $update_recent =  Recent::where('device_id', $request->device_token)->get();
                foreach ($update_recent as $devicetoken) {
                    $recent_view_user = Recent::find($devicetoken->id);
                    $recent_view_user->user_id = Auth::guard('api')->id();
                    $recent_view_user->save();
                }
                $data = $data->where('recent_views.user_id', Auth::guard('api')->id());
            } else {
                $update_recent =  Recent::where('device_id', $request->device_token)->get();
                foreach ($update_recent as $devicetoken) {
                    $recent_view_user = Recent::find($devicetoken->id);
                    $recent_view_user->user_id = null;
                    $recent_view_user->save();
                }
                if ($recent_view_user->user_id == null) {
                    $data = $data->where('recent_views.device_id', $request->device_token);
                }
            }
            
            $data=$data->where("products.published",'1');
            $data=$data->groupBy('recent_views.product_id');
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $result_array['products'] = $data;
            $result_array['total_items'] = count($result_array['products']);
            $result_array['per_page'] = $this->page_size;
            return response()->json(['status' => true, "error" => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, "error" => ["error"], 'message' => "Error : " . $ex->getMessage(), 'data' => (object)[]]);
        }
    }
    public function addrecentview(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'device_token' => 'required',
            'product_id' => 'required'


        ]);
        if ($validator->fails()) {
            $errors = customerrors($validator->errors());
            return response()->json(['status' => false, 'error' => $errors, 'data' => []]);
        }

        if (Auth::guard('api')->check()) {
            $recent = new Recent;
            $recent->device_id = $request->device_token;
            $recent->product_id = $request->product_id;
            $recent->user_id = Auth::guard('api')->id();
            $recent->save();
        } else {

            $recent = new Recent;
            $recent->device_id = $request->device_token;
            $recent->product_id = $request->product_id;
            $recent->save();
        }
        return response()->json(['status' => true, 'error' => [], 'message' => "recent view add successfully", 'data' => []]);
    }


    public function productbrowsbycategory(Request $request)
    {


        try {
            $validator = Validator::make($request->all(), [

                'page_no' => 'required'

            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'message' => "error", 'error' => $errors]);
            }
            $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data = Product::select('id', 'name', 'thumbnail_img', 'colors','discount','discount_type');
            if (!empty($request->product_name)) {
                $data = $data->where('products.name', 'LIKE', "%{$request->product_name}%");
            }
            if (!empty($request->category_id)) {
                $data = $data->where('products.category_id', $request->category_id);
            }
            if (!empty($request->product_name)) {
                $data = $data->where('products.colors', 'LIKE', "%{$request->color}%");
            }
            if (!empty($request->min_price) && !empty($request->max_price)) {
                $data = $data->whereBetween('purchase_price', [$request->min_price, $request->max_price]);
            }
            if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $data = $data->orderBy('products.id', $order[$request->sort_by]);
            }
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $result_array['products'] = $data;
            $result_array['range'] = ['min' => $request->min_price, 'max' => $request->max_price];
            $result_array['total_items'] = count($data);
            $result_array['per_page'] = $this->page_size;
            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => [], 'message' => "product fetch successfully", 'data' => []]);
        }
    }


    public function productbrowseweb(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [

                'page_no' => 'required',



            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => []]);
            }

            if($request->product_name != "")
            {

            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $categoryWise=Category::where('name', 'LIKE', "%{$request->product_name}%")->get();

            $catId=[];

            if(!empty($categoryWise))
            {
                foreach($categoryWise as $cat)
                {
                    
                   
                    $category_ids = CategoryUtility::children_ids($cat->id);
                    

                    foreach($category_ids as $subcat)
                    {
                        array_push($catId, $subcat);
                    }
                    
                    array_push($catId, $cat->id);
                }

            }

         ///////////////////////////////////////SEARCH KEY//////////////////////////////////////////////////

            $data = Product::select('products.*');

            $dataCount = Product::select('products.*');

            if (!empty($request->product_name)) {

                if(!empty($catId))
                {
                  $data = $data->whereIn('products.category_id', $catId);
                  $dataCount = $dataCount->whereIn('products.category_id', $catId);

                  $min = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $catId)->where('products.published','1')->min('products.unit_price');

                  $max = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $catId)->where('products.published','1')->max('products.unit_price');

                  $min=round($min) - 1;
                  $max=round($max) + 1;

                  $temp_array = ['min'=>$min,'max'=>$max];
                  $result_array['price_range']= $temp_array;

               
                }
                else
                {
                  $data = $data->where('products.name', 'LIKE', "%{$request->product_name}%");
                  $dataCount = $dataCount->where('products.name', 'LIKE', "%{$request->product_name}%");

                  $min = Product::select('products.name,products.category_id,products.published,products.unit_price')->where('products.name', 'LIKE', "%{$request->product_name}%")->where('products.published','1')->min('products.unit_price');

                  $max = Product::select('products.name,products.category_id,products.published,products.unit_price')->where('products.name', 'LIKE', "%{$request->product_name}%")->where('products.published','1')->max('products.unit_price');

                 $min=round($min) - 1;
                  $max=round($max) + 1;

                  $temp_array = ['min'=>$min,'max'=>$max];
                 $result_array['price_range']= $temp_array;

                }
               
            }

            ///////////////////////// FILTER RESULT////////////////////////////////////////
           

            if($request->min_price != null && $request->max_price != null){
            $data = $data->where('products.unit_price', '>=', $request->min_price)->where('products.unit_price', '<=', $request->max_price);
            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $data = $data->whereIn('products.brand_id', $brndGet);

            }

            if(!empty($request->attributesValue))
            {
               //$str="X";
                
               $str= explode(",",$request->attributesValue);


               $data = $data->Where(function ($data) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $data->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });
                

            }
            if(!empty($request->color)){
            
                $str= explode(",",$request->color);
                $data = $data->Where(function ($data) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $data->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                });
             
            }

             if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $data = $data->orderBy('products.id', $order[$request->sort_by]);
               
            }

            if (!empty($request->price_high_to_low)) {
              
                $data = $data->orderBy('products.unit_price', "desc");
               
            }

            if (!empty($request->price_low_to_high)) {
              
                $data = $data->orderBy('products.unit_price', "asc");
               
            }

            /////////////////////////////////////////////////////////////////////////////
            $data = $data->where('products.published', 1);
            $dataCount = $dataCount->where('products.published', 1);
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $dataCount = $dataCount->get();
//  DISPLAY FILTER DATA;
            $all_colors = array();
            $attributes = array();
            $all_brand  =array();
            $allBrandid =array();
            if(!empty($dataCount))
            {

            foreach ($dataCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
           //return $all_brand;
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($dataCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            }
           

            $result_array['products'] = $data;
            $result_array['total_items'] = count($dataCount);
            $result_array['per_page'] = $this->page_size;

            }
/////////////////////////////////////////////////BRAND /////////////////////////////////////////////////////////
            elseif($request->brand_id != "")
            {

            $result_array = [];
            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $products = Product::select('products.*')->where('products.brand_id', $request->brand_id);

            $brandproCount = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->get();     
            $min = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->min('products.unit_price');

            $max = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->max('products.unit_price');

            $min=round($min) - 1;
            $max=round($max) + 1;

            $temp_array = ['min'=>$min,'max'=>$max];
            $result_array['price_range']= $temp_array;      


            if($request->min_price != null && $request->max_price != null){

           $products = $products->where('products.unit_price', '>=', @$request->min_price)->where('products.unit_price', '<=', @$request->max_price);

            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $products = $products->whereIn('products.brand_id', $brndGet);

            }
            if(!empty($request->attributesValue))
            {
               // $str="cotton""X";
                
                $str= explode(",",$request->attributesValue);


               $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });

                //$products = $products->where('products.choice_options', 'like', '%'.@$str.'%');

            }
            if(!empty($request->color)){
                
                $str= explode(",",$request->color);
                $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                }); 
              
            }

             if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $products =$products->orderBy('products.id', $order[@$request->sort_by]);
  
            }

            if (!empty($request->price_high_to_low)) {
              
                $products =   $products->orderBy('products.unit_price', "desc");
  
            }

            if (!empty($request->price_low_to_high)) {
              
                 $products = $products->orderBy('products.unit_price', "asc");
 
            }

              //  DISPLAY FILTER DATA;
          
            $all_colors = array();
            $attributes = array();
            $all_brand  = array();
            if(!empty($brandproCount))
            {
                foreach ($brandproCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
          
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($brandproCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
                                                      
        }
           $products=$products->skip($lower_bound)->take($this->page_size);
           $products=$products->where('published','1');
           $products=$products->get();
           $result_array['products'] = (!empty($products))?$products:[];
           $result_array['total_items'] = count($brandproCount);
           $result_array['per_page'] = $this->page_size;

            }
//////////////////////////////////////////////CATEGORY/////////////////////////////////////////////////////////
            else
            {
                $cat_id = Categorys::where('slug',$request->category_id)->first();
            //    return  $cat_id;
            $result_array = [];
            $result_array['category_data']= $cat_id;
            
            $category_ids = CategoryUtility::children_ids($cat_id->id);
            $category_ids[] = $request->category_id;

            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $products = Product::select('products.*')->whereIn('products.category_id', $category_ids);

         

            $min = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $category_ids)->where('products.published','1')->min('products.unit_price');

            $max = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $category_ids)->where('products.published','1')->max('products.unit_price');

            $min=round($min) - 1;
            $max=round($max) + 1;
            
            // $result_array

            $temp_array = ['min'=>$min,'max'=>$max];
            $result_array['price_range']= $temp_array;

           
            if($request->min_price != null && $request->max_price != null){

            $products = $products->where('products.unit_price', '>=', @$request->min_price)->where('products.unit_price', '<=', @$request->max_price);

            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $products = $products->whereIn('products.brand_id', $brndGet);

            }
            if(!empty($request->attributesValue))
            {
               // $str="cotton""X";
                
               $str= explode(",",$request->attributesValue);


               $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });

               //$products = $products->where('products.attr_value', 'like', '%'.@$str.'%');

            }
            if(!empty($request->color)){
                $str= explode(",",$request->color);
                $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                }); 

                //$products = $products->where('products.colors', 'like', '%'.@$str.'%');
              
            }

            if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $products = $products->orderBy('products.id', $order[@$request->sort_by]);
            }

            if (!empty($request->price_high_to_low)) {
              
                $products = $products->orderBy('products.unit_price', "desc");
            }

            if (!empty($request->price_low_to_high)) {
              
               $products = $products->orderBy('products.unit_price', "asc");
            }


            $productsCount = Product::select('*')->whereIn('category_id', $category_ids)->where('published','1')->get();

            $result_array['category'] = Categorys::select('id', 'name')->where('id', $request->category_id)->first();

            $products=$products->where('products.published','1');
            $products=$products->skip($lower_bound)->take($this->page_size);
           
            $result_array['products'] = $products->get();

            $result_array['total_items'] = count($productsCount);
            $result_array['per_page'] = $this->page_size;



          //  DISPLAY FILTER DATA;
          
            $all_colors = array();
            $attributes = array();
            $all_brand  = array();
            if(!empty($productsCount))
            {
                foreach ($productsCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
          
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($productsCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            }
             

        }
            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array,'attribute'=>$attributes]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => [], 'message' => $ex->getMessage(), 'data' => []]);
        }
    }

    


    public function productbrowse(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [

                'page_no' => 'required',



            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => []]);
            }

            if($request->product_name != "")
            {

            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $categoryWise=Category::where('name', 'LIKE', "%{$request->product_name}%")->get();

            $catId=[];

            if(!empty($categoryWise))
            {
                foreach($categoryWise as $cat)
                {
                    $category_ids = CategoryUtility::children_ids($cat->id);
                    

                    foreach($category_ids as $subcat)
                    {
                        array_push($catId, $subcat);
                    }
                    
                    array_push($catId, $cat->id);
                }

            }

         ///////////////////////////////////////SEARCH KEY//////////////////////////////////////////////////

            $data = Product::select('products.*');

            $dataCount = Product::select('products.*');

            if (!empty($request->product_name)) {

                if(!empty($catId))
                {
                  $data = $data->whereIn('products.category_id', $catId);
                  $dataCount = $dataCount->whereIn('products.category_id', $catId);

                  $min = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $catId)->where('products.published','1')->min('products.unit_price');

                  $max = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $catId)->where('products.published','1')->max('products.unit_price');

                  $min=round($min) - 1;
                  $max=round($max) + 1;

                  $temp_array = ['min'=>$min,'max'=>$max];
                  $result_array['price_range']= $temp_array;

               
                }
                else
                {
                  $data = $data->where('products.name', 'LIKE', "%{$request->product_name}%");
                  $dataCount = $dataCount->where('products.name', 'LIKE', "%{$request->product_name}%");

                  $min = Product::select('products.name,products.category_id,products.published,products.unit_price')->where('products.name', 'LIKE', "%{$request->product_name}%")->where('products.published','1')->min('products.unit_price');

                  $max = Product::select('products.name,products.category_id,products.published,products.unit_price')->where('products.name', 'LIKE', "%{$request->product_name}%")->where('products.published','1')->max('products.unit_price');

                 $min=round($min) - 1;
                  $max=round($max) + 1;

                  $temp_array = ['min'=>$min,'max'=>$max];
                 $result_array['price_range']= $temp_array;

                }
               
            }

            ///////////////////////// FILTER RESULT////////////////////////////////////////
           

            if($request->min_price != null && $request->max_price != null){
            $data = $data->where('products.unit_price', '>=', $request->min_price)->where('products.unit_price', '<=', $request->max_price);
            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $data = $data->whereIn('products.brand_id', $brndGet);

            }

            if(!empty($request->attributesValue))
            {
               //$str="X";
                
               $str= explode(",",$request->attributesValue);


               $data = $data->Where(function ($data) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $data->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });
                

            }
            if(!empty($request->color)){
            
                $str= explode(",",$request->color);
                $data = $data->Where(function ($data) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $data->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                });
             
            }

             if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $data = $data->orderBy('products.id', $order[$request->sort_by]);
               
            }

            if (!empty($request->price_high_to_low)) {
              
                $data = $data->orderBy('products.unit_price', "desc");
               
            }

            if (!empty($request->price_low_to_high)) {
              
                $data = $data->orderBy('products.unit_price', "asc");
               
            }

            /////////////////////////////////////////////////////////////////////////////
            $data = $data->where('products.published', 1);
            $dataCount = $dataCount->where('products.published', 1);
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $dataCount = $dataCount->get();
//  DISPLAY FILTER DATA;
            $all_colors = array();
            $attributes = array();
            $all_brand  =array();
            $allBrandid =array();
            if(!empty($dataCount))
            {

            foreach ($dataCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
           //return $all_brand;
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($dataCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            }
           

            $result_array['products'] = $data;
            $result_array['total_items'] = count($dataCount);
            $result_array['per_page'] = $this->page_size;

            }
/////////////////////////////////////////////////BRAND /////////////////////////////////////////////////////////
            elseif($request->brand_id != "")
            {

            $result_array = [];
            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $products = Product::select('products.*')->where('products.brand_id', $request->brand_id);

            $brandproCount = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->get();     
            $min = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->min('products.unit_price');

            $max = Product::select('products.*')->where('products.brand_id', $request->brand_id)->where('products.published','1')->max('products.unit_price');

            $min=round($min) - 1;
            $max=round($max) + 1;

            $temp_array = ['min'=>$min,'max'=>$max];
            $result_array['price_range']= $temp_array;      


            if($request->min_price != null && $request->max_price != null){

           $products = $products->where('products.unit_price', '>=', @$request->min_price)->where('products.unit_price', '<=', @$request->max_price);

            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $products = $products->whereIn('products.brand_id', $brndGet);

            }
            if(!empty($request->attributesValue))
            {
               // $str="cotton""X";
                
                $str= explode(",",$request->attributesValue);


               $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });

                //$products = $products->where('products.choice_options', 'like', '%'.@$str.'%');

            }
            if(!empty($request->color)){
                
                $str= explode(",",$request->color);
                $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                }); 
              
            }

             if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $products =$products->orderBy('products.id', $order[@$request->sort_by]);
  
            }

            if (!empty($request->price_high_to_low)) {
              
                $products =   $products->orderBy('products.unit_price', "desc");
  
            }

            if (!empty($request->price_low_to_high)) {
              
                 $products = $products->orderBy('products.unit_price', "asc");
 
            }

              //  DISPLAY FILTER DATA;
          
            $all_colors = array();
            $attributes = array();
            $all_brand  = array();
            if(!empty($brandproCount))
            {
                foreach ($brandproCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
          
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($brandproCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
                                                      
        }
           $products=$products->skip($lower_bound)->take($this->page_size);
           $products=$products->where('published','1');
           $products=$products->get();
           $result_array['products'] = (!empty($products))?$products:[];
           $result_array['total_items'] = count($brandproCount);
           $result_array['per_page'] = $this->page_size;

            }
//////////////////////////////////////////////CATEGORY/////////////////////////////////////////////////////////
            else
            {

            $result_array = [];
            $category_ids = CategoryUtility::children_ids($request->category_id);
            $category_ids[] = $request->category_id;

            $lower_bound = ($request->page_no - 1) * $this->page_size;

            $products = Product::select('products.*')->whereIn('products.category_id', $category_ids);

         

            $min = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $category_ids)->where('products.published','1')->min('products.unit_price');

            $max = Product::select('products.category_id,products.published,products.unit_price')->whereIn('products.category_id', $category_ids)->where('products.published','1')->max('products.unit_price');

            $min=round($min) - 1;
            $max=round($max) + 1;

            $temp_array = ['min'=>$min,'max'=>$max];
            $result_array['price_range']= $temp_array;

           
            if($request->min_price != null && $request->max_price != null){

            $products = $products->where('products.unit_price', '>=', @$request->min_price)->where('products.unit_price', '<=', @$request->max_price);

            }

            if(!empty($request->brandId))
            {
               //$str="X";
                
                $brnd= explode(",",$request->brandId);
                $brndGet = array();
                foreach($brnd as $value)
                {
                    array_push($brndGet, $value);
                }

                $products = $products->whereIn('products.brand_id', $brndGet);

            }
            if(!empty($request->attributesValue))
            {
               // $str="cotton""X";
                
               $str= explode(",",$request->attributesValue);


               $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.attr_value', 'like',  '%' . $str[$i] .'%');
                }      
               });

               //$products = $products->where('products.attr_value', 'like', '%'.@$str.'%');

            }
            if(!empty($request->color)){
                $str= explode(",",$request->color);
                $products = $products->Where(function ($products) use($str) {
                 for ($i = 0; $i < count($str); $i++){
                    $products->orwhere('products.colors', 'like',  '%' . $str[$i] .'%');
                }      
                }); 

                //$products = $products->where('products.colors', 'like', '%'.@$str.'%');
              
            }

            if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];
                $products = $products->orderBy('products.id', $order[@$request->sort_by]);
            }

            if (!empty($request->price_high_to_low)) {
              
                $products = $products->orderBy('products.unit_price', "desc");
            }

            if (!empty($request->price_low_to_high)) {
              
               $products = $products->orderBy('products.unit_price', "asc");
            }


            $productsCount = Product::select('*')->whereIn('category_id', $category_ids)->where('published','1')->get();

            $result_array['category'] = Categorys::select('id', 'name')->where('id', $request->category_id)->first();

            $products=$products->where('products.published','1');
            $products=$products->skip($lower_bound)->take($this->page_size);
           
            $result_array['products'] = $products->get();

            $result_array['total_items'] = count($productsCount);
            $result_array['per_page'] = $this->page_size;



          //  DISPLAY FILTER DATA;
          
            $all_colors = array();
            $attributes = array();
            $all_brand  = array();
            if(!empty($productsCount))
            {
                foreach ($productsCount as $key => $product) {
                if ($product->colors != null) {
                    
                    foreach (json_decode($product->colors) as $key => $color) {
                        if(!in_array($color, $all_colors)){
                          
                            array_push($all_colors, $color);
                         
                        }

                        
                    }
                }

                if($product->brand_id != null)
                {
                    
                    $brandName = Brand::where('id',$product->brand_id)->first();
                    if(!in_array($brandName->id.'- '.$brandName->name, $all_brand)){
                        
                        array_push($all_brand,$brandName->id.'- '.$brandName->name);

                       
                    }
                }
            }
          
            $cArray = array(
                    "id"=> "",
                    "name"=> "color",
                    "values"=> $all_colors
                );
            $attributes[0] = $cArray;

            $bArray = array(
                    "id"=> "",
                    "name"=> "brand",
                    "values"=> $all_brand
                );
            $attributes[1] = $bArray;
                
                
            foreach ($productsCount as $key => $product) {
                if($product->attributes != null && is_array(json_decode($product->attributes))){
                    foreach (json_decode($product->attributes) as $key => $value) {

                        $att = Attribute::where('id',$value)->first();
                        $flag = false;
                        $pos = 0;
                        foreach ($attributes as $key => $attribute) {
                            if($attribute['id'] == $value){
                                $flag = true;
                                $pos = $key;
                                break;
                            }
                        }
                        if(!$flag){
                            $item['id'] = $value;
                            $item['name'] = $att->name;

                            $item['values'] = array();
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    $item['values'] = $choice_option->values;
                                    break;
                                }
                            }
                            array_push($attributes, $item);
                          
                        }
                        else {
                            foreach (json_decode($product->choice_options) as $key => $choice_option) {
                                if($choice_option->attribute_id == $value){
                                    foreach ($choice_option->values as $key => $value) {
                                        if(!in_array($value, $attributes[$pos]['values'])){
                                            array_push($attributes[$pos]['values'], $value);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 

            }
             

        }
            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array,'attribute'=>$attributes]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => [], 'message' => $ex->getMessage(), 'data' => []]);
        }
    }

    



    public function homecategorieswithproducts(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                //'device_token' => 'required',
                'category_id' => 'required',
                'page_no' => 'required'
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'message' => "error", 'error' => $errors]);
            } else {
                $result_array = [];
                $category_ids = CategoryUtility::children_ids($request->category_id);
                $category_ids[] = $request->category_id;



                $lower_bound = ($request->page_no - 1) * $this->page_size;

                $products = Product::select('id', 'name', 'thumbnail_img','discount','discount_type','category_id')->skip($lower_bound)->take($this->page_size)->whereIn('category_id', $category_ids)->where('published','1')->get();

                $result_array['category'] = Categorys::select('id', 'name')->where('id', $request->category_id)->first();
               
                $result_array['products'] = $products;

                $result_array['total_items'] = count($products);
                $result_array['per_page'] = $this->page_size;
                return response()->json(['status' => true, 'message' => "product with categetory fetch successfully", 'error' => [], 'data' => $result_array], 200);
            }
        } catch (\Exception $ex) {
            return response()->json(['status' => true, 'message' => $ex->getMessage(), 'error' => 'error', 'data' => []], 200);
        }
    }



    public function flashDeal()
    {
        $flash_deals = FlashDeal::where('status', 1)->where('featured', 1)->where('start_date', '<=', strtotime(date('d-m-Y')))->where('end_date', '>=', strtotime(date('d-m-Y')))->get();
        return new FlashDealCollection($flash_deals);
    }

    public function featured(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'page_no' => 'required',
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
            }
            $total_items = Product::where('featured', 1)->count();
            $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data = Product::where('featured', 1);
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $result_array['products'] = $data;
            $result_array['total_items'] = $total_items;
            $result_array['per_page'] = $this->page_size;
            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => 'error', 'message' => $ex->getMessage(), 'data' => []]);
        }
    }

    public function getPrice(Request $request)
    {

        //#000000

        try{

            $result_array = array();
            
            $validator = Validator::make($request->all(), [
                //'page_no' => 'required',
                'id' => 'required'
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
            }

            $product = Product::find($request->id);
            $str = '';
            $quantity = 0;

          /*  if($request->has('color')){
                $data['color'] = $request['color'];
                $str = Color::where('code', $request['color'])->first()->name;
            }*/

            if($request['combination'])
            {
               // $str .= '-'.str_replace(' ', '', $request['combination']);

                $str = $request['combination'];
            }

            /*if(json_decode(Product::find($request->id)->choice_options) != null){
                foreach (json_decode(Product::find($request->id)->choice_options) as $key => $choice) {
                    if($str != null){
                        $str .= '-'.str_replace(' ', '', $request['attribute_id_'.$choice->attribute_id]);
                    }
                    else{
                        $str .= str_replace(' ', '', $request['attribute_id_'.$choice->attribute_id]);
                    }
                }
            }*/

//return $str;

            if($str != null && $product->variant_product){
                $product_stock = $product->stocks->where('variant', $str)->first();
                $price = $product_stock->price;
                $quantity = $product_stock->qty;

                $mrpPrice=$product_stock->price;
                $availableQty=@$product_stock->qty;
            }
            else{
                $price = $product->unit_price;
                $quantity = $product->current_stock;
                $mrpPrice=$product_stock->purchase_price;
                $availableQty=@$product_stock->current_stock;
            }

        //discount calculation
            $flash_deals = \App\FlashDeal::where('status', 1)->get();
            $inFlashDeal = false;
            foreach ($flash_deals as $key => $flash_deal) {
                if ($flash_deal != null && $flash_deal->status == 1 && strtotime(date('d-m-Y')) >= $flash_deal->start_date && strtotime(date('d-m-Y')) <= $flash_deal->end_date && \App\FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $product->id)->first() != null) {
                    $flash_deal_product = \App\FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $product->id)->first();
                    if($flash_deal_product->discount_type == 'percent'){
                        $price -= ($price*$flash_deal_product->discount)/100;
                    }
                    elseif($flash_deal_product->discount_type == 'amount'){
                        $price -= $flash_deal_product->discount;
                    }
                    $inFlashDeal = true;
                    break;
                }
            }
            if (!$inFlashDeal) {
                if($product->discount_type == 'percent'){
                    $price -= ($price*$product->discount)/100;
                }
                elseif($product->discount_type == 'amount'){
                    $price -= $product->discount;
                }
            }

            if($product->tax_type == 'percent'){
                $price += ($price*$product->tax)/100;
            }
            elseif($product->tax_type == 'amount'){
                $price += $product->tax;
            }

            return response()->json(['status' => true, 'error' => [], 'message' => "price fetch successfully", 'netPrice' => number_format((float)$price, 2, '.', ''),'mrpPrice'=>$mrpPrice,'availableQty'=>$availableQty]);

        }
        catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => 'error', 'message' => $ex->getMessage(), 'netPrice' => [],'mrpPrice'=>""]);
        }

      
     /*   return array('price' => single_price($price*$request->quantity), 'quantity' => $quantity, 'digital' => $product->digital);*/

    }

    public function productdetails(Request $request)
    {
        try {
            $result_array = array();
            
            $validator = Validator::make($request->all(), [
                //'page_no' => 'required',
                'product_id' => 'required'
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
            }
           // $iscart = 0;
           // $iswishlist = 0;
           // $istrusted = 0;
            $products = Product::select('products.tax_type','products.tax','products.id','products.discount_type','products.discount','orders.payment_status','products.user_id', 'products.name', 'products.colors', 'products.description', 'products.category_id', 'products.brand_id', 'products.photos', 'products.thumbnail_img', 'products.video_provider', 'products.video_link', 'products.tags', 'products.unit_price', 'products.purchase_price', 'attribute','products.choice_options','products.shipping_type','products.shipping_cost','reviews.product_id','reviews.comment','reviews.rating')
                ->where('products.id', '=', $request->product_id)
                ->leftjoin('orders','products.user_id','=','orders.user_id')
                 ->leftjoin('reviews','products.id','=','reviews.product_id')
                ->first();


            @$stockCheck = ProductStock::where('product_id',$request->product_id)->orderBy('id','ASC')->get();



            if(!empty(@$stockCheck))
            {

                $price = @$stockCheck[0]->price;

                $MRPprice = @$stockCheck[0]->price;

                $availableQty=@$stockCheck[0]->qty;



                $flash_deals = \App\FlashDeal::where('status', 1)->get();
                $inFlashDeal = false;
                foreach ($flash_deals as $key => $flash_deal) {
                    if ($flash_deal != null && $flash_deal->status == 1 && strtotime(date('d-m-Y')) >= $flash_deal->start_date && strtotime(date('d-m-Y')) <= $flash_deal->end_date && \App\FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $products->id)->first() != null) {
                        $flash_deal_product = \App\FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $products->id)->first();
                        if($flash_deal_product->discount_type == 'percent'){
                            $price -= ($price*$flash_deal_product->discount)/100;
                        }
                        elseif($flash_deal_product->discount_type == 'amount'){
                            $price -= $flash_deal_product->discount;
                        }
                        $inFlashDeal = true;
                        break;
                    }
                }
                if (!$inFlashDeal) {
                    if($products->discount_type == 'percent'){
                        $price -= ($price*$products->discount)/100;
                    }
                    elseif($products->discount_type == 'amount'){
                        $price -= $products->discount;
                    }
                }

                if($products->tax_type == 'percent'){
                    $price += ($price*$products->tax)/100;
                }
                elseif($products->tax_type == 'amount'){
                    $price += $products->tax;
                }

            }
            else
            {

                $price = $products->unit_price;
                $MRPprice = @$products->purchase_price;
                $availableQty=@$products->current_stock;
                if($products->discount_type == 'percent'){
                        $price -= ($price*$products->discount)/100;
                    }
                    elseif($products->discount_type == 'amount'){
                        $price -= $products->discount;
                    }

                if($products->tax_type == 'percent'){
                    $price += ($price*$products->tax)/100;
                }
                elseif($products->tax_type == 'amount'){
                    $price += $products->tax;
                }


            }



               if(!empty($products->id)){
                $sellerinfo =\App\User::select('users.name','sellers.id as seller_id','users.email')
                                      ->leftjoin('sellers','users.id','=','sellers.user_id')
                                      ->where('users.id',$products->user_id)
                                      ->first();
            $user_rating=\App\Review::select('rating as user_rating')->where('user_id',\Auth::guard('api')->id())->first();
            $count_order_details = \App\Models\OrderDetail::select('payment_status','order_id')->where(['product_id'=>$products->id,'payment_status'=>'paid'])->first();
            

           
            $result_array['products'] = ['id' => $products->id, 
                                        'name' => $products->name, 
                                        'color' => json_decode($products->colors, JSON_UNESCAPED_SLASHES), 
                                        'category_id' => $products->category_id, 
                                        'barnd' => $products->brand_id, 
                                        'productImage' => empty($products->thumbnail_img) ? [] : [uploaded_asset($products->thumbnail_img)], 
                                        'video_provider' => $products->video_provider, 
                                        'video_link' => $products->video_link, 
                                        'availableQty'=>$availableQty,
                                        'price' => number_format((float)$MRPprice, 2, '.', ''),
                                        'home_discounted_base_price' => number_format((float)$price, 2, '.', ''),
                                       /* 'price' => home_base_price($products->id),
                                        'home_discounted_base_price' => home_discounted_base_price($products->id), */
                                        'isCart' => $products->isCart, 
                                        'isWishlist' => $products->iswishlist, 
                                        'istrusted' => $products->istrusted,
                                        'shipping_status'=>($products->shipping_cost ==0)?"Free":$products->shipping_cost, 
                                        'rating' => $products->rating, 
                                        'total_reviews' =>totalreviews($products->id),
                                        'isPurchase'=>(empty($count_order_details))?false:true,
                                        'user_rating'=>$products->rating,
                                        'discountType'=>$products->discount_type,
                                        'discount'=>$products->discount,
                                    ];
            $checkspecification = Product::select('products.id', 'products.name', 'products.colors', 'products.description', 'products.category_id', 'products.brand_id', 'products.photos', 'products.thumbnail_img', 'products.video_provider', 'products.video_link', 'products.tags', 'products.unit_price', 'products.purchase_price', 'attribute')
                ->where('id', '=', $request->product_id)
                ->count();
            if ($checkspecification > 0) {
                $result_array['specification'] = Productattribute::select('*')
                    ->join('categoryspecifications', 'categoryspecifications.id', '=', 'productattributes.categoryspecification_id')
                    ->where('productattributes.product_id', $request->product_id)
                    ->get();
            } else {
                $result_array['specification'] = [];
            }

            $result_array['sellerinfo']=($sellerinfo->seller_id ==null )?(object)[]:$sellerinfo;
           $item_array =[];
           $color_array =[];
           $colors_datas = [];
          // $all_reviews = [];
           $verients = \App\ProductStock::select("product_stocks.id as stock_id",'product_stocks.color','product_stocks.color_name','product_stocks.product_id','product_stocks.variant','product_stocks.sku','product_stocks.price','product_stocks.qty','products.colors','products.choice_options')
                                  ->join('products','products.id','=','product_stocks.product_id')
                                  ->groupBy('products.choice_options')
                                  ->where('products.id',$request->product_id)->first();
                                 
            $result_array['verients']=[];
         
                $choose = json_decode($verients->choice_options);

     
                $dlt_array=array();
                $color_content = [];
                $color_verient =[];
                $colorsdata = json_decode($products->colors);
                    foreach($colorsdata as $val){
                      $master_color = \App\Color::select('id','name','code')->groupBy('id')->where('code',$val)->first();
                      $colors_datas[]=[
                          'title'=> $master_color->name,
                          "value"=>($master_color->code) ? $master_color->code : []
                        ];
                       
                    }
                $item_array['attributes'][] = [
                    'verientName' => 'color',
                    'verientValue' =>$colors_datas,                            
                ];
                foreach($choose as $key=>$attrbuts){
                    $attribute = \App\Attribute::select('name','id')->where('id',$attrbuts->attribute_id)->first();
                  

                   foreach($attrbuts->values as $key=>$val)
                   {

                    $color_array=[
                        'title'=>$val,
                        'details'=>''
                    ];

                    array_push($dlt_array,$color_array);

                   }
              
                   

                   
                   
                    $item_array['attributes'][] = [
                        'verientName' => $attribute->name,
                        'verientValue' =>$dlt_array,
                     
                    ];
                    $colors_datas=[];
                    $dlt_array=array();
                }
                

           
                $result_array['verients'][]=[
                    'stock_id'=>$verients->stock_id,
                    'product_id'=>$verients->product_id,
                    'variant'=>$verients->variant,
                    'sku'=>$verients->sku,
                    'price'=>$verients->price,
                    'attributes'=>(empty($item_array['attributes']))?[]:$item_array['attributes']
                    
                ];
         
              $total_rate = allreviews($request->product_id);
              $result_array['ratings'] = $total_rate;
         
       
          
            
            
            $result_array['related'] =  Product::select('id', 'name', 'thumbnail_img', 'category_id', 'colors')
                ->where('category_id', $products->category_id)
                ->where('id', '!=', $request->product_id)->get();


                /*All Reviews*/ 
        
            return response()->json([
                "status" => true,
                'error' => [],
                'message' => 'product details fetch successfully',
                'data' =>  $result_array
            ]);
               }else{
                return response()->json([
                    "status" => false,
                    'error' => [],
                    'message' => 'product id not found',
                    'data' =>  []
                ]);
               }
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => ['error'], 'message' => $ex->getMessage(), 'data' => []]);
        }
    }

    public function productlist(Request $request)
    {
     
      //  try {
            $validator = Validator::make($request->all(), [
                'page_no' => 'required',
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
            }
            $total_items =   Product::select("*")->count();
            $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data = Product::select('products.id', 'products.name as product_name', 'products.thumbnail_img', 'min_qty as minimum_qty','products.discount_type','products.discount');
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
           
            $result_array['products'] = $data;
            $result_array['total_items'] = $total_items;
            $result_array['per_page'] = $this->page_size;

            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        // } catch (\Exception $ex) {
        //     return response()->json(['status' => false, 'error' => ['error'], 'message' => $ex->getMessage(), 'data' => []]);
        // }
    }
    /* price filter*/
    public function productpricefilter(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'page_no' => 'required',
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
            }
            $item = [];
            $filters=[];
            // $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data =  \App\Product::select('products.id', 'products.name', 'products.thumbnail_img', 'products.colors', 'products.min_qty as minimum_qty', 'products.category_id','products.choice_options','products.discount','products.discount_type')
                                 ->leftjoin('categories', 'categories.id', '=', 'products.category_id')->with(['verients']);
            if (!empty($request->min_price) && !empty($request->max_price)) {
                $data = $data->whereBetween('purchase_price', [$request->min_price, $request->max_price]);
            }
            if (!empty($request->colors)) {

                $data =  $data->Where('products.colors', 'like', '%' . $request->colors . '%');
            }
            if (!empty($request->sort_by)) {
                $order = ['1' => 'ASC', '2' => 'DESC'];

                $data =  $data->orderBy('products.id', $order[$request->sort_by]);
            }
            if (!empty($request->product_name)) {

                $data =  $data->Where('products.name', 'like', '%' . $request->product_name . '%');
            }
            if (!empty($request->category_name)) {

                $data =  $data->Where('categories.name', 'like', '%' . $request->category_name . '%');
            }
            $data = $data;
            //  $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
            $result_array['products'] = $data;

            // $filter = \App\ProductStock::select('product_stocks.variant', 'product_stocks.color', 'products.colors')->join('products', 'products.id', '=', 'product_stocks.product_id')->groupBy('products.id')->where('products.category_id', $data[0]->category_id)->get();
            // $attribute = \App\Categoryattribute::join('attributes', 'attributes.id', '=', 'categoryattributes.attribute_id')->where('categoryattributes.category_id', $data[0]->category_id)->get();
            //print_r($data[0]->category_id); exit;
            //$result_array['attributes'] = $attribute;
            
          
           foreach($data as $items){
             
               $prduct_filter = Product::where('id',$items->id)->first();

               
               if(!empty($prduct_filter->choice_options)){
                  $extract_attribute_id = json_decode($prduct_filter->choice_options);
                     
                 
                    
                    $temp_array =[];
                  
                   
                      foreach($extract_attribute_id as $key=>$attr){
                           
                          
                           
                            $attributs = Attribute::where('id',$attr->attribute_id)->first();
                             if(($attr->attribute_id == $attributs->id)&&(!empty($attributs))){
                                $temp_array =['id'=>$attributs->id,'name'=>$attributs->name];
                               

                               
                                $filters['attribute'][] =$temp_array;
                            

                                

                                
                             }else{
                                $filters['attribute'] =[];
                             }     
                          
                    }


                    if(!empty($prduct_filter->category_id)){
                        $cat = Category::where('id','=',$prduct_filter->category_id)->first();
                        $temp_array =['id'=>$cat->id,'name'=>$cat->name];
                        $filters['category'][]=$temp_array;
                       // array_push($filters,$temp_array);
                    }else{
                        $filters=[];
                    }
                    $sellers_products = \App\Seller::where('user_id',$prduct_filter->user_id)->first();
                    if(!empty($sellers_products)){
                        $temp_array =['id'=>$sellers_products->id,'name'=>($sellers_products->trusted==1)?'trusted':''];
                        $filters['trusted']=$temp_array;
                       // array_push($filters,$temp_array);
                    }else{
                        $filters['trusted']=null;
                    }
                   
                      
                   
               } 
              
               
           }
           
           $temp_array = array(); 
           $min = Product::min('purchase_price');
           $max = Product::max('purchase_price');
           $temp_array = ['min'=>$min,'max'=>$max];
           $filters['price_range']= $temp_array;
       
            $result_array['filter']['category'] = array_values(array_map("unserialize", array_unique(array_map("serialize", $filters['category']))));

        
            $result_array['filter']['attribute'] = array_values(array_map("unserialize", array_unique(array_map("serialize", $filters['attribute']))));

    

            $result_array['filter']['trusted']=  $filters['trusted'];
            return response()->json(['status' => true, 'error' => [], 'message' => "product fetch successfully", 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => ['error'], 'message' => $ex->getMessage(), 'data' => []]);
        }
    }
    /*End*/

    public function bestSeller()
    {
        return new ProductCollection(Product::orderBy('num_of_sale', 'desc')->limit(20)->get());
    }

    public function related($id)
    {
        $product = Product::find($id);
        return new ProductCollection(Product::where('category_id', $product->category_id)->where('id', '!=', $id)->limit(10)->get());
    }

    public function topFromSeller($id)
    {
        $product = Product::find($id);
        return new ProductCollection(Product::where('user_id', $product->user_id)->orderBy('num_of_sale', 'desc')->limit(4)->get());
    }
    public function quickview(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                //'device_token' => 'required',
                'product_id' => 'required'
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'message' => "error", 'error' => $errors, 'data' => []]);
            } else {
                $result_array = [];
                $product = Product::select('products.id', 'products.name as product_name', 'products.thumbnail_img', 'brands.name', 'brands.logo', 'products.colors', 'product_stocks.qty','products.discount','products.discount_type')
                    // ->leftJoin('colors','colors.code','=','products.colors')
                    ->with('reviews')
                    ->leftJoin('brands', 'brands.id', '=', 'products.brand_id')
                    ->join('product_stocks', 'product_stocks.product_id', '=', 'products.id')
                    ->where('products.id', '=', $request->product_id)
                    ->first();
                if (!empty($product)) {
                    $result_array = [
                        'id' => $product->id,
                        'product_name' => $product->product_name,
                        'thumbnail_img' => $product->thumbnail_img,
                        'brand_name' => $product->name,
                        'brand_logo' => uploaded_asset($product->logo),
                        'colors' => $product->colors,
                        'qty' => ($product->qty > 0) ? "In stock" : "out of stock",
                        'reviews' => $product->reviews

                    ];
                    return response()->json(['status' => true, "error" => [], "message" => "Quick view data fetch successfully", "data" => $result_array]);
                } else {
                    return response()->json(['status' => false, "error" => "error", "message" => "Product id not found"]);
                }
            }
        } catch (\Exception $ex) {
            return response()->json(['status' => false, "error" => "error", "message" => $ex]);
        }
    }

    public function search()
    {
        $key = request('key');
        $scope = request('scope');

        switch ($scope) {

            case 'price_low_to_high':
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('unit_price', 'asc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;

            case 'price_high_to_low':
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('unit_price', 'desc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;

            case 'new_arrival':
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('created_at', 'desc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;

            case 'popularity':
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('num_of_sale', 'desc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;

            case 'top_rated':
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('rating', 'desc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;

                // case 'category':
                //
                //     $categories = Category::select('id')->where('name', 'like', "%{$key}%")->get()->toArray();
                //     $collection = new SearchProductCollection(Product::where('category_id', $categories)->orderBy('num_of_sale', 'desc')->paginate(10));
                //     $collection->appends(['key' =>  $key, 'scope' => $scope]);
                //     return $collection;
                //
                // case 'brand':
                //
                //     $brands = Brand::select('id')->where('name', 'like', "%{$key}%")->get()->toArray();
                //     $collection = new SearchProductCollection(Product::where('brand_id', $brands)->orderBy('num_of_sale', 'desc')->paginate(10));
                //     $collection->appends(['key' =>  $key, 'scope' => $scope]);
                //     return $collection;
                //
                // case 'shop':
                //
                //     $shops = Shop::select('user_id')->where('name', 'like', "%{$key}%")->get()->toArray();
                //     $collection = new SearchProductCollection(Product::where('user_id', $shops)->orderBy('num_of_sale', 'desc')->paginate(10));
                //     $collection->appends(['key' =>  $key, 'scope' => $scope]);
                //     return $collection;

            default:
                $collection = new SearchProductCollection(Product::where('name', 'like', "%{$key}%")->orWhere('tags', 'like', "%{$key}%")->orderBy('num_of_sale', 'desc')->paginate(10));
                $collection->appends(['key' =>  $key, 'scope' => $scope]);
                return $collection;
        }
    }

    public function variantPrice(Request $request)
    {
        $product = Product::findOrFail($request->id);
        $str = '';
        $tax = 0;

        if ($request->has('color')) {
            $data['color'] = $request['color'];
            $str = Color::where('code', $request['color'])->first()->name;
        }

        foreach (json_decode($request->choice) as $option) {
            $str .= $str != '' ?  '-' . str_replace(' ', '', $option->name) : str_replace(' ', '', $option->name);
        }

        if ($str != null && $product->variant_product) {
            $product_stock = $product->stocks->where('variant', $str)->first();
            $price = $product_stock->price;
            $stockQuantity = $product_stock->qty;
        } else {
            $price = $product->unit_price;
            $stockQuantity = $product->current_stock;
        }

        //discount calculation
        $flash_deals = FlashDeal::where('status', 1)->get();
        $inFlashDeal = false;
        foreach ($flash_deals as $key => $flash_deal) {
            if ($flash_deal != null && $flash_deal->status == 1 && strtotime(date('d-m-Y')) >= $flash_deal->start_date && strtotime(date('d-m-Y')) <= $flash_deal->end_date && FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $product->id)->first() != null) {
                $flash_deal_product = FlashDealProduct::where('flash_deal_id', $flash_deal->id)->where('product_id', $product->id)->first();
                if ($flash_deal_product->discount_type == 'percent') {
                    $price -= ($price * $flash_deal_product->discount) / 100;
                } elseif ($flash_deal_product->discount_type == 'amount') {
                    $price -= $flash_deal_product->discount;
                }
                $inFlashDeal = true;
                break;
            }
        }
        if (!$inFlashDeal) {
            if ($product->discount_type == 'percent') {
                $price -= ($price * $product->discount) / 100;
            } elseif ($product->discount_type == 'amount') {
                $price -= $product->discount;
            }
        }

        if ($product->tax_type == 'percent') {
            $price += ($price * $product->tax) / 100;
        } elseif ($product->tax_type == 'amount') {
            $price += $product->tax;
        }

        return response()->json([
            'product_id' => $product->id,
            'variant' => $str,
            'price' => (float) $price,
            'in_stock' => $stockQuantity < 1 ? false : true
        ]);
    }

    public function home()
    {
        return new ProductCollection(Product::inRandomOrder()->take(50)->get());
    }
    public function filteroptions(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                //'device_token' => 'required',
                // 'search' => 'required'
            ]);
            if ($validator->fails()) {
                $errors = customerrors($validator->errors());
                return response()->json(['status' => false, 'message' => "error", 'error' => $errors, 'data' => []]);
            }
            $sort_array = [1 => 'ASC', 2 => 'DESC'];
            $result_array = [];
            $result_array['options'] = \App\FilterOption::select('id', 'name')->get();
            $result_array['choseoption'] = [];
            $products = Product::select('id', 'choice_options');
            if ($request->sort_by) {
                $products->orderBy('id', $sort_array[$request->sort_by]);
            }
            if ($request->search) {
                $products = $products->where('name', 'LIKE', "%{$request->search}%");
            }
            if (($request->min) && ($request->max)) {
                $products = $products->whereBetween('purchase_price', [$request->min, $request->max]);
            }
            $products = $products->get();
            $result_array['choseoption'] = $products;
            $result_array['prince_range'] = ($request->min && $request->max) ? [$request->min, $request->max] : [];



            return response()->json(['status' => true, 'error' => [], 'message' => 'Fiter options fetch Successfully', 'data' => $result_array]);
        } catch (\Exception $ex) {
            return response()->json(['status' => false, 'error' => ['error'], 'message' => $ex->getMessage(), 'data' => (object)[]]);
        }
    }
    public function getproductattribute(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'attribute_id' => 'required',
        ]);
        if ($validator->fails()) {
            $errors = customerrors($validator->errors());
            return response()->json(['status' => false, 'error' => $errors, 'data' => [], "code" => 200], 200);
        }
        $attributes = Attribute::select('id', 'name')->where('id', $request->attribute_id)->first();
        return response()->json(['status' => true, 'error' => [], 'message' => 'Attribute fetch Successfully', 'data' => $attributes]);
    }
    public function sellertrustedproducts(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'page_no' => 'required',
        ]);
        if ($validator->fails()) {
            $errors = customerrors($validator->errors());
            return response()->json(['status' => false, "message" => "error", 'error' => $errors, 'data' => [], "code" => 200], 200);
        }
        $lower_bound = ($request->page_no - 1) * $this->page_size;
        $trusted_products = \App\Product::select('products.id', 'products.name', 'products.thumbnail_img', 'sellers.trusted', 'products.min_qty as minimum_qty')
            ->with(['verients'])
            ->join('sellers', 'products.user_id', '=', 'sellers.user_id')
            ->where('products.published', 1)
            ->skip($lower_bound)->take($this->page_size)
            ->get();
        $result_array['trusted'] = $trusted_products;
        $result_array['total_items'] = \App\Product::select('products.id', 'products.name', 'products.thumbnail_img', 'sellers.trusted')
            ->join('sellers', 'products.user_id', '=', 'sellers.user_id')
            ->where('products.published', 1)
            ->count();
        $result_array['per_page'] = $this->page_size;
        return response()->json(['status' => true, 'error' => [], 'message' => 'Seller Trusted Products Fetch Successfully', 'data' => $result_array]);
    }
    public function newArrivesellerproducts(Request $request){
        $validator = Validator::make($request->all(), [
            'seller_id' => 'required',
            'page_no'=>'required'
        ]);
        if ($validator->fails()) {
            $errors = customerrors($validator->errors());
            return response()->json(['status' => false, "message" => "error", 'error' => $errors, 'data' => [], "code" => 200], 200);
        }
        $seller = \App\Seller::where('user_id',$request->seller_id)->count();

        if($seller > 0){
            $total_items = Product::where('published', 1)->where('user_id',$request->seller_id)->count();
            $lower_bound = ($request->page_no - 1) * $this->page_size;
            $data = Product::select('id', 'name', 'thumbnail_img', 'min_qty as minimum_qty','discount','discount_type')
              ->orderBy('id','DESC')
              ->where('published', 1)
              ->where('user_id',$request->seller_id);
            $data = $data->skip($lower_bound)->take($this->page_size);
            $data = $data->get();
        }else{
            return response()->json(['status' => false, "error" => ['error'], 'message' => "Sorry this seller id is doesn't exsits", 'data' => (object)[]]);
        }
       
        $result_array['products'] = $data;
        $result_array['total_items'] = $total_items;
        $result_array['per_page'] = $this->page_size;
       
        return response()->json(['status' => true, "error" => [], 'message' => "Seller new arrived products are fetch successfully", 'data' => (object)$result_array]);
       

    }
}
