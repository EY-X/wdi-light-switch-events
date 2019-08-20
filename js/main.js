document.addEventListener('DOMContentLoaded', function(){
    
    const body = document.querySelector('body')
    const status = document.querySelector('.status')
    const buttonSwitch = document.querySelector('.switch')
    
    // "Helper" / "Utility" Function
    function myToggle(elm, oldClass, newClass) {
        elm.classList.remove(oldClass)
        elm.classList.add(newClass)
    }

    buttonSwitch.addEventListener('click', function() {
        if (buttonSwitch.classList.contains("on")) {
            // Turning Off the Lights
            myToggle(buttonSwitch, "on", "off")
            myToggle(body, "light", "dark")
            status.innerText = "BOOOOO!"
        } else {
            // Turning ON the Lights
            myToggle(buttonSwitch, "off", "on")
            myToggle(body, "dark", "light")
            status.innerText = "I'm a zombie :("


        }
        
    })
    



})

