let elements = document.getElementsByClassName("col");
for(var i=0; i < elements.length; i++){
    elements[i].onclick = function(){
        document.querySelectorAll(".col").forEach(el =>{
            el.classList.remove("col-active");
        })
        document.querySelectorAll(".mining-btn").forEach(el =>{
            el.classList.remove("show-icon");
        })
        document.querySelectorAll(".grid-btn-icon").forEach(el =>{
            el.classList.add("show-icon");
        })
        this.classList.add("col-active");

        // Select the classes within the parent class that is clicked and show or remove as appopriate
        this.querySelector(".mining-btn").classList.add("show-icon")
        this.querySelector(".grid-btn-icon").classList.remove("show-icon")

    };
}

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');


    for(var i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('activeWindow')
        }
        else{
            reveals[i].classList.remove('activeWindow');
        }
    }
}




