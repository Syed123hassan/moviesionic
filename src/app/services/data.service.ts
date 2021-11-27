import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  readData(){
    return this.http.get<{data:any[]}>(`http://localhost:2000/products/products`)
  }
  addData(data){
    console.log(data);
    return this.http.post<{data:any[]}>(`http://localhost:2000/products/add-product`,data)  
  }
  deleteData(i){    
    return this.http.delete<{_id:number,productName:string,productPrice:number,productImageURL:string,productDescription:string,__v:string}>(`https://ty-shop.herokuapp.com/products/delete-product/${i}`)
  }
  editData(product){
    return this.http.put(`http://localhost:2000/products/edit-product/${product._id}`,product)
  }
}

