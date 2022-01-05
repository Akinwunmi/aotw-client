// Copyright 2022,
// Jurrit van der Ploeg

import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';

import { HttpErrorInterceptor } from './http-error-interceptor';

describe('HttpErrorInterceptor', () => {
  let interceptor: HttpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = TestBed.inject(HttpErrorInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  describe('catch error', () => {
    const httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['']);
    const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);

    it('should handle error with status 400', () => {
      httpHandlerSpy.handle.and.returnValue(throwError({
        status: 400,
        error: 'foo'
      }));

      interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe(
        result => console.log('no error', result),
        err => {
          expect(err).toEqual('Backend returned code 400, body was: foo');
        }
      );
    });

    it('should handle error with status 0', () => {
      httpHandlerSpy.handle.and.returnValue(throwError({
        status: 0,
        error: 'bar'
      }));

      interceptor.intercept(httpRequestSpy, httpHandlerSpy).subscribe(
        result => console.log('no error', result),
        err => {
          expect(err).toEqual('An error occurred: bar');
        }
      );
    });
  });
});
