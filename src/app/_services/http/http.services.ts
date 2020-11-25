import { AuthService } from './../../_modules/home/pages/seguranca/auth.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, retry, delay, map } from 'rxjs/operators';
import { DefaultResponse } from './default-response';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient,
    private service: AuthService) { }

  post<T>(
    url,
    body
  ): Observable<DefaultResponse<T>> {
    return this.request<T>(
      'POST',
      `${url}`,
      body
    );
  }

  put<T>(
    url,
    body
  ): Observable<DefaultResponse<T>> {
    return this.request<T>(
      'PUT',
      `${url}`,
      body
    );
  }

  patch<T>(url, body): Observable<DefaultResponse<T>> {
    return this.request<T>('PATCH', `${url}`, body);
  }

  get<T>(url): Observable<DefaultResponse<T>> {
    return this.request<T>('GET', `${url}`);
  }

  delete<T>(url, id: number): Observable<DefaultResponse<T>> {
    return this.request<T>('DELETE', `${url}`, { id });
  }

  private request<T>(
    type: string,
    url: string,
    body: any = null
  ): Observable<DefaultResponse<T>> {

    this.service.isAccessTokenInvalido();

    let headers: HttpHeaders = this.getDefaultHeader();

    if (environment.logRequest) {
      //  console.dir({ type, url, headers, body });
    }

    if (environment.traceRequest) {
      // console.trace('trace');
    }

    return this.http
      .request<T>(
        type,
        url,
        { body, headers }
      )
      .pipe(
        shareReplay(),
        retry(0),
        delay(500),
        map((x) => this.onsuccess<T>(type, x))
      );
  }

  private getDefaultHeader() {
    const token: string = localStorage.getItem('token');

    // console.log("ttt- " + this.service.isAccessTokenInvalido())
    // console.log("token- " + token)

    if (token){
      const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
      console.log("entrei aqui 1")
      return headers;
    } 
    // else {
    //   const headers2 = new HttpHeaders({});
    //   console.log("entrei aqui 2")
    //   return headers2;
    // }
  }

  private oncatch<T>(e) {
    const result = new DefaultResponse<T>();
    result.error(e);
    return result;
  }

  private onsuccess<T>(type, e) {
    const result = new DefaultResponse<T>();
    result.success(type, e);
    return result;
  }

  getData(url: string): Observable<any> {
    return this.http.get(url).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
