import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categorias`)
  }

  getProdutos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos`)
  }

  getProduto(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos/${id}`)
  }

  cadastrarProduto(dadosProduto:{nome_do_produto:string,categoria_id:number,valor_do_produto:number,data_de_vencimento:Date,quantidade_em_estoque:number,produto_perecivel:boolean}): Observable<any> {
    return this.http.post(`${this.apiUrl}/produtos`, dadosProduto)
  }


  atualizarProduto(id:number, dadosProduto:{nome_do_produto:string,categoria_id:number,valor_do_produto:number,data_de_vencimento:Date,quantidade_em_estoque:number,produto_perecivel:boolean}): Observable<any> {
    return this.http.put(`${this.apiUrl}/produtos/${id}`, dadosProduto)
  }

  deletarProduto(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/produtos/${id}`)
  }

}
