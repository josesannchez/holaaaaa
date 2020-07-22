   // olicitud   de transacion para el tour en bicicleta
    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var BarrioRegistro = document.getElementById("txtEdadUsuarioRegistro");
    var TelefonodRegistro = document.getElementById("txtNacionaliadUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");  
    var btnRegistro = document.getElementById("formRegi");
    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
       if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacio");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacio");
            return false;
        } 
        if (BarrioRegistro.value === null || BarrioRegistro.value === "")
        {
            alert("El campo Barrio  esta vacio");
            return false;
        } 

        if (TelefonoRegistro.value === null || TelefonoRegistro.value === "")
        {
            alert("El campo Telefono  esta vacio");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacio");
            return false;
        } 
        else{
            alert("Solicitud enviada");
         location.href="Transacion.html"
        
        } 
        }
        );
  

  
        
