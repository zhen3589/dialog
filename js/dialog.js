var Dialog = /** @class */ (function () {
    function Dialog(box_id) {
        this.container = '';
        this.childs = '';
        this.container = document.querySelector(box_id);
        this.childs = this.container.children;
    }
    Dialog.prototype.config = function (open) {
        console.log(open);
        // this.container.innerHTML = 
    };
    return Dialog;
}());
