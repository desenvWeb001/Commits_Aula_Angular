import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cadastro } from '../interface/cadastro';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  resource = "api";
  api = environment.agendamentoApiUrl + '/' + this.resource;

constructor(private http: HttpClient) { }

 httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addCadastro(cadastro: Cadastro): Observable<Cadastro> {
    const url = this.api + '/produto'; 
    return this.http.post<Cadastro>(url, cadastro,this.httpOptions);
  }

  getCadastro(): Observable<Cadastro[]>{
    const url2 = this.api + '/produto';
    return this.http.get<Cadastro[]>(url2);
  }

  update(cadastro:  Cadastro): Observable<Cadastro>{
    const url3 = `${this.api}/produto/${cadastro.id}`
    return this.http.put<Cadastro>(url3,cadastro)
  }
}
