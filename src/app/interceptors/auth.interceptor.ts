import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('Interceptor called');
  const token = localStorage.getItem('token');
  
  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    // console.log(cloned.headers.get('Authorization')); 
    return next(cloned);
  } else {
    // console.log('not token'); 
    return next(req);
  }
  
};
