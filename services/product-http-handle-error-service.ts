import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpHandleErrorService {

  private url = '/datasets/products1.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.url).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );

  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {

      // 1. Client-side error
      // (e.g., network issues, subscription errors)
      errorMessage = `Client-side error: ${error.error.message}`;

    } else {

      // 2. Server-side error
      // (e.g., 404 Not Found, 500 Internal Server Error)
      errorMessage = `
        Error Status: ${error.status}
        Status Text: ${error.statusText}
        URL: ${error.url}
        Server Details: ${
          error.error
            ? JSON.stringify(error.error)
            : 'No details available'
        }
      `;

    }

    // Log to console for debugging purposes
    console.error(errorMessage);

    // Return detailed error message to be handled by the Component
    return throwError(() => new Error(errorMessage));

  }
}