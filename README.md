# API TypeGraphQL para Gerenciamento de Vídeos
Este projeto é uma API GraphQL desenvolvida usando TypeGraphQL, Apollo Server e Mongoose para o gerenciamento de vídeos com informações de título, categoria e descrição.

## Funcionalidades
<ul>
  <li>Adicionar um novo vídeo com título, categoria e descrição.</li>
  <li>Recuperar a lista de todos os vídeos disponíveis.</li>
</ul>

## Endpoints

### Adicionar Vídeo
  Adiciona um novo vídeo à base de dados.


<li>Método: POST</li>

<li>Endpoint: /addVideo</li>

### Exemplo de Requisição

```graphql
mutation {
  addVideo(
    videoInput: {
      title: "Título do Vídeo"
      category: "Categoria do Vídeo"
      description: "Descrição do Vídeo"
    }
  ) {
    title
    category
    description
  }
}
```

### Listar Vídeos
Retorna a lista de todos os vídeos disponíveis.

<li>Método: GET</li>
<li>Endpoint: /Videos</li>

### Exemplo de requisição 

```graphql

query {
  videos {
    title
    category
    description
  }
}

```

## Pré-requisitos e Instalação

1. Antes de executar o projeto, certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

2. Clone este repositório para o seu sistema local.

3. Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências:

```
yarn install
```
4. Inicie o servidor de desenvolvimento com o seguinte comando:

```
yarn dev
```
O servidor GraphQL estará disponível em http://localhost:8081.
