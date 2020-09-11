const greet = document.querySelector('.greeter-computer');
const display = document.querySelector('#greeter-display');
const display2 = document.querySelector('#greeter-display2');
const greet_button = greet.querySelector('.greeter-buttons');
const myName = document.getElementById('fname');

greet_button.addEventListener('click', function(e){
    if (e.target.matches('button')){
        const key = e.target;
        const nameTag = key.textContent;
        const bye = greet.querySelector('[data-action=sayGoodbye]');
        
        if (!key.dataset.action){
            display2.textContent = nameTag;
        }
        else if (key.dataset.action === 'hello'){
           display.textContent = 'Hello World!';
        }
        else if (key.dataset.action === 'hello1'){
           display.textContent = 'Hello'+ ' ' + myName.value + '!';
        }
        else if (key.dataset.action === 'sayHello'){
            display.textContent = 'Hello' + ' ' + display2.textContent+ ' ' + '!';
        }
        
         if (key.dataset.action === 'sayGoodbye'){
            if(nameTag === 'sayBye'){
            display.textContent = 'Goodbye' + ' ' + display2.textContent + ' ' + '!';
            }
            bye.textContent = 'Clear';
        }

        if(nameTag === 'Clear'){
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

