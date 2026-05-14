// view.js
const View = {
    render(items) {
        const $list = $('#ol-item-list');
        let count = 0;
        let countID = "ID_" + count;
        $list.empty(); // Limpia la lista
        items.forEach((item) => {
            $list.append(`<li id="$(countID)" class="class.Item">${item} </li> `);
            count++;
        });

    },
};
