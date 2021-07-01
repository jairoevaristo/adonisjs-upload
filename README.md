# API upload

## Tech's

  - **Typescript** :large_blue_circle:.
  - **NodeJS** :man_technologist:.
  - **AdonisJS** :high_brightness:.

## Get started

1 - Instale as dependências

```bash
  npm install
```
or 
 
```bash
  yarn install
```
 
2 - Rode o comando no terminal na pasta do projeto

```bash
  npm run start
```

or 

```bash
  yarn start
```

## Using

Para criar a tabela no banco de dados rode o seguinte comando na pasta do projeto
```bash
  node ace migration:run
```

Para poder acessar as rotas da API, deve se utilizar um prefixo ante do recurso
```bash
  http://localhost:3333/api/v1
```

Rota responsável por realizar o upload. [POST]

```bash
  http://localhost:3333/api/v1/upload
```


Rota responsável por listar e retornar dos os dados das imagens no banco de dados. [GET]

```bash
  http://localhost:3333/api/v1/
```
