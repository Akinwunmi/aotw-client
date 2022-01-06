// Copyright 2022,
// Jurrit van der Ploeg

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retryWhen, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = 'An unknown error occurred...';

        if (error.status === 0) {
          console.error('An error occurred:', error.error);
          errorMessage = `An error occurred: ${error.error}`;
        } else {
          console.error(`Backend returned code ${error.status}, body was:`, error.error);
          errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
        }

        return throwError(errorMessage);
      }),
      retryWhen(errors => errors.pipe(
        delay(5000),
        take(3)
      ))
    );
  }
}
