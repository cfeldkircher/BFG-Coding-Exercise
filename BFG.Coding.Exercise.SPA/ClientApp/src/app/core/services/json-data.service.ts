import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

    constructor(private http: HttpClient) { }
    dataUrl = environment.apiUrl + 'data';

    getJsonData(): Observable<any> {
        return this.http.get(this.dataUrl, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    appendJsonData(data: any): Observable<any> {
        return this.http.post(this.dataUrl, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}
