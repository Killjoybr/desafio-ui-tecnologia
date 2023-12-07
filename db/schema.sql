-- No campo valor, utilizar pontos flutuantes pode trazer inconsistência nas operações/transações
-- pesquisei sobre boas práticas e decidi trocar pelo tipo Money, presente no PostgreSQL.

CREATE TABLE produtos(
    id serial primary key,
    nome_do_produto VARCHAR(150) not null,
    categoria_id integer foreign key default 1,
    valor_do_produto money not null,
    data_de_vencimento date not null,
    quantidade_em_estoque integer not null,
    produto_perecivel boolean not null default false
);

CREATE TABLE categorias(
    id serial primary key,
    descricao VARCHAR(150) not null
);