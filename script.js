const nameVal = document.getElementById("name");
const emailVal = document.getElementById("email");
const passwordVal = document.getElementById("password");

const validateForm = () => {
    
    if (/^[A-Za-z]{3,}$/.test(nameVal.value)) { 
        nameVal.style.backgroundColor = "lightgreen";  
    } else {
        nameVal.style.backgroundColor = "rgb(255, 192, 203)";  
    }

    
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailVal.value)) {
        emailVal.style.backgroundColor = "lightgreen"; 
    } else {
        emailVal.style.backgroundColor = "rgb(255, 192, 203)"; 
    }

   
    if (/[0-9]{10}/.test(passwordVal.value)) {
        passwordVal.style.backgroundColor = "lightgreen"; 
    } else {
        passwordVal.style.backgroundColor = "rgb(255, 192, 203)"; 
    }
};


nameVal.addEventListener("input", validateForm);
emailVal.addEventListener("input", validateForm);
passwordVal.addEventListener("input", validateForm);