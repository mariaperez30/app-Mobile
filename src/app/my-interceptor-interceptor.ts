import { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('newsapi')) {
    const llaveDApi = "d8bbb88577a24f848b3ebc364f279bb8";
    const modificado = req.clone({
      setHeaders:{
        'X-Api-Key': llaveDApi
      }
    });
    return next(modificado);
  }
  return next(req);
};
