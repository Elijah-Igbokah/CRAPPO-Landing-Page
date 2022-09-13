let elements = document.getElementsByClassName("col");
let colTitle = document.getElementsByClassName("activeIcon");
for(var i=0; i < elements.length; i++){
    elements[i].onclick = function(){
        document.querySelectorAll(".col").forEach(el =>{
            el.classList.remove("col-active");
        })
        document.querySelectorAll(".activeIcon").forEach(el =>{
            el.classList.remove("activeIcon");
        })
        this.classList.add("col-active");
        document.querySelector(".activeIcon").classList.add("activeIcon")
    };
}




