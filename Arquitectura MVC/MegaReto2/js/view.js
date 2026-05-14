
const View = {

    limpiarFormulario() {
        $("#nombre, #apellidos, #edad, #ciudad").val("");
        $("[name='checks']").prop("checked", false).prop("disabled", false);
    },

    insertarFila(obj, idFila) {
        $("#bodyTabla").append(`
            <tr id="${idFila}" data-edad="${obj.edad}">
                <td>${obj.nombre}</td>
                <td>${obj.apellidos}</td>
                <td>${obj.edad}</td>
                <td>${obj.ciudad}</td>
                <td>${obj.hobbies.join(", ")}</td>
            </tr>
        `);
    },

    actualizarEstadisticas(est) {
        $("#sumaEdad").text(est.suma);
        $("#maxEdad").text(est.max);
        $("#mediaEdad").text(est.media);
        $("#minEdad").text(est.min);
    },

    eliminarFila(idFila) {
        $("#" + idFila).remove();
    },

    controlarChecks() {
        const marcados = $("[name='checks']:checked");
        if (marcados.length === 3) {
            $("[name='checks']").not(":checked").prop("disabled", true);
        } else {
            $("[name='checks']").prop("disabled", false);
        }
    }
};
