/* eslint-disable indent */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
document.body.addEventListener("keypress", onKeyPress);
document.querySelector("#playBtn").addEventListener("click", playChannel);
document.querySelector("#stopBtn").addEventListener("click", playChannel1);
document.querySelector("#playAllBtn").addEventListener("click", playChannels);
const channel = [];
const channel1 = [];
const channel2 = [];
const channel3 = [];
const recordStart = Date.now();
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
    case "KeyA":
        soundName = "hihat";
        sound = document.querySelector("#hihat");
        
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        channel.push(recordedSound);
        sound.play();
        break;
    case "KeyF":
        soundName = "kick";
        sound = document.querySelector("#kick");
        
        const keyPressTime1 = Date.now() - recordStart;
        const recordedSound1 = {
            sound: soundName,
            time: keyPressTime1
        };
        channel1.push(recordedSound1);
        sound.play();
        break;
    case "KeyD":
        soundName = "clap";
        sound = document.querySelector("#clap");
        
        const keyPressTime2 = Date.now() - recordStart;
        const recordedSound2 = {
            sound: soundName,
            time: keyPressTime2
        };
        channel2.push(recordedSound2);
        sound.play();
        break;
    case "KeyS":
        soundName = "boom";
        sound = document.querySelector("#boom");
        
        const keyPressTime3 = Date.now() - recordStart;
        const recordedSound3 = {
            sound: soundName,
            time: keyPressTime3
        };
        channel3.push(recordedSound3);
        sound.play();
        break;
        }
    // if (sound) {
    //     const keyPressTime = Date.now() - recordStart;
    //     const recordedSound = {
    //         sound: soundName,
    //         time: keyPressTime
    //     };
    //     channel.push(recordedSound);
    //     sound.play();
    }



    

function playChannel() {
    
    for (let index = 0; index < channel.length; index++) {

        {
            const soundObject = channel[index];
            setTimeout(
                () => {
                    playSound(soundObject.sound);
                },
                soundObject.time
               
            );
        }

    }
}
function playChannel1() {
    
    for (let index = 0; index < channel1.length; index++) {

        {
            const soundObject = channel1[index];
            setTimeout(
                () => {
                    playSound(soundObject.sound);
                },
                soundObject.time
               
            );
        }

    }
}

let channels = channel.concat(channel1,channel2);
function playChannels() {
    
    for (let index = 0; index < channel.length; index++) {

        {
            const soundObject = channel[index];
            setTimeout(
                () => {
                    playSound(soundObject.sound);
                },
                soundObject.time
               
            );
           
        }

    }
    for (let index = 0; index < channel1.length; index++) {

        {
            const soundObject = channel1[index];
            setTimeout(
                () => {
                    playSound(soundObject.sound);
                },
                soundObject.time
               
            );
           
        }

    }

}
function playSound(soundName) {
    const sound = document.querySelector("#" + soundName);
    sound.play();
}