document.addEventListener('DOMContentLoaded', function(){
    
    const body = document.querySelector('body')
    const status = document.querySelector('.status')
    const buttonSwitch = document.querySelector('.switch')
    
    buttonSwitch.addEventListener('click', function() {
        if (buttonSwitch.classList.contains("on")) {
            // Turning Off the Lights
            buttonSwitch.classList.remove("on")
            buttonSwitch.classList.add("off")
            body.classList.remove('light')
            body.classList.add('dark')

            status.innerText = "BOOOOO!"


        } else {
            // Turning ON the Lights
            buttonSwitch.classList.remove("off")
            buttonSwitch.classList.add("on")
            body.classList.remove('dark')
            body.classList.add('light')

            status.innerText = "I'm a vampire :("


        }
        
    })
    



})

