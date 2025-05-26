# Minha Primeira API - Backend Node.js + Express e Frontend React

## Resumo

Este projeto consiste em uma API simples para gerenciar uma lista de alunos, desenvolvida com backend em **Node.js** e **Express** e frontend em **React** usando **Vite**. O objetivo é aplicar conceitos de APIs REST, integração entre backend e frontend, além de prática com desenvolvimento fullstack. Foi criado para fins acadêmicos e aprendizado prático.

---

## Tecnologias Utilizadas

- **Node.js**: ambiente de execução JavaScript para backend.
- **Express**: framework minimalista para criação da API REST.
- **React**: biblioteca JavaScript para construção da interface do usuário.
- **Vite**: ferramenta para desenvolvimento rápido do frontend.
- **npm**: gerenciador de pacotes para instalação das dependências.

---

## Metodologia

### 1. Configuração do Ambiente

- Verificar e instalar Node.js e npm.
- Criar as pastas do projeto para backend (`minha-api`) e frontend (`frontend`).
- Inicializar cada parte com `npm init -y` e configurar os arquivos necessários.

### 2. Desenvolvimento do Backend

- Instalar o Express com `npm install express`.
- Criar o arquivo `index.js` com:
  - Importação do Express e criação da aplicação.
  - Configuração da porta 3000.
  - Middleware para receber JSON.
  - Rotas:
    - `GET /` para verificar se a API está funcionando.
    - `GET /alunos` para retornar uma lista fixa de alunos.
  - Inicializar o servidor.

### 3. Testes da API

- Executar o backend com `node index.js`.
- Testar as rotas via navegador ou ferramentas como `curl` ou Postman.

### 4. Desenvolvimento do Frontend

- Criar o frontend com React e Vite.
- Modificar o componente principal para fazer requisição `fetch` à API na rota `/alunos`.
- Renderizar a lista de alunos na interface.

### 5. Execução Integrada

- Rodar backend e frontend simultaneamente.
- Verificar comunicação entre frontend e backend consumindo e exibindo dados.

---

## Servidores

🔗 [frontend](http://localhost:3001/alunos)
🔗 [backend](http://localhost:3000/alunos)

---
## Estrutura do Projeto

minha-primeira-api/
├── minha-api/        # Backend (Node.js + Express)
│   └── index.js
├── frontend/         # Frontend (React + Vite)
│   ├── src/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
└── README.md




---

