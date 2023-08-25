
        const accordionbtns = document.querySelectorAll(".accordion");
        accordionbtns.forEach(accordion =>{
            accordion.onclick = function(){
                this.classList.toggle("is-open")
                let content = this.nextElementSibling
                if(content.style.maxHeight){
                    content.style.maxHeight = null
                }else{
                    content.style.maxHeight = content.scrollHeight + "px"
                }
            }
        })
    

        