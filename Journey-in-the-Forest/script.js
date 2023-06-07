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



function changeToMorning () {
    // document.getElementById("unmute").style.display = "block";
    // document.getElementById("mute").style.display = "none";
    // document.querySelector('.mute-button').style.display = "none";

    var button1 = document.querySelector('.nav-button');
    button1.style.display = "none";
    document.getElementById("title").style.display = "none";

    var button2 = document.querySelector('.button');
    button2.style.display = "block";

    let soundtrack = document.getElementById('soundtrack');
    console.log(soundtrack)
    soundtrack.setAttribute("src", "sounds/morning.mp3")
    soundtrack.setAttribute("type", "audio/mpeg")
    console.log(soundtrack)



    document.body.style.backgroundImage = 'url("images/morning_forest.jpg")';
}

function changeToAfternoon () {

    var button2 = document.querySelector('.button');
    button2.innerHTML = "Proceed to Evening";


    button2.setAttribute( "onClick", "changeToEvening()" );

    document.body.style.backgroundImage = 'url("images/noon_forest.jpg")';
}

function changeToEvening () {
    var button2 = document.querySelector('.button');
    button2.innerHTML = "End Journey";

    button2.setAttribute( "onClick", "changeToEndOfJourney()" );

    document.body.style.backgroundImage = 'url("images/night_forest.jpg")';
}

function changeToEndOfJourney () {
    var button2 = document.querySelector('.button');
    button2.innerHTML = "Journey Ended";


    // button2.setAttribute( "onClick", "changeToMorning()" );

    document.body.style.backgroundImage = 'url("images/closed.jpeg")';
}

// function toggleMute() {
//   if (title_audio.paused) {
//     title_audio.play() // Unmute the title_audio
//     document.getElementById("unmute").style.display = "none";
//     document.getElementById("mute").style.display = "block";
//   } else {
//     title_audio.pause(); // Mute the title_audio
//     document.getElementById("unmute").style.display = "block";
//     document.getElementById("mute").style.display = "none";
//   }
// }