import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";
import {SpinnerService} from "./spinner.service";

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor{

  constructor( private spinnerService : SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }
}
