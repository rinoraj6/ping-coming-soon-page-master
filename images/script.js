const email = document.getElementById('email');
const btn = document.getElementById('btn');

const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let val = email.textContent;

let error = document.getElementById('error');


btn.addEventListener('click', () => {


    if(email.value.match(pattern)){
        
        if (email.classList.contains('error-state')){
            email.classList.remove('error-state');
            email.classList.add('valid-state');
        }
        if(error.classList.contains('visible')){
            error.classList.remove('visible');
            error.classList.add('hidden')
            error.textContent='';

        }
        
        }

    else{
        if (email.classList.contains('valid-state')){
            email.classList.remove('valid-state');
            email.classList.add('error-state');
        }
        if(error.classList.contains('hidden')){
            error.classList.remove('hidden');
            error.classList.add('remove')
            error.textContent='Please provide a valid email address...'
        }
    }
    
});

