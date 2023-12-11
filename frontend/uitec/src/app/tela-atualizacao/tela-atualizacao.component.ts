import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tela-atualizacao',
  templateUrl: './tela-atualizacao.component.html',
  styleUrl: './tela-atualizacao.component.scss'
})
export class TelaAtualizacaoComponent {
  @Input() isVisible:boolean = false;
  @Output() fecharTela = new EventEmitter<void>();

  @Input() produto!: {
    id: number,
    nome_do_produto: string,
    categoria_id: number,
    valor_do_produto: number,
    data_de_vencimento: Date,
    quantidade_em_estoque: number,
    produto_perecivel: boolean
  };

  categorias: {id:number, descricao:string}[] = [];

  id!:number;
  nome_do_produto!:string;
  categoria_id!:number;
  valor_do_produto!:number;
  data_de_vencimento!:Date;
  quantidade_em_estoque!:number;
  produto_perecivel:boolean = false;

  produtoModal!: Observable<{
    "id": number,
    "nome_do_produto": string,
    "categoria_id": number,
    "valor_do_produto": string,
    "data_de_vencimento"?: Date,
    "quantidade_em_estoque": number,
    "produto_perecivel": boolean
  }>;


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.produtoModal = this.apiService.getProduto(this.id);
  }


  fecharModal(){
    this.fecharTela.emit();
    this.isVisible = false
  }


  onSubmit(){
    const formData = {
      id: this.id,
      nome_do_produto: this.nome_do_produto,
      categoria_id: this.categoria_id,
      valor_do_produto: this.valor_do_produto,
      data_de_vencimento: this.data_de_vencimento,
      quantidade_em_estoque: this.quantidade_em_estoque,
      produto_perecivel: this.produto_perecivel,
    };
  
    this.apiService.atualizarProduto(this.id,formData).subscribe()
      
    this.ngOnInit()
  }
}
