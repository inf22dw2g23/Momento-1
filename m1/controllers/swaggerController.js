const config = require("../configs/env");

const swaggerJSDoc = require("swagger-jsdoc");

const fs = require('fs');
const path = require('path');

const showSwaggerController = (req, res) => {
  const filePath = path.join(__dirname, 'swaggerController.js');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  });
};

module.exports = {
  showSwaggerController
};


const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "OAuth2 Movies API",
    version: "1.0.0",
    description: "API de Filmes desenvolvida pelo Grupo01 de Desenvolvimento Web II",
    contact: { name: "inf-21-dw2-g01" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  security: [
    {
      OAuth2Security: [],
    },
  ],
  "paths": {
     "/jogadores": {
        "get": {
           "summary": "Lista de jogadores",
           "description": "Retorna uma lista de todos os jogadores cadastrados",
           "responses": {
              "200": {
                 "description": "Lista de jogadores retornada com sucesso"
              }
           }
        },
        "post": {
           "summary": "Criação de jogador",
           "description": "Cria um novo jogador",
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "nome": {
                             "type": "string"
                          },
                          "email": {
                             "type": "string"
                          },
                          "senha": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "nome",
                          "email",
                          "senha"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Jogador criado com sucesso"
              }
           }
        }
     },
     "/jogadores/{id}": {
        "get": {
           "summary": "Detalhes do jogador",
           "description": "Retorna os detalhes de um jogador específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do jogador",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Detalhes do jogador retornados com sucesso"
              }
           }
        },
        "put": {
           "summary": "Atualização do jogador",
           "description": "Atualiza os dados de um jogador específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do jogador",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "nome": {
                             "type": "string"
                          },
                          "email": {
                             "type": "string"
                          },
                          "senha": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "nome",
                          "email",
                          "senha"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Jogador atualizado com sucesso"
              }
           }
        },
        "delete": {
           "summary": "Remoção do jogador",
           "description": "Remove um jogador específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do jogador",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Jogador removido com sucesso"
              }
           }
        }
     },
     "/partidas": {
        "get": {
           "summary": "Lista de partidas",
           "description": "Retorna uma lista de todas as partidas cadastradas",
           "responses": {
              "200": {
                 "description": "Lista de partidas retornada com sucesso"
              }
           }
        },
        "post": {
           "summary": "Criação de partida",
           "description": "Cria uma nova partida",
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "jogador1_id": {
                             "type": "integer"
                          },
                          "jogador2_id": {
                             "type": "integer"
                          },
                          "tabuleiro": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "jogador1_id",
                          "jogador2_id",
                          "tabuleiro"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Partida criada com sucesso"
              }
           }
        }
     },
     "/partidas/{id}": {
        "get": {
           "summary": "Detalhes da partida",
           "description": "Retorna os detalhes de uma partida específica",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID da partida",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Detalhes da partida retornados com sucesso"
              }
           }
        },
        "put": {
           "summary": "Atualização da partida",
           "description": "Atualiza os dados de uma partida específica",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID da partida",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "jogador1_id": {
                             "type": "integer"
                          },
                          "jogador2_id": {
                             "type": "integer"
                          },
                          "tabuleiro": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "jogador1_id",
                          "jogador2_id",
                          "tabuleiro"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Partida atualizada com sucesso"
              }
           }
        },
        "delete": {
           "summary": "Remoção da partida",
           "description": "Remove uma partida específica",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID da partida",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Partida removida com sucesso"
              }
           }
        }
     },
     "/resultados": {
        "get": {
           "summary": "Lista de resultados",
           "description": "Retorna uma lista de todos os resultados cadastrados",
           "responses": {
              "200": {
                 "description": "Lista de resultados retornada com sucesso"
              }
           }
        },
        "post": {
           "summary": "Criação de resultado",
           "description": "Cria um novo resultado",
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "jogador_id": {
                             "type": "integer"
                          },
                          "vitorias": {
                             "type": "integer"
                          },
                          "derrotas": {
                             "type": "integer"
                          },
                          "empates": {
                             "type": "integer"
                          }
                       },
                       "required": [
                          "jogador_id",
                          "vitorias",
                          "derrotas",
                          "empates"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Resultado criado com sucesso"
              }
           }
        }
     },
     "/resultados/{id}": {
        "get": {
           "summary": "Detalhes do resultado",
           "description": "Retorna os detalhes de um resultado específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do resultado",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Detalhes do resultado retornados com sucesso"
              }
           }
        },
        "put": {
           "summary": "Atualização do resultado",
           "description": "Atualiza os dados de um resultado específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do resultado",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "jogador_id": {
                             "type": "integer"
                          },
                          "vitorias": {
                             "type": "integer"
                          },
                          "derrotas": {
                             "type": "integer"
                          },
                          "empates": {
                             "type": "integer"
                          }
                       },
                       "required": [
                          "jogador_id",
                          "vitorias",
                          "derrotas",
                          "empates"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Resultado atualizado com sucesso"
              }
           }
        },
        "delete": {
           "summary": "Remoção do resultado",
           "description": "Remove um resultado específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do resultado",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Resultado removido com sucesso"
              }
           }
        }
     },
     "/users": {
        "get": {
           "summary": "Lista de usuários",
           "description": "Retorna uma lista de todos os usuários cadastrados",
           "responses": {
              "200": {
                 "description": "Lista de usuários retornada com sucesso"
              }
           }
        },
        "post": {
           "summary": "Criação de usuário",
           "description": "Cria um novo usuário",
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "name": {
                             "type": "string"
                          },
                          "email": {
                             "type": "string"
                          },
                          "password": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "name",
                          "email",
                          "password"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Usuário criado com sucesso"
              }
           }
        }
     },
     "/users/{id}": {
        "get": {
           "summary": "Detalhes do usuário",
           "description": "Retorna os detalhes de um usuário específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do usuário",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Detalhes do usuário retornados com sucesso"
              }
           }
        },
        "put": {
           "summary": "Atualização do usuário",
           "description": "Atualiza os dados de um usuário específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do usuário",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "requestBody": {
              "required": true,
              "content": {
                 "application/json": {
                    "schema": {
                       "type": "object",
                       "properties": {
                          "name": {
                             "type": "string"
                          },
                          "email": {
                             "type": "string"
                          },
                          "password": {
                             "type": "string"
                          }
                       },
                       "required": [
                          "name",
                          "email",
                          "password"
                       ]
                    }
                 }
              }
           },
           "responses": {
              "200": {
                 "description": "Usuário atualizado com sucesso"
              }
           }
        },
        "delete": {
           "summary": "Remoção do usuário",
           "description": "Remove um usuário específico",
           "parameters": [
              {
                 "name": "id",
                 "in": "path",
                 "description": "ID do usuário",
                 "required": true,
                 "schema": {
                    "type": "integer"
                 }
              }
           ],
           "responses": {
              "200": {
                 "description": "Usuário removido com sucesso"
              },
           },
        },
     }

  },
   securitySchemes: {
      OAuth2Security: {
      type: "oauth2",
      flows: {
         authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: {
            "read:users": "Read users",
             },
            },
          },
         },
      },
   };


const options = {
   swaggerDefinition,
   apis: ["./swagger/*/.yaml"]
};

const swaggerSpec = swaggerJSDoc(options);

module.export = swaggerDefinition;