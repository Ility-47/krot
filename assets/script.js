alert('Попади молотком по кроту!')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let krot = document.createElement('div');
let krotImg = document.createElement('img');


function scrim() {
    let pig = document.querySelector('.pig');
    pig.style.display = 'block';
    let audio = new Audio();
    audio.src = 'assets/pizda.mp3';
    audio.autoplay = true;
    console.log(audio.volume)
}

function krotolovka() {
    let num = getRandomIntInclusive(1, 7);
    let nora = document.getElementById(num);
    console.log(num);


    krot.classList.add('krot');
    nora.appendChild(krot);

    krotImg.setAttribute('id', 'elem');
    krotImg.src = "assets/krot.png";
    krot.appendChild(krotImg);

    function vilaz(){
        elem.addEventListener('click', () => scrim())
    }

    setTimeout(vilaz, 1000)

    function anim(){
            krotImg.style.top =  0;
            krotImg.style.bottom = 340 + 'px';
            function skip(){
                krotImg.style.top = '110px';
            }
            setTimeout(skip, 3000);
    }

    setTimeout(anim, 500)


}

setInterval(krotolovka, 5000)
