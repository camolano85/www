let persona = {
    nombre: "Carlos",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
};

persona.saludar();