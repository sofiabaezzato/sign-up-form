let message = document.getElementById('message');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let form = document.getElementById('form')

confirmPassword.onkeyup = () => check();

form.onsubmit = (event) => {
    if (!check()) {
        event.preventDefault();
    }
}

// check if confimation password is correct while typing
let check = function() {
    if (password.value !== confirmPassword.value) {
        message.innerHTML = 'Passwords don\'t match';
        return false;
    }
    else {
        message.innerHTML = '';
        return true;
    }
} 

