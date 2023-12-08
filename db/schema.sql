-- No campo valor, utilizar pontos flutuantes pode trazer inconsistência nas operações/transações
-- pesquisei sobre boas práticas e decidi trocar pelo tipo Money, presente no PostgreSQL.
-- Devido ao tipo money não aparecer nas migrations do Laravel, voltei ao tipo float. 

CREATE DATABASE laravel;

CREATE TABLE categorias(
    id serial primary key,
    descricao VARCHAR(150) not null
);

CREATE TABLE produtos(
    id serial primary key,
    nome_do_produto VARCHAR(150) not null,
    categoria_id integer references categorias(id),
    valor_do_produto float not null,
    data_de_vencimento date,
    quantidade_em_estoque integer not null,
    produto_perecivel boolean not null default false
);