import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private http : HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', user)
  }
  logado(){
    let ok = false
    if(environment.token != ''){
      return ok = true
    }
    return ok
  }
}

