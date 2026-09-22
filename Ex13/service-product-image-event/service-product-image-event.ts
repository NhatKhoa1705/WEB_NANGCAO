import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEvent } from '../services/product-event';
@Component({
standalone: false,
selector: 'app-service-product-image-event',
templateUrl: './service-product-image-event.html',
styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
public products:any
constructor(pservice: ProductEvent,private router:Router){
this.products=pservice.getProductsWithImages()
}
viewDetail(f:any)
{
this.router.navigate(['service-product-image-event',f.ProductId])
}
}