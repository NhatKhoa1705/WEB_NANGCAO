import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products: Product[] = [
        {
          id: 1,
          name: 'Coca',
          price: 15,
          image_link: decodeURIComponent('https%3A%2F%2Fbizweb.dktcdn.net%2F100%2F469%2F765%2Fproducts%2F1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg%3Fv%3D1670317796997'),
          imageUrl: decodeURIComponent('https%3A%2F%2Fbizweb.dktcdn.net%2F100%2F469%2F765%2Fproducts%2F1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg%3Fv%3D1670317796997'),
          description: 'Nước ngọt Coca Cola vị ngọt đặc trưng.'
        },
        {
          id: 2,
          name: 'Pepsi',
          price: -12,
          image_link: 'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934588012112.jpg.webp',
          imageUrl: 'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934588012112.jpg.webp',
          description: 'Nước ngọt Pepsi có hương cola sảng khoái.'
        },
        {
          id: 3,
          name: '7up',
          price: 10,
          image_link: 'https://sieuthihoaba.com.vn/wp-content/uploads/2020/08/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.jpg',
          imageUrl: 'https://sieuthihoaba.com.vn/wp-content/uploads/2020/08/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.jpg',
          description: 'Nước ngọt 7Up vị chanh mát lạnh.'
        },
        {
          id: 4,
          name: 'Mirinda',
          price: -8,
          image_link: decodeURIComponent('https%3A%2F%2Fwww.lottemart.vn%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F0x0%2F8%2F9%2F8934588882111-1-1.jpg.webp'),
          imageUrl: decodeURIComponent('https%3A%2F%2Fwww.lottemart.vn%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F0x0%2F8%2F9%2F8934588882111-1-1.jpg.webp'),
          description: 'Nước ngọt Mirinda hương soda kem việt quất.'
        },
        {
          id: 5,
          name: 'Sprite',
          price: 5,
          image_link: decodeURIComponent('https%3A%2F%2Fcdnv2.tgdd.vn%2Fbhx-static%2Fbhx%2Fproduction%2F2026%2F6%2Fimage%2FProducts%2FImages%2F2443%2F5366899%2Fbhx%2Fnuoc-ngot-sprite-huong-chanh-bac-ha-lon-320ml_202606030145308333.jpg'),
          imageUrl: decodeURIComponent('https%3A%2F%2Fcdnv2.tgdd.vn%2Fbhx-static%2Fbhx%2Fproduction%2F2026%2F6%2Fimage%2FProducts%2FImages%2F2443%2F5366899%2Fbhx%2Fnuoc-ngot-sprite-huong-chanh-bac-ha-lon-320ml_202606030145308333.jpg'),
          description: 'Nước ngọt Sprite vị chanh sảng khoái.'
        },
        {
          id: 6,
          name: 'Heineken',
          price: 200,
          image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVC6AM0iU44XqZlar9RE6td7qazomQ0LI5V_kiK4QnHaa0d9gub-Ah_ik&s=10',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVC6AM0iU44XqZlar9RE6td7qazomQ0LI5V_kiK4QnHaa0d9gub-Ah_ik&s=10',
          description: 'Bia Heineken mát lạnh.'
        }
      ]
      constructor(){}
      getProductList()
      {
        return this.products
      }
      filterProductsByPrice(min: number, max: number) {
        return this.products.filter(p=>p.price>=min && p.price<=max)
      }
}