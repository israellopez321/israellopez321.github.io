// Model.js
class Model {

    lista = [];

    tarea = new TareaEntity(id,nombreTarea,fechaTarea,isCompleted);

    // Getters
    getId() {
        return this.tarea.id;
    }

    getNombreTarea() {
        return this.tarea.nombreTarea;
    }

    getFechaTarea() {
        return this.tarea.fechaTarea;
    }

    getIsCompleted() {
        return this.tarea.isCompleted;
    }

    // Setters
    setId(id) {
        this.tarea.id = id;
    }

    setNombreTarea(nombreTarea) {
        this.tarea.nombreTarea = nombreTarea;
    }

    setFechaTarea(fechaTarea) {
        this.tarea.fechaTarea = fechaTarea;
    }

    setIsCompleted(isCompleted) {
        this.tarea.isCompleted = isCompleted;
    }

    // Create
    insertTarea(objTarea) {
        this.lista.push(objTarea);
    }

    // Update
    updateTarea(id, tareaActualizada) {
        let pos = this.#buscarTarea(id);
        if (pos !== null) {
            this.lista[pos] = tareaActualizada;
            return true;
        }
        return false;
    }

    getTAreaById(id) {
        return this.lista.find(u=>u.id===id)??null;
    }

    getAllTareas() {
        return this.lista;
    }

    //Delete
    deleteTarea(id) {
        let pos = this.#buscarTarea(id);
        if(pos!== null){
            lista.splice(pos, 1);
        }
    }

    #buscarTarea(id) {
        let c = 0;
        do {
            var objLista = this.lista[c];
            c++;
        } while (objLista.id !== id && c < this.lista.length);

        if (c === this.lista.length && (!objLista || objLista.id !== id)) {
            return null;
        }

        return c - 1;
    }
}
