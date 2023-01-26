const express = require('express'),
      jwt = require('jsonwebtoken'),
      app = express(); 
	  
// Clave privada para firmar los Tokens
// Guardar la clave en la BBDD
const config = { 
	llave : "miclaveultrasecreta123*"
};

// 1
app.set('llave', config.llave);

// 2
app.use(express.urlencoded({ extended: true }));

// 3
app.use(express.json());

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});

// 4
app.get('/', function(req, res) {
    res.json({ message: 'recurso de entrada' });
});

// 5
app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "alex" && req.body.contrasena === "123456") {
		const payload = {
			check:  true,
            user:"alex"
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: "30000ms" // 30 segundos para que expire
		});
		res.json({
			mensaje: 'Autenticación correcta',
			token: token
		});
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})

// 6
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

app.get('/datos', rutasProtegidas, (req, res) => {
    // Consulta a la "BBDD"
	const datos = [
		{ id: 1, nombre: "Birja" },
		{ id: 2, nombre: "Muchelle" },
		{ id: 3, nombre: "Alvaru" }
	];
	
	res.json(datos);
});
