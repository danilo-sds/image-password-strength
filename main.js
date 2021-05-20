var password = document.getElementById('password');
var background = document.getElementById('background');

password.addEventListener('input', (e) => {
    var input = e.target.value;
    var blurValue = 20 - input.length * 2;
    background.style.filter = `blur(${blurValue}px)`;
});