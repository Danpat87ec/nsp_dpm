function customers (nombre,correo,telefono){

    this.action=action;
    this.nombre = nombre;
    this.correo= correo;
    this.telefono= telefono;
}

customers.prototype.AddUser = function(){
    console.log(this.nombre + ""+ this.correo +""+ this.telefono);
    $.ajax({
        type: "POST",
        url: this.action,
        data: {nombre:this.nombre, correo:this.correo, telefono:this.telefono},
        success: function(response){
            if(response==1){
                alert("Datos Insertados")
            }
        }




    })
}