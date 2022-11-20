const effects = ['bass1', 'bass2', 'bass3', 'snare1', 'snare2', 'snare3', 'drum1', 'drum2', 'drum3']
const volumeUp = document.querySelector('.mixers .volume1')
const volumeUp2 = document.querySelector('.mixers .volume2')
const fileUp = document.getElementById('myFile')

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    backgroundColor: 'black',
    barWidth: '4',
    cursorColor: 'red',
    height: '110',
    width: '100',
    barGap: '-1'
   
});

var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    backgroundColor: 'black',
    barWidth: '4',
    cursorColor: 'red',
    height: '110',
    width: '10',
    barGap: '0'
});



function valueSlider(newVolume) {
    wavesurfer.setVolume(newVolume)
}

volumeUp.addEventListener('mouseup', () => {
    valueSlider(volumeUp.value)
})



function valueSlider2(newVolume) {
    wavesurfer2.setVolume(newVolume)
}
volumeUp2.addEventListener('mouseup', () => {
    valueSlider2(volumeUp2.value)
})




window.onkeydown = function (olay) {

    switch (olay.keyCode) {

        case 81:
            document.getElementById('bass1').play()
            break;
        case 87:
            document.getElementById('bass2').play()
            break;
        case 69:
            document.getElementById('bass3').play()
            break;
        case 65:
            document.getElementById('snare1').play()
            break;
        case 83:
            document.getElementById('snare2').play()
            break;
        case 68:
            document.getElementById('snare3').play()
            break;
        case 90:
            document.getElementById('drum1').play()
            break;
        case 88:
            document.getElementById('drum2').play()
            break;
        case 67:
            document.getElementById('drum3').play()
            break;
        default:
            console.log('devam');
            break;
    }

 
}


effects.forEach(sound => {
    const btN = document.createElement('button')
    btN.classList.add('btn')
    btN.innerText = sound


    btN.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
        appendChild(btN)
})



const playBtn = document.querySelector('.fa-play')
const playBtn2 = document.getElementById('btn2')



wavesurfer.on('ready', function () {
    playBtn.addEventListener('click', () => wavesurfer.play())
})

wavesurfer2.on('ready', function () {
    playBtn2.addEventListener('click', () => wavesurfer2.play())
})


wavesurfer.load('harpair.mp3');
wavesurfer2.load('motiveVokal.mp3');

