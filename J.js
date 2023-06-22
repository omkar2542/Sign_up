const user='xyz@gmail.com';
const pass='xyz@123';

const form =document.getElementById('form');
const email =document.getElementById('email');
const password =document.getElementById('password');

function validate(){
    let useremail=document.forms["login-form"]["email"].value;
    let userpass=document.forms["login-form"]["password"].value;

    if(useremail === user && userpass===pass){
        document.getElementsByClassName("email")[0].innerHTML='';
        document.getElementsByClassName("password")[0].innerHTML='';
        window.location="https://sankeysolutions.com/#/innovation-lab";
        return true;
    }
    if(useremail !== user){
        document.getElementsByClassName("error-email")[0].innerHTML="incorrect email";
        
    }
    
    if(userpass !== pass){
        document.getElementsByClassName("error-password")[0].innerHTML="incorrect password";
        
    }

    return false;

}

