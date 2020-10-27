/* eslint-disable indent */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
document.body.addEventListener("keypress", onKeyPress);
document.querySelector("#channel").addEventListener("click", playChannel);
document.querySelector("#channel1").addEventListener("click", playChannel1);
document.querySelector("#playAllBtn").addEventListener("click", playChannels);
document.querySelector("#recordBtn").addEventListener("click", resetRecord)
let channel = [];
let channel1 = [];
let channel2 = [];
let channel3 = [];
let channel4 = [];
let channel5 = [];
let channel6 = [];
let channel7 = [];
let channel8 = [];
let channel9 = [];
let channelsArray = [channel, channel1,channel2,channel3,channel4,channel5,channel6,channel7,channel8,channel9];
let recordStart = Date.now();
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
    case "KeyA":
        soundName = "boom";
        sound = document.querySelector("#boom");
        
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        channel.push(recordedSound);
        sound.play();
        break;
    case "KeyS":
        soundName = "clap";
        sound = document.querySelector("#clap");
        
        const keyPressTime1 = Date.now() - recordStart;
        const recordedSound1 = {
            sound: soundName,
            time: keyPressTime1
        };
        channel1.push(recordedSound1);
        sound.play();
        break;
    case "KeyD":
        soundName = "hihat";
        sound = document.querySelector("#hihat");
        
        const keyPressTime2 = Date.now() - recordStart;
        const recordedSound2 = {
            sound: soundName,
            time: keyPressTime2
        };
        channel2.push(recordedSound2);
        sound.play();
        break;
    case "KeyF":
        soundName = "kick";
        sound = document.querySelector("#kick");
        
        const keyPressTime3 = Date.now() - recordStart;
        const recordedSound3 = {
            sound: soundName,
            time: keyPressTime3
        };
        channel3.push(recordedSound3);
        sound.play();
        break;
        
    case "KeyG":
        soundName = "openhat";
        sound = document.querySelector("#openhat");
        
        const keyPressTime4 = Date.now() - recordStart;
        const recordedSound4 = {
            sound: soundName,
            time: keyPressTime4
        };
        channel4.push(recordedSound4);
        sound.play();
        break;
    case "KeyH":
        soundName = "ride";
        sound = document.querySelector("#ride");
        
        const keyPressTime5 = Date.now() - recordStart;
        const recordedSound5 = {
            sound: soundName,
            time: keyPressTime5
        };
        channel5.push(recordedSound5);
        sound.play();
        break;
    case "KeyJ":
        soundName = "snare";
        sound = document.querySelector("#snare");
        
        const keyPressTime6 = Date.now() - recordStart;
        const recordedSound6 = {
            sound: soundName,
            time: keyPressTime6
        };
        channel6.push(recordedSound6);
        sound.play();
        break;
    case "KeyK":
        soundName = "tink";
        sound = document.querySelector("#tink");
        
        const keyPressTime7 = Date.now() - recordStart;
        const recordedSound7 = {
            sound: soundName,
            time: keyPressTime7
        };
        channel7.push(recordedSound7);
        sound.play();
        break;
    case "KeyL":
        soundName = "tom";
        sound = document.querySelector("#tom");
        
        const keyPressTime8 = Date.now() - recordStart;
        const recordedSound8 = {
            sound: soundName,
            time: keyPressTime8
        };
        channel8.push(recordedSound8);
        sound.play();
        break;
        }
        
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


function playChannels() {
    let channelsArray = [channel, channel1,channel2,channel3,channel4,channel5,channel6,channel7,channel8,channel9];
    for (let i = 0; i < 9; i++) {
        let array= channelsArray[i];
        for (let index = 0; index < array.length; index++) {
    
                    {
                        const soundObject = array[index];
                        setTimeout(
                            () => {
                                playSound(soundObject.sound);
                            },
                            soundObject.time
                           
                        );
                       
                    }
            
                }
        
    }

}
function playSound(soundName) {
    const sound = document.querySelector("#" + soundName);
    sound.play();
}
function resetRecord(){
    recordStart = Date.now();
    channel = [];
    channel1 = [];
    channel2 = [];
    channel3 = [];
    channel4 = [];
    channel5 = [];
 channel6 = [];
    channel7 = [];
    channel8 = [];
   channel9 = [];
   channelsArray = 0;
   console.log("ssssss");
}