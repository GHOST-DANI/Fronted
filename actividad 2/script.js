function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('colorButton');
button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
    console.log("Color cambiado a: " + document.body.style.backgroundColor);
});