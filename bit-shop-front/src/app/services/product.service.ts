import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URL_API = "http://localhost:5000/product"
  products: any
  currentProduct : Product

  constructor(public http: HttpClient) {
    this.currentProduct = new Product()
   }

  getProducts(){
    return this.http.get(`${this.URL_API}/get-products`)
  }
  createProduct(data:Product){
    console.log("trabajando melo")
    return this.http.post(`http://127.0.0.1:5000/product/create-product`, data)
     
  }
  deleteProduct(id:string){
    return this.http.delete(`${this.URL_API}/delete-product?id=${id}`)
  }
  updateProduct(id:string, data: any){
    return this.http.put(`${this.URL_API}/update-product?id=${id}`, data)
  }

}
