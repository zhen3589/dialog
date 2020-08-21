class Dialog {
    container: any = '';
    childs: any = '';
    constructor(box_id: string) {
        this.container = document.querySelector(box_id);
        this.childs = this.container.children;
    }

    config(open: object): void {
        console.log(open)

        // this.container.innerHTML = 
    }
}