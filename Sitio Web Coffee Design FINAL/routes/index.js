var express = require('express');
var router = express.Router();
var	nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {

	var novedades = await novedadesModel.getNovedades()

  novedades = novedades.splice(0, 5); // seleccionamos los primeros 5 elemntos del array
  novedades = novedades.map(novedad => {
  	if (novedad.img_id) {
  		const imagen = cloudinary.url(novedad.img_id, {
  			width: 460,
  			crop: 'fill'
  		});
  		return {
  			...novedad, //titulo, sub y cuerpo
  			imagen // imagen 
  		}
  	} else {
  		return {
  			...novedad, //titulo, sub y cuerpo
  			imagen: '/images/noimage.jpg' // sin imagen
  		}
    }
});
  res.render('index', {
  	novedades
  });
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
 	html: nombre + " " + apellido + " se contactó a través de la página web y quiere más info a este correo: " + email + ". <br> Número de celular: " + telefono +". <br> Nombre de la empresa: " + nombredenegocio + ". <br> Lo encontramos por: " + contacto + ". <br> Además, dijo que necesitaba lo siguiente: " + Necesidad +"."
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
 	message: 'Mensaje enviado exitósamente',
 });

}); //cierra petición del POST

module.exports = router;