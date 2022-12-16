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
        return this.httpClient.getAll$("/beer");
    }
  }  