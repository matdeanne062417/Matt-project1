const display = document.querySelector('#greeter-display');
const greet_button = document.querySelector('.greeter-buttons');
const myName = document.getElementById('fname');

greet_button.addEventListener('click', function(e){
    if (e.target.matches('button')){
        const key = e.target;
        const nameTag = key.textContent;
        
        if (!key.dataset.action){
            display.textContent = nameTag
        }
        if (key.dataset.action === 'hello'){
           display.textContent = 'Hello'+ ' ' + myName.value + '!';
        }
        if (key.dataset.action === 'sayHello'){
            display.textContent = 'Hello' + ' ' + display.textContent
        }
        if (key.dataset.action === 'sayGoodbye'){
            display.textContent = 'Bye' + ' ' + display.textContent
        }
        if (key.dataset.action === 'clear'){
            location.reload();
        }

    }

    if (e.target.matches('input')){
        const keys = e.target;
       
        if (keys.value === 'submit'){
            display.textContent = myName.value;
            }
    }   
})

