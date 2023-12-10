CREATE DATABASE IF NOT EXISTS laravel;

CREATE TABLE IF NOT EXISTS categorias(
    id serial primary key,
    descricao VARCHAR(150) not null
);

CREATE TABLE IF NOT EXISTS produtos(
    id serial primary key,
    nome_do_produto VARCHAR(150) not null,
    categoria_id integer references categorias(id),
    valor_do_produto float not null,
    data_de_vencimento date,
    quantidade_em_estoque integer not null,
    produto_perecivel boolean not null default false
);

INSERT INTO categorias(descricao) VALUES
('Outros'),
('Eletrônicos'),
('Alimentos e Bebidas'),
('Automotivo'),
('Acessórios'),
('Roupas'),
('Brinquedos e Jogos')