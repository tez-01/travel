let navBar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navBar.classList.toggle('active');
    searchBox.classList.remove('active');
}

let searchBox = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchBox.classList.toggle('active');
    navBar.classList.remove('active');
}

//vdo controller
document.querySelectorAll('.video-section .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.video-section .video-container .video').src=src;
        navBar.classList.remove('active');
        searchBox.classList.remove('active');
    }
})

//subscribe

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//to prevent default reload 
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    //trim to remove the whitespaces

   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();

   if(usernameValue === '') {
       //show error
       //add error class
       setErrorFor(username, 'Username cannot be blank');
   }
   else{
       // add success class
       setSuccessFor(username);
   }

   if(emailValue === '') {
       setErrorFor(email, 'Email cannot be blank');
   }
   else if(!isEmail(emailValue)){
       setErrorFor(email, 'Not a valid email');
   }
   else{
       setSuccessFor(email);
   }

   if(passwordValue === '') {
       setErrorFor(password, 'Password cannot be blank');
   }
   else{
       setSuccessFor(password);
   }

   if(password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
   }
   else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match');
   }
   else{
       setSuccessFor(password2);
   }

   //show a success message

}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innertext = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}