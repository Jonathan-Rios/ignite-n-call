<h1 align="center">Ignite - Call</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.6-blue" 
    alt="React Ver. ^18.2.0"
  />
   <img 
    src="https://img.shields.io/badge/NextJS-%5E13.4.1-black" 
    alt="NextJS Ver. ^13.4.1"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E4.6.4-blue"
    alt="Typescript Ver. 5.0.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2023-green" 
    alt="Ignite-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/ignite-n-call?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/ignite-n-call?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/ignite-n-call?color=4DA1CD 'Languages') &nbsp;
  
</div>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

<div align="center">
  <img src=".github/project-preview.png?style=flat" >
</div> 
 

<br>

## 💻 Projeto
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Nesse projeto é abordado os fundamentos de **Next.js** utilizando NextAuth para se conectar via oAuth com o Google, foi utilizado o Prisma como ORM para gerenciar a parte do banco.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth](https://next-auth.js.org/)
- [Nookies](https://www.npmjs.com/package/nookies)
- [ReactQuery](https://tanstack.com/query/v3/)
 

## 🚀 Link da aplicação: 

Só acessar \o

https://ignite-n-call-jrs.vercel.app/
 
 
 
## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Criando o projeto e suas dependências </h3>

```bash
  # Criando o projeto com NextJS

  ➜ npx create-next-app@latest

  ✔ What is your project named? … ignite-n-call
  ✔ Would you like to use TypeScript with this project? … Yes
  ✔ Would you like to use ESLint with this project? … Yes
  ✔ Would you like to use Tailwind CSS with this project? … No
  ✔ Would you like to use `src/` directory with this project? … Yes
  ✔ Use App Router (recommended)? … No
  ✔ Would you like to customize the default import alias? … No
 

  ➜ npm i @ignite-ui/react@latest
  ➜ npm i @rocketseat/eslint-config -D

  ➜ npm i phosphor-react

  ➜ npm i react-hook-form 
  ➜ npm i @hookform/resolvers 
  ➜ npm i zod

  ➜ npm i prisma -D
  ➜ npm i @prisma/client

  ➜ npm i axios
  
  ➜ npm i nookies  // Next Cookies

  ➜ npm i next-auth

  ➜ npm i dayjs
  
  ➜ npm i @tanstack/react-query

  ➜ npm i googleapis

  ➜ npm i next-seo
```   
<br />
 
 <h3>Utilizando prisma </h3>

```javascript
  // Instale/Ative a extensão no VSCode chamada prisma.

  ➜ npm i prisma -D  
  // Esse comando é para instalar a CLI do prisma, para poder usar as linhas de comando.

  ➜ npm i @prisma/client 
  // Essa é a dependência para gerenciar o banco de dados.

  ➜ npx prisma init --datasource-provider SQLite  
  // Comando para iniciar e configurar qual o banco de dados que vamos utilizar.
  // Ele vai gerar um .env ( comente ele no git ignore )

  ➜ npx prisma migrate dev
  // Vai ler as configurações do prisma e ver se houveram alterações, se sim vai aplicá-las
      ? Enter a name for the new migration: › create users 
      // Informe exatamente o que fez desde a última migration

  ➜ npx prisma studio
  // Comando para acessar a interface do prisma para ver o banco de dados

  // Foi criado um arquivo do prisma para utilizar ele na aplicação
  local: src/lib/prisma.ts

  // De forma resumida quando já está pronto se usa o push para aplicar ao banco destino.
  // Já o migrate é para dar manutenção a esse banco.
  npx prisma db push
```   
<br />
 

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)