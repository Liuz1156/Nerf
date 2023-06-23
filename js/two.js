var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

one.addEventListener('mouseenter', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var oneWidth = one.offsetWidth;
    var oneHeight = one.offsetHeight;

    var leftPos = (windowWidth - oneWidth) / 2;
    var topPos = (windowHeight - oneHeight) / 2;

    one.style.left = leftPos + 'px';
    one.style.top = topPos + 'px';
});

one.addEventListener('mouseleave', function() {
    one.style.left = '';
    one.style.top = '';
});
two.addEventListener('mouseenter', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var oneWidth = one.offsetWidth;
    var oneHeight = one.offsetHeight;

    var leftPos = (windowWidth - oneWidth) / 2;
    var topPos = (windowHeight - oneHeight) / 2;

    one.style.left = leftPos + 'px';
    one.style.top = topPos + 'px';
});

two.addEventListener('mouseleave', function() {
    one.style.left = '';
    one.style.top = '';
});




three.addEventListener('mouseleave', function() {
    one.style.left = '';
    one.style.top = '';
});
three.addEventListener('mouseenter', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var oneWidth = one.offsetWidth;
    var oneHeight = one.offsetHeight;

    var leftPos = (windowWidth - oneWidth) / 2;
    var topPos = (windowHeight - oneHeight) / 2;

    one.style.left = leftPos + 'px';
    one.style.top = topPos + 'px';
});



four.addEventListener('mouseenter', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var oneWidth = one.offsetWidth;
    var oneHeight = one.offsetHeight;

    var leftPos = (windowWidth - oneWidth) / 2;
    var topPos = (windowHeight - oneHeight) / 2;

    one.style.left = leftPos + 'px';
    one.style.top = topPos + 'px';
});

four.addEventListener('mouseleave', function() {
    one.style.left = '';
    one.style.top = '';
});
