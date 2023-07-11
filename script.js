//1
var card = document.createElement('div')
var heading = document.createElement('h2');
var anchor = document.createElement('a');

card.id = 'card';
heading.textContent = 'Gandalf';
anchor.textContent = 'Go to profile';
anchor.href = '#';

card.append(heading,anchor);

document.body.append(card);

//2
setTimeout(5000)
let btns = document.querySelectorAll('button');
var counter = document.getElementById('counter');
var score = 0;
counter.textContent = score;

for (i of btns) {
  i.addEventListener('click', function(e) {
    if(e.target.classList.contains('correct')){
        e.target.parentElement.style.backgroundColor = 'green';
        score++;
        counter.textContent = score;
    } else{
        e.target.parentElement.style.backgroundColor = 'red';
    };
  });
}
console.log(btns)