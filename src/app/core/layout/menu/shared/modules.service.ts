import { Injectable } from '@angular/core';
import { Http } from '../../../../shared/services/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { res } from './module';
import { environment } from '../../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  private route: string = '';


  constructor(private http: Http) { }

  getModules(): Observable<res> {
    const headers = new HttpHeaders({
      'Authorization': environment.authorization
    });

    return this.http.get(`${this.route}`, { headers });
  }
}
