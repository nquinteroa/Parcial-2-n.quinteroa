
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Concierto } from './concierto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConciertoService {

private apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

 getConciertos():Observable<Concierto[]>{
   return this.http.get<Concierto[]>(this.apiUrl);
 }
}
