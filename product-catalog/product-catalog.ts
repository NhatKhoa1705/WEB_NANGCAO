import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  styleUrl: './product-catalog.css',
  templateUrl: './product-catalog.html',
})
export class ProductCatalog {
  public categories: any[];

  constructor(catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }
}
