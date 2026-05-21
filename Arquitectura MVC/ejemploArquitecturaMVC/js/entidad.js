// entidad.js
class TareaEntity{

    id;
    nombreTarea;
    fechaTarea;
    isCompleted;

    constructor(id, nombreTarea, fechaTarea, isCompleted){
        this.id = id;
        this.nombreTarea = nombreTarea;
        this.fechaTarea = fechaTarea;
        this.isCompleted = isCompleted;
    }

    getId(){
        return this.id;
    }

    getNombreTarea(){
        return this.nombreTarea;
    }

    getFechaTarea(){
        return this.fechaTarea;
    }

    getIsCompleted(){
        return this.isCompleted;
    }

    setId(id){
        this.id = id;
    }

    setNombreTarea(nombreTarea){
        this.nombreTarea = nombreTarea;
    }

    setFechaTarea(fechaTarea){
        this.fechaTarea = fechaTarea;
    }

    setIsCompleted(isCompleted){
        this.isCompleted = isCompleted;
    }
}