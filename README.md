# API REST + JWT

API REST of user login, logout and view a list of users with with Node.js, Express using jwt(jsonwebtoken) authentication


## Libraries

- Express
- Jsonwebtoken

## Installation

Install dependencies
```javascript
npm i 
```

Start server in localhost:3000
```javascript
node index.js
```

## Endpoints

- [GET] http://localhost:3000/ Hello world route

- [POST] http://localhost:3000/autenticar Login user. Returns JWT of the user

```json
{
  "usuario":"alex",
  "contrasena":"123456"
} 
```
Payload. Example JWT returned
```json
{
  "mensaje": "Autenticación correcta",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwidXNlciI6ImFsZXgiLCJwYXNzd29yZF9iYW5jbyI6IjEyMzQ1NiIsImlhdCI6MTcxODc5NzE1NywiZXhwIjoxNzE4Nzk3MjE3fQ.sYyE7HWQVScnHmuX3h3RwBhcibdeXmgnmsCQwPW0fHY"
}
```

### Get all users - protected route
- [GET] http://localhost:3000/datos Get all users if we pass a valid JWT in HTTP ` access-token ` header. HTTP Header: 

**HTTP header**: access-token

**Value**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFubmEiLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNjk5OTU2ODMyLCJleHAiOjE2OTk5NTgwMzJ9.CpnJGtPa5h6gjKjlHtcC4aFtdhf8e8bvFK_eXE5DZEE

HTTP response

```json
[
  {
    "id": 1,
    "nombre": "Birja"
  },
  {
    "id": 2,
    "nombre": "Muchelle"
  },
  {
    "id": 3,
    "nombre": "Alvaru"
  }
]
```
