const display = document.querySelector('#greeter-display');
const greet_button = document.querySelector('.greeter-buttons');

greet_button.addEventListener('click', function(e){
    if (e.target.matches('button')){
        const key = e.target;
        
        if (key.dataset.action === 'hello'){
           display.textContent = 'Hello World!';
        }
    }

    if (e.target.matches('input')){
        const keys = e.target;
        const myName = document.getElementById('fname');
        if (keys.value === 'submit'){
            display.textContent = myName.value;
            }
    }   
})

