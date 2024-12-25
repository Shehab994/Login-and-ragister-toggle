
// ----------------js for form-----------------

let loginForm = document.getElementById('loginForm');

let regForm = document.getElementById('regForm');
let indicator = document.getElementById('indicator');

function register(){

    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translatex(50px)"
    
}


function login(){

    regForm.style.transform = "translateX(350px)";
    loginForm.style.transform = "translateX(350px)";
    indicator.style.transform = "translatex(-50px)"
    
}

