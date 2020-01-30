var airconsole = null;

var init = function(){

    airconsole = new AirConsole({orientation : AirConsole.ORIENTATION_LANDSCAPE});

    console.log("Controller Script Loaded");

    var testMessage = function(){

        console.log("Button Has Been clicked");
        
    }

    var test_button = document.getElementById('test_button');
    test_button.addEventListener('click',testMessage);

}

window.onload = init;