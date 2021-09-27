$(document).ready(function() {
    $(document).snowfall({
        flakeCount: 50,
        flakeColor: '#FFFFFF',
        flakeIndex: 999999,
        minSize: 5,
        maxSize: 10,
        minSpeed: 1,
        maxSpeed: 3,
        round: true,
    });
});

var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 50;
var numStars = 400;

$('document').ready(function() {


    screenH = $(window).height();
    screenW = $(window).width();

    canvas = $('#space');

    canvas.attr('height', screenH);
    canvas.attr('width', screenW);
    context = canvas[0].getContext('2d');

    for (var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * screenW);
        var y = Math.round(Math.random() * screenH);
        var length = 1 + Math.random() * 4;
        var opacity = Math.random();


        var star = new Star(x, y, length, opacity);


        stars.push(star);
    }

    setInterval(animate, 3000 / fps);
});


function animate() {
    context.clearRect(0, 0, screenW, screenH);
    $.each(stars, function() {
        this.draw(context);
    })
}

/**
 * Star
 * 
 * @param int x
 * @param int y
 * @param int length
 * @param opacity
 */
function Star(x, y, length, opacity) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * .05;
}

/**
 * @param context
 */
Star.prototype.draw = function() {
    context.rotate((Math.PI * 2 / 10));

    context.save();

    context.translate(this.x, this.y);

    if (this.opacity > 1) {
        this.factor = -1;
    } else if (this.opacity <= 0) {
        this.factor = 1;

        this.x = Math.round(Math.random() * screenW);
        this.y = Math.round(Math.random() * screenH);
    }

    this.opacity += this.increment * this.factor;

    context.beginPath()
    for (var i = 5; i--;) {
        context.lineTo(0, this.length);
        context.translate(0, this.length);
        context.rotate((Math.PI * 2 / 10));
        context.lineTo(0, -this.length);
        context.translate(0, -this.length);
        context.rotate(-(Math.PI * 6 / 10));
    }
    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
    context.shadowBlur = 5;
    context.shadowColor = '#ffff33';
    context.fill();

    context.restore();
}

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
    });
    $('.header__burger').click(function(event) {
        $('.header__burger1,.header__nav1,.navigation').toggleClass('active1');
    });
    $('.item1').click(function(event) {
        $('.right__block1').css("display", 'block');
        $('.right__block2').css("display", 'none');
        $('.right__block3').css("display", 'none');
        $('.item1').css('background-color', 'none');
        $('.item2').css('background-color', 'white');
        $('.item3').css('background-color', 'white');

    });
    $('.item2').click(function(event) {
        $('.right__block2').css("display", 'block');
        $('.right__block1').css("display", 'none');
        $('.right__block3').css("display", 'none');
        $('.item2').css('background-color', 'none');
        $('.item1').css('background-color', 'white');
        $('.item3').css('background-color', 'white');
    });
    $('.item3').click(function(event) {
        $('.right__block3').css("display", 'block');
        $('.right__block1').css("display", 'none');
        $('.right__block2').css("display", 'none');
        $('.item3').css('background-color', 'none');
        $('.item1').css('background-color', 'white');
        $('.item2').css('background-color', 'white');
    });



    $('.ded__elipse').delay(1000).animate({ 'opacity': '1' }, 3000);

});


document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('fa-arrow-down')) {

        document.querySelector('.snow').classList.toggle('snowActive');
    }
});