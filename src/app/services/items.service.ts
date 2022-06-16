import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  apiUrl = environment.apiUrl;
  categories: string[] = [];

  constructor(private http: HttpClient) {}

  getItemById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/${id}`);
  }

  getResultsByQuery(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/sites/MLA/search?q=${query}`);
  }
}
