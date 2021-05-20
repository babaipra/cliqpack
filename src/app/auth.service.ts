import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout() :void {    
    window.localStorage.setItem('isLoggedIn','false');    
    window.localStorage.removeItem('email');   
    window.localStorage.removeItem('name'); 
    window.localStorage.removeItem('user'); 
    window.localStorage.removeItem('role'); 
    window.localStorage.removeItem('authtoken'); 

    // http://dev1.ivantechnology.in/cliqpack/api/v1/auth/logout 
    
    } 
}
