import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitnessAppDataService {

  constructor(private http: HttpClient) { }
}
