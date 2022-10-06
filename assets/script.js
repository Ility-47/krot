alert('Попади молотком по кроту!')


let nora = document.querySelector('.nora');

function krotolovka(){
    let krot = document.createElement('div');
    krot.classList.add('krot')
    nora.appendChild(krot);

    let krotImg = document.createElement('img');
    krotImg.src = "assets/krot.png";
    krot.appendChild(krotImg)

    function anim(){
        let i = 7
        do {
            krot.style.top = i *'0';
            krot.style.top = 14 * i + 'px';
            i -= 1
        } while(i > 0);


    }
    setTimeout(anim,2000);
}

krotolovka();


function scrim() {
    let audio = new Audio();
    audio.src = 'assets/pizda.mp3';
    audio.autoplay = true;
    console.log(audio.volume);
    let pig = document.querySelector('.pig');
    pig.style.display = 'block';
}
