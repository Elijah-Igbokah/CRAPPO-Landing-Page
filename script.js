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

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');


    for(var i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('activeWindow')
        }
        else{
            reveals[i].classList.remove('activeWindow');
        }
    }
}




