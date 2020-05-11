import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { HttpHandler, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Routes, RouterModule } from '@angular/router';


@Injectable()
export class AppInterceptor implements HttpInterceptor {
    // tslint:disable-next-line:max-line-length
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        // throw new Error("Method not implemented.");
        // logic
        const token = sessionStorage.getItem('auth');
        console.log('My request got intercepted', token);
        const tokenData = 'Bearer' + token;
        console.log(req.url);
        console.log(req);

        console.log(tokenData);
        const modifiedRequest = req.clone({headers: req.headers.append('Authorization' , '')});
        return next.handle(modifiedRequest).pipe(

        map((event: any) => {
              // tslint:disable-next-line:no-debugger
              debugger;
              if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // navigate from here
                    // this.router.navigate('/login');
                }
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };

                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }

}



// headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
// status: 401
// statusText: "Unauthorized"
// url: "http://localhost:2000/api/getAllProducts?name=BhargavGuntaka&price=78"
// ok: false
// name: "HttpErrorResponse"
// message: "Http failure response for http://localhost:2000/api/getAllProducts?name=BhargavGuntaka&price=78: 401 Unauthorized"
// error: "login Req"
