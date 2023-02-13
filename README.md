# E-commer - Denvnology-API - Back-End

## O que você encontrará aqui:

Este repositório contém todo o material necessario para você realizar requisições ao banco de dados do E-commerce.

## Quais ferramentas foram utilizadas para fazer a API?

A API foi construída com princípios REST. Como base, foi utilizado Typescript, Express e Prisma ORM.

## Estrutura de pastas e arquitetura:

Para a construção desta REST API, seguimos os princípios de arquitetura MRC (Model-Router-Control). No banco de dados, são feitas relações one-to-many. Visando relacionar o usuário com todas as relações necessárias em outras tabelas.

- `Prisma`

  Responsável por manter todas as migrações, conexão com banco de dados e configurações necessárias nas tabelas.

- `Src`

  Local onde ficam armazenados todo o core da aplicação.

  - `Database`

    Nos conceitos de MRC, esta pasta é responsável pela conexão com o banco de dados. Onde serão realizadas todas as pesquisas necessárias.

  - `Router`

    Camada mais próxima do cliente, onde será passado parâmetros para as requisições (caso houver), será passado status code e devolverá para o usuário uma resposta para as suas solicitações.

  - `Services`

    Camada onde serão construídas todas regras de negócio atribuídas a aplicação..

  - `Types`

    PResponsável por manter as interfaces com o tipo das chaves que os objetos possuem.

- `server.ts`

  Mantém o modulo das rotas, fará a validação do Cors e liberará a porta para acessar a API.

## Como rodar

É necessário estar na pasta do projeto. Então:

- Use `docker-compose build`

  Com este comando será possível buildar as imagens com os recursos necessários para usarmos a API.

- Após isso, use `docker-compose up`

- Acesse: http://localhost:3333
