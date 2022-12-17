import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Beer } from "../models";
import { HttpCallsService } from "./http-calls.service";

@Injectable({
    providedIn: 'root'
  })
  export class BeerService {    
    constructor(private httpClient: HttpCallsService) { }
    
    public getAllBeer$(): Observable<Beer[]>{
        return this.httpClient.get$("/beer");
    }

    public getFiltered$(): Observable<Beer[]>{
      return this.httpClient.get$("/beer/filter");
    }

    public getBeerAsc$(): Observable<Beer[]>{
      return this.httpClient.get$("/beer/asc");
    }

    public getBeerDesc$(): Observable<Beer[]>{
      return this.httpClient.get$("/beer/desc");
    }
}  