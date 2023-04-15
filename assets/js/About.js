let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let tabs = $$(".tab-item");
let panes = $$(".tab-pane");

let tabActive = $(".tab-item.tabs-active");

tabs.forEach((tab, index) => {
    let  pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.tabs-active").classList.remove("tabs-active");
        $(".tab-pane.tabs-active").classList.remove("tabs-active");

        this.classList.add("tabs-active");
        pane.classList.add("tabs-active");
    };
});