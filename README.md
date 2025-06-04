
# Projeto Uniesp

Sistema web desenvolvido para fins acadêmicos, com funcionalidades simulando uma aplicação de gerenciamento de dados. Utiliza tecnologias modernas como Vite, JavaScript/TypeScript e um banco de dados simulado com `json-server`.

---

## 📌 Visão Geral

Este projeto tem como objetivo demonstrar a estrutura e o funcionamento de uma aplicação web moderna com front-end leve, modular e de fácil manutenção.

---

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) – Build rápido para aplicações web modernas
- JavaScript
- HTML5
- CSS3
- `json-server` – API REST fake para prototipagem
- Node.js / npm

---

## 📁 Estrutura do Projeto

```
projetoUniesp/
├── data/               # Base de dados mockada (db.json)
├── index.html          # Arquivo principal HTML
├── vite.config.js      # Configurações do Vite
├── package.json        # Dependências e scripts
└── node_modules/       # Dependências instaladas
```

---

## ⚙️ Instalação e Execução

> Pré-requisitos: Node.js instalado (recomendado v16+)

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/projetoUniesp.git
```

2. Acesse a pasta do projeto:

```bash
cd projetoUniesp
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Para rodar o `json-server` (caso esteja usando a API fake):

```bash
npx json-server --watch data/db.json --port 3000
```

---

## 🔁 Fluxo da Aplicação

1. O usuário acessa a interface web no navegador (`index.html`, carregado via Vite).
2. O front-end se comunica com a API simulada (`json-server`) para buscar ou enviar dados.
3. As informações são renderizadas dinamicamente na página.
4. Interações (CRUD) são feitas diretamente com o `db.json`, simulando uma base de dados real.
