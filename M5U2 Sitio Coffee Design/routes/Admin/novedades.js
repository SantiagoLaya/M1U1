var express = require('express');
var router = express.Router();

var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
  		layout:'admin/layout',
  		usuario: req.session.nombre,
  		novedades
  });
});

//para eliminar una novedad 
router.get('/eliminar/:id', async (req, res, next) => {
	const id = req.params.id;
	await novedadesModel.deleteNovedadesById(id);
	res.redirect('/admin/novedades')

}); //cierre de eliminar


//diseño de la página de agregar 
router.get('/agregar', (req, res, next) => {
	res.render('admin/agregar', {
		layout: 'admin/layout'
	})
}); //cierre diseño de la página de agregar 

// insertar el diseño en la bd

router.post('/agregar', async (req, res, next) => {
	try {
		if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
			await novedadesModel.insertNovedad(req.body);
			res.redirect('/admin/novedades')
		} else {
			res.render('admin/agregar', {
				layout: 'admin/layout',
				error: true,
				message: '¡Todos los campos deben estar completos!'
			})
		}
	} catch (error) {
		console.log(error)
		res.render('admin/agregar', {
			layout: 'admin/layout',
			error: true,
			message: '¡No se cargo el diseño!'
		})
	}
}) // Final del insertar


// Diseño de modificar + traer el diseño elegido
router.get('/modificar/:id', async (req, res, next) => {
	var id = req.params.id;

	var novedad = await novedadesModel.getNovedadById(id);
	res.render('admin/modificar', {
		layout: 'admin/layout',
		novedad
	});
}); // cierre de get modificar





// actualizar el diseño
router.post('/modificar', async (req, res, next) => {
	try{
		console.log(req.body.id);
		var obj = {
			titulo: req.body.titulo,
			subtitulo: req.body.subtitulo,
			cuerpo: req.body.cuerpo,
		}

		console.log(obj)
		await novedadesModel.modificarNovedadById(obj, req.body.id);
		res.redirect('/admin/novedades');
	} catch (error) {
		console.log(error)
		res.render	('admin/modificar', {
			layout: 'admin/layout',
			error: true,
			message: '¡No se modificó el diseño!'
		})
	} //cierre catch
}); //cierre actualizar el diseño




module.exports = router;