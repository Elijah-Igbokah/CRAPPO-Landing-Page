let elements = document.getElementsByClassName("col");
for(var i=0; i < elements.length; i++){
    elements[i].onclick = function(){
        document.querySelectorAll(".col").forEach(el =>{
            el.classList.remove("col-active");
        })
        this.classList.add("col-active");
    };
}

