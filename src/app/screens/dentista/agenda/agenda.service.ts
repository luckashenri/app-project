import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgendaService {

  public root = 'https://appodonto-3acda.firebaseio.com';

  constructor(private http: HttpClient) { }

  getAgenda() {
    return this.http.get(`${this.root}/cadastro.json`);
  }

  postAgenda(payload) {
    return this.http.post(`${this.root}/agenda`, payload).subscribe((res) => {
      console.log('postado', res);
    });
  }

}