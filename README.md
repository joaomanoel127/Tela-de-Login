
# 🔐 Tela de Login com Autenticação JWT

Projeto completo de autenticação de usuários com backend em **Node.js**, banco de dados **PostgreSQL**, e frontend em **HTML/CSS/JS**, com sistema de login protegido por **JWT (JSON Web Token)**.

---

## 🚀 Funcionalidades

- Tela de login com validação de campos
- Cadastro de usuários com senha criptografada (`bcrypt`)
- Geração de token JWT no login
- Página de dashboard protegida (acessível apenas com token válido)
- Armazenamento de token no `localStorage`
- Backend com rotas organizadas por controllers e middlewares

---

## 🧱 Tecnologias Utilizadas

### 🖥️ Frontend
- HTML5 + CSS3
- JavaScript (puro)
- Boxicons (ícones)

### 🔙 Backend
- Node.js + Express
- PostgreSQL
- JWT (`jsonwebtoken`)
- Bcrypt
- Dotenv
- CORS

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/tela-login-jwt.git
cd tela-login-jwt
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados PostgreSQL

Crie um banco de dados chamado `Tela login` com a tabela:

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL
);
```

### 4. Crie um arquivo `.env` na raiz com:

```env
JWT_SECRET=sua-chave-secreta
```

### 5. Inicie o servidor

```bash
npm start
```

O backend estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura de Pastas

```
Tela de Login/
├── controllers/
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
├── routes/
│   └── auth.js
├── public/
│   ├── index.html
│   ├── dashboard.html
│   ├── css/
│   └── js/
├── db.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 🔒 Rotas da API

| Método | Rota               | Protegida? | Descrição                  |
|--------|--------------------|------------|----------------------------|
| POST   | `/auth/register`   | ❌         | Cadastra novo usuário      |
| POST   | `/auth/login`      | ❌         | Autentica e gera token JWT |
| GET    | `/auth/protegido`  | ✅         | Retorna dados protegidos   |

---

## 👤 Autor

Desenvolvido por (https://github.com/joaomanoel127)

---

## 📄 Licença

Este projeto é open-source e pode ser utilizado livremente.