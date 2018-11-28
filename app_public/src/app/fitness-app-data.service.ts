import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './test-comp/test-comp.component';

@Injectable({
  providedIn: 'root'
})
export class FitnessAppDataService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUsers(): Promise<User[]> {
    
    const url: string = `${this.apiBaseUrl}/users`;

    return this.http.get(url).toPromise().then(response => response as User[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('something is wrong', error);
    return Promise.reject(error.message || error);
  }
}
