// var night_audio = new Audio('sounds/forestnight-4.mp3');
// var morning_audio = new Audio('sounds/morning.mp3');
// var noon_audio = new Audio('sounds/afternoon.mp3');
// var title_audio = new Audio('sounds/title-track.ogg')
// var ending_audio = new Audio('sounds/ending.mp3')

// title_audio.loop = true;
// night_audio.loop = true;
// morning_audio.loop = true;
// noon_audio.loop = true;
// ending_audio.loop = true;


// changes to Morning image and soundtrack
function changeToMorning () {

    // removes text already on screen
    var button1 = document.querySelector('.nav-button');
    button1.style.display = "none";
    document.getElementById("title").style.display = "none";

    // displays screen buttton
    var button2 = document.querySelector('.button');
    button2.style.display = "block";

    // changes the src and type for soundtrack playing
    let soundtrack = document.getElementById('soundtrack');
    soundtrack.src =  "sounds/morning.mp3";
    soundtrack.load();
    soundtrack.play();

    // updates screen image
    document.body.style.backgroundImage = 'url("images/morning_forest.jpg")';
}


// changes to Afternoon image and soundtrack
function changeToAfternoon () {

    // updates text in screen buttton
    var button2 = document.querySelector('.button');
    button2.innerHTML = "Proceed to Evening";

    // changes behaviour of screen button on mouseclick
    button2.setAttribute( "onClick", "changeToEvening()" );

    // changes the src and type for soundtrack playing
    let soundtrack = document.getElementById('soundtrack');
    soundtrack.src =  "sounds/afternoon.mp3";
    soundtrack.load();
    soundtrack.play();

    // updates screen image
    document.body.style.backgroundImage = 'url("images/noon_forest.jpg")';
}

function changeToEvening () {

    // updates text in screen buttton
    var button2 = document.querySelector('.button');
    button2.innerHTML = "End Journey";

    // changes behaviour of screen button on mouseclick
    button2.setAttribute( "onClick", "changeToEndOfJourney()" );

    // changes the src and type for soundtrack playing
    let soundtrack = document.getElementById('soundtrack');
    soundtrack.src =  "sounds/forestnight-4.mp3";
    soundtrack.load();
    soundtrack.play();

    // updates screen image
    document.body.style.backgroundImage = 'url("images/night_forest.jpg")';
}

function changeToEndOfJourney () {

    // updates text in screen buttton
    var button2 = document.querySelector('.button');
    button2.innerHTML = "Press to Restart";

    // changes behaviour of screen button on mouseclick
    button2.setAttribute( "onClick", "location.href = location.href" );

    // changes the src and type for soundtrack playing
    let soundtrack = document.getElementById('soundtrack');
    soundtrack.src =  "sounds/ending.mp3";
    soundtrack.load();
    soundtrack.play();


    // button2.setAttribute( "onClick", "changeToMorning()" );

    // updates screen image
    document.body.style.backgroundImage = 'url("images/closed.jpeg")';
}
