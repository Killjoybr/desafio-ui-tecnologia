import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAtualizacaoComponent } from './tela-atualizacao.component';

describe('TelaAtualizacaoComponent', () => {
  let component: TelaAtualizacaoComponent;
  let fixture: ComponentFixture<TelaAtualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAtualizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
