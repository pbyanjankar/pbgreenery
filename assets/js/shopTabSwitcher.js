function tabClickHandler(id, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("product-tab-item");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(id).classList.add("active");
    productSlider();
}

window.onload = function (){
    tabClickHandler('succulents-tab','succulents');
}