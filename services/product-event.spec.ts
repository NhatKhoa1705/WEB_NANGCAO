import { TestBed } from '@angular/core/testing';
import { ProductEvent } from './product-event';

describe('ProductEvent', () => {
  let service: ProductEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEvent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
