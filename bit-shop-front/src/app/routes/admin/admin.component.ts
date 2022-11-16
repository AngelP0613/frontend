import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getProduts();
  }

  getProduts() {
    let response = this.productService.getProducts();

    response.subscribe((res: any) => {
      this.productService.products = res.data;
      console.log(this.productService.products);
    });
  }

  orderByPrice() {
    let products = this.productService.products || [];
    let sortedProducts;

    console.log('Ejecucion');

    if (products || products.length > 0) {
      sortedProducts = products.sort((a: any, b: any) =>
        a.price > b.price ? -1 : 1
      );
      sortedProducts = products.sort((a: any, b: any) =>
        a.price < b.price ? 1 : -1
      );
      //({},{}) => ({}.price < {}.price) ? 1 : -1)
      //if condicion{
      //  se cumple
      //} else {
      //  no se cumple
      //}

      //(condicion)? si cumple : si no se cumple

      this.productService.products = sortedProducts;
      return;
    }
  }

  createProduct(form: NgForm) {
    console.log(form.value); //{datos del formulario}
    let { name, description } = form.value;
    //delete form.value._id
    if (!name || !description) return alert('diligencie todos los campos');
    this.productService
      .createProduct(form.value)
      .subscribe((res: any) => {
        this.getProduts();
        alert(res.msg);
        this.productService.currentProduct = new Product();
      });
  }

  deleteProduct(id: string, name: string) {
    let isDeleted = confirm(
      `Esta seguro que desa eliminar el producto "${name}"`
    ); //aceptar - true  cancelar - false

    if (isDeleted) {
      this.productService.deleteProduct(id).subscribe((res: any) => {
        this.getProduts();
        alert(res.msg || 'error');
      });
      return;
    }
    return;
  }
  updateProduct( data: Product) {
  }
  fillForm(product: Product) {
    this.productService.currentProduct = product;
  }
}
