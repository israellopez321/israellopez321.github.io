const Model = {
    listaEdades: [],
    contador: 0,

    crearObjeto() {

        let hobbies = []

        $("[name='checks']:checked").each(function () {
            hobbies.push($(this).val());
        })

        return {
            nombre: $("#nombre").val(),
            apellidos: $("#apellidos").val(),
            edad: $("#edad").val(),
            ciudad: $("#ciudad").val(),
            hobbies: hobbies,
        };
    },

    agregarObjeto(edad) {
        this.listaEdades.push(edad);
    },

    eliminarEdad(edad){
        const index = this.listaEdades.indexOf(edad);
        if (index !== -1) this.listaEdades.splice(index, 1);
    },

    getEstadisticas() {
        if (this.listaEdades.length === 0) {
            return {suma: 0, max: 0, min: 0, media: 0};
        }

        const suma = this.listaEdades.reduce((a, b) => a + b, 0);
        const max = Math.max(...this.listaEdades);
        const min = Math.min(...this.listaEdades);
        const media = (suma / this.listaEdades.length).toFixed(2);

        return {suma, max, min, media};
    },
}