import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/app/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class HttpCallsService {
    private apiUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }
    
    public getAll$(path: string): Observable<any>{
        return this.httpClient.get(this.apiUrl + path);
    }
  }  