import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

export const apiMonitorInterceptor: HttpInterceptorFn = (req, next) => {

  req = req.clone(
    {
      headers: req.headers.set('Author','jeeva')
    }
  )

  return next(req).pipe(
    tap((resposne)=>console.log(resposne)),
    catchError((error)=>{
      if(error instanceof HttpErrorResponse){
        alert('Resposne error ...')
      }
      return throwError(()=>new Error('Error...'));
    })
  )as Observable<HttpEvent<unknown>>;
};
