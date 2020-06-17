let db = require('../models/dbconexion');

let contactos = {
    listar( req, res ){
      let sql = "SELECT * FROM contactos";
      db.query(sql,function(err, result){
        if( err ){
          console.log(err);
          res.sendStatus(500);
        }else{
          res.json(result);
        }
      });
    },
    store( req, res ){
        val_nombre = req.body.nombre;
        val_apellido = req.body.apellido;
        val_telefono = req.body.telefono;
        val_correo= req.body.correo;
        let sql = "INSERT INTO contactos(nombre,apellido,telefono,correo) VALUES(?,?,?,?)";
        db.query(sql,[val_nombre,val_apellido,val_telefono,val_correo],function(err, newData){
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.json(newData);
          }
        });
      },
      show( req, res ){
        val_id = req.params.id;
        let sql = "SELECT * FROM contactos WHERE Id=?";
        db.query(sql,[val_id],function(err, rowData){
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.json(rowData);
          }
        });
      },
      actualizar(req, res ){
        val_id = req.body.Id;
        val_nom = req.body.nombre;
        val_ape = req.body.apellido;
        val_tel = req.body.telefono;
        val_cor = req.body.correo;
        let sql = "UPDATE contactos SET nombre=?, apellido=?, telefono=?, correo=? WHERE Id=?";
        db.query(sql,[val_nom,val_ape,val_tel,val_cor,val_id],function(err, newData){
          if(err){
            res.sendStatus(500);
          }else{
            res.json(newData);
          }
        });
      },
      delete( req, res ){
        val_id = req.params.id;
        let sql = "DELETE FROM contactos WHERE Id=?";
        db.query(sql,[val_id],function(err, newData){
          if(err){
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
        });
      }
    }
    
    module.exports = contactos;
    