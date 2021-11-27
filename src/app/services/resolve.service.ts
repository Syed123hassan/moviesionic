import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Product } from "./auth.service";

export interface Apiresponse{
  error:boolean,
  message:string,
  product:Product[]
}
@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Apiresponse> {

  constructor(private auth:DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Apiresponse | Observable<Apiresponse> | Promise<Apiresponse> {
    throw new Error('Method not implemented.');
  }

  
}
