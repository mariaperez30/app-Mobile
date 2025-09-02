import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class API {
  constructor(private httpClient: HttpClient){}




    async get<A>(url:string):Promise<A>{
      return new Promise((resolve,reject)=>{
        this.httpClient.get<A>(url).subscribe({
          next: (value) => resolve(value),
          error: (Error) => reject(Error)
        })
      });
    }
  }
  

