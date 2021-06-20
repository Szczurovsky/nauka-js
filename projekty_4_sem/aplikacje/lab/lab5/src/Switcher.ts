class Switcher {
    constructor() {
        this.init();
    }
    init(): void {
        const switcher = <HTMLElement>document.createElement("div");
        const icon = document.createElement("i");
        switcher.className = "switcher";
        icon.className = "far fa-lightbulb";
        switcher.appendChild(icon);
        switcher.addEventListener("click", () => {
            if (document.body.hasAttribute("orangeTheme")) {
                document.body.removeAttribute("orangeTheme");
            } else {
                document.body.setAttribute("orangeTheme", "orange");
            }
        });
        document.body.appendChild(switcher);
    }
}
export default Switcher;
