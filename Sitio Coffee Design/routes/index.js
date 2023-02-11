var express = require('express');
var router = express.Router();
var	nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

 console.log(req.body) 

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var email = req.body.email;
var telefono = req.body.telefono;
var nombredenegocio = req.body.nombredenegocio;
var contacto = req.body.contacto;
var Necesidad = req.body.Necesidad;

var obj = {
 	to: 'designweblaya@gmail.com',
 	subject: 'Contacto desde la Web',
 	html: nombre + " " + apellido + "se contacto a traves y quiere más info a este correo: " + email + ". <br> Dejó su número de telefono, nombre de la empresa y contacto " + telefono + nombredenegocio + contacto + " Además, hizo el siguiente comentario: " + Necesidad +"."
 	} //cierra var obj

 var transporter = nodemailer.createTransport({
 	host: process.env.SMTP_HOST,
 	port: process.env.SMTP_PORT,
 	auth: {
 		user: process.env.SMTP_USER,
 		pass: process.env.SMTP_PASS
 	}
 }) // cierre transport

 var info = await transporter.sendMail(obj);

 res.render('index', {
 	message: 'Mensaje enviado exitosamente',
 });

}); //cierra petición del POST

module.exports = router;
