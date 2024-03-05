//=====MODEL=====

const buttonArray = [{

    button1: 'AC',
    button2: '7',
    button3: '4',
    button4: '1',
    button5: '.',
    btnClass: ''
},
    {
        button1: 'Del',
        button2: '8',
        button3: '5',
        button4: '2',
        button5: '0',
        btnClass: ''
    },
    {
        button1: '*',
        button2: '9',
        button3: '6',
        button4: '3',
        button5: 'On',
        btnClass: 'on-off'
    },
    {
        button1: '/',
        button2: '+',
        button3: '-',
        button4: '00',
        button5: '=',
        btnClass: ''
    }]

//=====VIEW=====

let buttonDivHTML = '';
buttonArray.forEach((buttonDiv) => {
    buttonDivHTML += `
    <div class="button-div">
    <button>${buttonDiv.button1}</button>
    <button>${buttonDiv.button2}</button>
    <button>${buttonDiv.button3}</button>
    <button>${buttonDiv.button4}</button>
    <button class="${buttonDiv.btnClass}">${buttonDiv.button5}</button>
    </div>`;
})

document.querySelector('.js-all-button-flex-div').innerHTML = buttonDivHTML;

//=====CONTROL=====

const paragraph = document.querySelector('p');

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {

        if (button.innerText !== 'AC' && button.innerText !== 'Del' && button.innerText !== '=' && button.innerText !== 'On' && button.innerText !== 'Off') {
            paragraph.innerText += button.innerText;
        }
        switch (button.innerText) {
            case 'AC':
                paragraph.innerText = '';
                break;
            case 'Del':
                paragraph.innerText = paragraph.innerText.substring(0, paragraph.innerText.length - 1);
                break;
            case '=':
                try {
                    paragraph.innerText = eval(paragraph.innerText);
                } catch (err) {
                    paragraph.innerText = err.name;
                }
        }
    })
})

const onAndOffBtn = document.querySelector('.on-off');

const span = document.querySelector('span');
onAndOffBtn.addEventListener('click', () => {
    if (paragraph.style.display != 'block') {
        paragraph.innerText = '';
        paragraph.style.display = 'block';
        onAndOffBtn.innerHTML = 'Off';
        span.style.backgroundColor = '#8E1B43';

    } else {
        paragraph.style.display = 'none';
        onAndOffBtn.innerHTML = 'On';
        paragraph.innerText = '';
        span.style.backgroundColor = 'transparent';
    }
})