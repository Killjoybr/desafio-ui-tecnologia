import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrl: './produto-crud.component.scss'
})
export class ProdutoCrudComponent {
  categorias: {id:number, descricao:string}[] = [];
  produtos: {
    id:number,
    nome_do_produto:string,
    categoria_id:number,
    valor_do_produto:number,
    data_de_vencimento:Date,
    quantidade_em_estoque:number,
    produto_perecivel:boolean
  }[] = [];
  nome_do_produto!:string;
  categoria_id!:number;
  valor_do_produto!:number;
  data_de_vencimento!:Date;
  quantidade_em_estoque!:number;
  produto_perecivel:boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategorias().subscribe(data => {
      this.categorias = data;
    });

    this.apiService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  onSubmit() {
    const formData = {
      nome_do_produto: this.nome_do_produto,
      categoria_id: this.categoria_id,
      valor_do_produto: this.valor_do_produto,
      data_de_vencimento: this.data_de_vencimento,
      quantidade_em_estoque: this.quantidade_em_estoque,
      produto_perecivel: this.produto_perecivel,
    };
    
    this.apiService.cadastrarProduto(formData).subscribe(
      {
        error: (erro) => console.error('Erro ao criar produto:',erro),
        complete: () => console.info('Produto cadastrado com sucesso', this.apiService.getProdutos().subscribe(data =>
          {
          this.produtos = data;
          }
        ))
      }
    );
  }

  deletarProduto(idProduto:number) {
    this.apiService.deletarProduto(idProduto).subscribe(
      {
        error: (erro) => console.error('Erro ao deletar produto:', erro),
        complete: () => console.info(`Produto de id:${idProduto} deletado com sucesso`,this.apiService.getProdutos().subscribe(data =>
          {
            this.produtos = data;
          }
        ))
      }
    )
  }

  // atualizarProduto(idProduto:number) {
  //   this.apiService.atualizarProduto()
  // }
}

