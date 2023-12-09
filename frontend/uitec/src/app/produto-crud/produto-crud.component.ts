import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrl: './produto-crud.component.scss'
})
export class ProdutoCrudComponent {
  categorias: any[] = [];
  produtos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategorias().subscribe(data => {
      this.categorias = data;
    });

    this.apiService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }
}

