import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private rootUrl = 'http://192.168.0.106:8000/';

  constructor(private http: HttpClient) {

  }

  getListOfCategories() {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http.get(this.rootUrl + "get-categories/", { headers: reqHeader });
  }

  saveCategory(data) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http.post(this.rootUrl + 'create-category/', data, { headers: reqHeader });
  }

  getNamesOfCategories() {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http.get(this.rootUrl + "get-names-categories/", { headers: reqHeader });
  }

  saveSubCategory(data) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'Application/json' });
    return this.http.post(this.rootUrl + 'create-sub-category/', data, { headers: reqHeader });
  }

}
