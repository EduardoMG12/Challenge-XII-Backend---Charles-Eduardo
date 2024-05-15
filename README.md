# XII Desafio | AWS_FULLSTACK_FEV24 - Projeto MyRide
 <img width="20%"  src="./public/imagesREADME/compassUolLogoSvg.svg"/>

Este é o repositório do projeto "12º Desafio | AWS_FULLSTACK_FEV24" desenvolvido como parte do estágio na Compass UOL. Abaixo estão as informações importantes para o desenvolvimento, entrega e funcionalidades do projeto.

<details>
  <summary style="position:relative;">Como rodar projeto <img width="30" alt="Descrição da imagem" style="position: absolute; top: 50%; left: 153px; transform: translate(-50%, -50%);" src="https://www.svgrepo.com/show/528592/settings.svg"></summary>

## Como instalar as dependências:

```sh
git clone https://github.com/EduardoMG12/Challenge2_CompassCine.git
git clone git@github.com:EduardoMG12/Challenge2_CompassCine.git # caso estiver usando token ssh use este comando
cd Challenge2_CompassCine
npm install

```

## environments

```ts
DB_HOST=compassdbchallenge.c70yw2480omh.us-east-1.rds.amazonaws.com
DB_PORT=3306
DB_USERNAME=admin
DB_PASSWORD=Jx10QhEnksGzqT74z8zn
DB_NAME=backendCompass
```

## Como rodar o projeto
```sh
# certifique-se que vocë esta na pasta do projeto
docker-compose -f ./docker-compose.mongoConfig.yml up --build -d
npm run dev
```

<!-- docker compose up --build -d # roda todos os containers(banco de dados e back-end) 
docker compose up --build -d mongodb # roda apenas o container banco de dados 
docker compose up --build -d  application # roda apenas o container com o back-end -->
## Como derrubar todos os containers
```sh
docker kill $(docker ps -q)
```
</details>

<details>
  <summary style="position:relative;">Sobre o desenvolvimento <img width="20" alt="Descrição da imagem" style="position: absolute; top: 50%; left: 205px; transform: translate(-50%, -50%);"  src="https://www.svgrepo.com/show/295412/development-web-development.svg"></summary>

## Sobre o desenvolvimento

### Desenvolvedor: 

- [**Charles Eduardo**](https://github.com/EduardoMG12)

### Trello:
[Trello](https://trello.com/c/W1atWg1P)

### Descrição técninca

O projeto foi desenvolvido seguindo a arquitetura padrão do NestJS, que é uma arquitetura modular e altamente escalável. Para garantir a qualidade e a consistência do código, adotei o ESLint e o Prettier. Além disso, segui a convenção de Conventional Commits para os commits.

Optei por priorizar o código e os comentários em inglês, alinhando-se com as práticas padrão da indústria. Para o gerenciamento de banco de dados, estou usando o MySQL e o TypeORM como ORM. Também usei o Class Validator para validações.

### Superando Obstáculos

O desenvolvimento do projeto apresentou dois desafios principais:

- 1. Aprendendo sobre o Backend:
    
    Como um novato no backend, tive que aprender muitos conceitos e tecnologias novas. Isso incluiu entender a estrutura básica do NestJS e como ele difere do Express. Após um tempo de estudo, percebi que o NestJS é mais simples que o Express devido aos seus conceitos de annotations, dependency injection e dependency inversion.

</details>

## Sobre o projeto.

### Descrição.

O projeto consiste em criar uma parcela de uma API de um sistema de motoristas similar ao uber, o projeto obrigatoriamente deve seguir esses requisitos:
- Nest.
- Salvando as imagens do banco  de dados no S3.
- Utilizar um Banco de dados relacional usando AWS RDS.
- Usar um ORM de preferencia.
- Dados da seção 2 devem existir no banco de dados, preencham com os dados do figma(imagens e textos), links coloquem qualquer link q desejarem,
- Salvar os dados da seção 3 no banco de dados
- Deve ser feita a validação dos campos do formulário no Backend (regras de validação igual a do front), usem class validator para facilitar.

 O Projeto deve seguir as especificações do [Notion](https://best-dryer-b6f.notion.site/Desafio-Semana-XII-8fad36f2de0e407dba9868496c23777a), com atenção especial ao prazo e os requisitos obrigatorios do projeto.

### Documentação rotas

```sh

O projeto não possui muitas rotas o mesmo possui:

@GET('/cards') rota que retorna todos os cards

@POST('/cards') rota que cria um card
```json 
{
    "imgUrl":"http://exemplo.com/imagem.jpg",
    "altImg":"alt da imagem para ajudar na acessibilidade",
    "title":"Título do Card",
    "paragraph":"Parágrafo do Card",
    "cardLinkLearnMore": "https://wwww.redirectLinkLearnMore.com"
    }

```
```sh

@GET('/driver-application') esta rota retorna todos os motorias

@POST('/driver-application') essa rota cria os motorias e retorna welcome, {firstName}
```json 
{
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "email@example.com",
    "county": "County",
    "city": "City",
    "referralCode": "Referral Code",
    "ownCar": true,
    "carType": "van/suv"
}

```

### *Instrutores*
- **Rafaela Janeczko:** [rafaela.janeczko@compasso.com.br](mailto:rafaela.janeczko@compasso.com.br)
- **Maithe Saldanha Ferrao:** [maithe.ferrao@compasso.com.br](mailto:maithe.ferrao@compasso.com.br)
- **Cassio Silva Takarada:** [cassio.takarada@compasso.com.br](mailto:cassio.takarada@compasso.com.br)
- **Leonardo Buhring Muller:** [l.muller.dev@gmail.com](mailto:l.muller.dev@gmail.com)
- **Gabriel Bezerra Rodrigues:** [gabriel.bezerra@compasso.com.br](mailto:gabriel.bezerra@compasso.com.br)
- **Anthoni Bortolotto Martinelli:** [anthoni.martinelli@compasso.com.br](mailto:anthoni.martinelli@compasso.com.br)

### **Prazo**

Prazo para **envio** do e-mail com **link do repositório:** 09/05/2024  (quinta-feira), **até às 17h30**.

Prazo máximo para **envio** do ultimo commit no repositório: Último commit até às 17h30 de 21/05/2024 (terça-feira).

