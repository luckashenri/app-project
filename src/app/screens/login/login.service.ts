import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';

const API_KEY = 'AIzaSyAORRZwRLbIwa5zsTqMDmVWcrQu8L5-iWA';

@Injectable({ providedIn: 'root' })
export  class LoginService {

    constructor(private http: HttpClient) {}

    login(email: string, senha: string) {
        return this.http
        .post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,
        { email: email, password: senha, returnSecureToken: true}
        );
    }

}
