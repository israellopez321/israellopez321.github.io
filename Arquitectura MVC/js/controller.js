// controller.js
const Controller = {
    init() {
        this.bindEvents();
        this.updateView();
    },
    bindEvents() {
        $('#add-item-button').on('click', () =>{
            const newItem=$('#item-input').val();

            if (newItem) {
                Model.addItem(newItem);
                this.updateView();
                $("#item-input").val("")

            }
        });

        $("#ol-item-list").on('click', 'li', function () {
            const id = $(this).attr("id").split("_")[1]; // obtiene el índice
            Model.removeItem(id);
            Controller.updateView();
        });

    },
    updateView() {
        const items = Model.getItems();
        View.render(items);
    },
};
