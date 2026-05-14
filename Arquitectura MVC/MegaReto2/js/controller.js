
const Controller = {

    init() {

        // Botón añadir
        $("#iniciar").on("click", () => {

            if ($("#nombre").val().trim() === "" ||
                $("#apellidos").val().trim() === "" ||
                $("#edad").val().trim() === "" ||
                $("#ciudad").val().trim() === "") {
                alert("Todos los campos son obligatorios");
                return;
            }

            const obj = Model.crearObjeto();
            const idFila = "fila_" + Model.contadorID++;

            View.insertarFila(obj, idFila);
            Model.agregarEdad(obj.edad);

            View.actualizarEstadisticas(Model.getEstadisticas());
            View.limpiarFormulario();

            // Evento eliminar fila
            $("#" + idFila).on("click", function () {
                const edad = parseInt($(this).attr("data-edad"));
                Model.eliminarEdad(edad);
                View.eliminarFila(idFila);
                View.actualizarEstadisticas(Model.getEstadisticas());
            });
        });

        // Control de checks
        $("[name='checks']").on("change", () => {
            View.controlarChecks();
        });
    }
};

$(document).ready(() => {
    Controller.init();
});
