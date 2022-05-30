import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:8080/api/auth/login";
  currentSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("El Servicio de Autenticación está corriendo");
    this.currentSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  IniciarSesión(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      //asigno al sS los datos del json obtenido
      this.currentSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado () {
    return this.currentSubject.value;
  }
}
