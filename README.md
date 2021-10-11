<h2 align="center">
  <img src="https://veggi.io/media/images/logo-veggi.png" alt="Veggi.io" height="90">
  <br>
  <br>
  Desafio técnico Veggi | Desenvolvedor Full-Stack
</h2>

<p align="center">
    Na Veggi estamos criando um novo serviço para controlar as tarefas dos usuários. Para isso precisamos que você desenvolva uma aplicação web com serviços REST e uma UI para exibir os dados.
</p>

<p align="center">
  <br>
  <a href="#API-Endpoint">API Endpoint</a> •
  <a href="#Instalação">Instalação</a>
  <a href="#Bibliotecas">Bibliotecas</a>
</p>

<p align="center">
  <img width="75%" height="400" src="https://github.com/RodAndrade/Veggi/blob/main/tasks.jpeg?raw=true">
  <br>
  <img width="75%" height="400" src="https://github.com/RodAndrade/Veggi/blob/main/users.jpeg?raw=true">
  <hr>
</p>

## **API Endpoint**
Para melhor utilização, na raiz do repositório contem o arquivo `Insomnia.json` com todas as requisições para a API REST.

### **Usuários**

`GET /users` (Lista todos usuários)
- Parâmetros de filtro via query string:
    - `name` 
  
`GET /users/{id}` (Retorna um usuário)
    
`POST /users` (Cria um novo usuário)
- Parâmetros via json:
    - `name`
    - `email`
    - 
    - `contacts` => array [{ id: int, phone: string }] // Pode ser enviado um array de objetos, onde se passar o parametro `id` junto com o `phone` o telefone é atualizado, se não, insere o telefone no contado

`PUT /users/{id}` (Atualiza um usuário)
- Parâmetros via json:
    - `name`
    - `email`

`DELETE /users/{id}` (Apaga o usuário)

### **Tarefas**

`GET /tasks` (Lista todas as tarefas)
  
`GET /tasks/{id}` (Retorna uma tarefa)
    
`POST /tasks` (Cria uma nova tarefa)
- Parâmetros via json:
    - `user_id`
    - `title`
    - `description`
    - `status` => enum[pendente, fazendo, teste, feito]

`PUT /tasks/{id}` (Atualiza uma tarefa)
- Parâmetros via json:
    - `user_id`
    - `title`
    - `description`
    - `status` => enum[pendente, fazendo, teste, feito]

`DELETE /tasks/{id}` (Apaga o usuário)
  
## **Instalação**

### 1) Clone & Install Dependencies

Para clonar e rodar essa aplicação, você irá precisar de [Git](https://git-scm.com), [PHP v8.0](https://www.php.net/downloads.php), [Composer v2.1.3](https://getcomposer.org/download/) e [NodeJS v14](https://nodejs.org/en/download/current/).


- `git clone https://github.com/RodAndrade/Veggi/`
- `cd Veggi/backend/` - cd into backend directory
- `composer install` - Install composer dependencies
- Enter your database credentials in the `.env.example` file located at the root of the project and save as `.env` 
- `php artisan migrate` - To run migrations
- `php artisan make:seeder PeopleSeeder` - To run users seeds 
- `php artisan serve --port=8000` - Run backend at port 8000 (Same port located at frontend baseurl)
  
- `cd ../frontend` - cd into frontend directory
- `npm install` - To install all npm packages
- Enter your api baseurl into `.env`
- `npm start` - To run frontend at port 3000
- Open `localhost:3000` - Into your browser


---

> [rcandrade.com](https://rcandrade.com) &nbsp;&middot;&nbsp;
> GitHub [@RodAndrade](https://github.com/RodAndrade) &nbsp;&middot;&nbsp;
> LinkedIn [Rodrigo Andrade](https://www.linkedin.com/in/rodrigo-andrade-27969bb3/) &nbsp;&middot;&nbsp;
> WhatsApp [+55 (12) 98229-5679](https://wa.me/5512982295679)
