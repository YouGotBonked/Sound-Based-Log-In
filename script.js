const volumeMeter = document.getElementById("volumeMeter");
const volNum = document.getElementById("volNum");
const Password = document.getElementById("AnswerForm");
const SensText = document.getElementById("Sensitivity");
let Sensitivity = 200;
let volume = 0;
navigator.mediaDevices.getUserMedia({audio: true}).then(function(stream)
{
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);

    setInterval(function()
    {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        let values = dataArray.reduce((total, value) => total + value, 0);
        const average = values / dataArray.length;
        volumeMeter.value = average / Sensitivity ;
        volume = volumeMeter.value;
        VolVal()
    }, 100);
    ;});
function VolVal()
{
    var num = Math.round(volume*100);
    switch(true)
    {
        case num<=30:
            Password.innerHTML.substring(0,Password.innerHTML.length-1)
            break;
        case 30<num&&num<=32:
            volNum.innerHTML = "a";
            break;
        case 32<num&&num<=34:
            volNum.innerHTML = "b";
            break;
        case 34<num&&num<=36:
            volNum.innerHTML = "c";
            break;
        case 36<num&&num<=38:
            volNum.innerHTML = "d";
            break;
        case 38<num&&num<=40:
            volNum.innerHTML = "e";
            break;
        case 40<num&&num<=42:
            volNum.innerHTML = "f";
            break;
        case 42<num&&num<=44:
            volNum.innerHTML = "g";
            break;
        case 44<num&&num<=46:
            volNum.innerHTML = "h";
            break;
        case 46<num&&num<=48:
            volNum.innerHTML = "i";
            break;
        case 48<num&&num<=50:
            volNum.innerHTML = "j";
            break;
        case 50<num&&num<=52:
            volNum.innerHTML = "k";
            break;
        case 52<num&&num<=54:
            volNum.innerHTML = "l";
            break;
        case 54<num&&num<=56:
            volNum.innerHTML = "m";
            break;
        case 56<num&&num<=58:
            volNum.innerHTML = "n";
            break;
        case 58<num&&num<=60:
            volNum.innerHTML = "o";
            break;
        case 60<num&&num<=62:
            volNum.innerHTML = "p";
            break;
        case 62<num&&num<=64:
            volNum.innerHTML = "q";
            break;
        case 64<num&&num<=66:
            volNum.innerHTML = "r";
            break;
        case 66<num&&num<=68:
            volNum.innerHTML = "s";
            break;
        case 68<num&&num<=70:
            volNum.innerHTML = "t";
            break;
        case 70<num&&num<=72:
            volNum.innerHTML = "u";
            break;
        case 72<num&&num<=74:
            volNum.innerHTML = "v";
            break;
        case 74<num&&num<=76:
            volNum.innerHTML = "w";
            break;
        case 76<num&&num<=78:
            volNum.innerHTML = "y";
            break;
        case 78<num&&num<=80:
            volNum.innerHTML = "z";
            break;
        case 80<num&&num<=82:
            volNum.innerHTML = "0";
            break;
        case 82<num&&num<=84:
            volNum.innerHTML = "1";
            break;
        case 84<num&&num<=86:
            volNum.innerHTML = "2";
            break;
        case 86<num&&num<=88:
            volNum.innerHTML = "3";
            break;
        case 88<num&&num<=90:
            volNum.innerHTML = "4";
            break;
        case 90<num&&num<=92:
            volNum.innerHTML = "5";
            break;
        case 92<num&&num<=94:
            volNum.innerHTML = "6";
            break;
        case 94<num&&num<=96:
            volNum.innerHTML = "7";
            break;
        case 96<num&&num<=98:
            volNum.innerHTML = "8";
            break;
        case 98<num&&num<=100:
            volNum.innerHTML = "9";
            break;
    }
}
function lockVal()
{
    Password.innerHTML += volNum.innerHTML;
}
function DisplaySens()
{
    SensText.innerHTML = "Sensitivity: " + Sensitivity;
}
function DecreaseSens()
{
    Sensitivity-=10;
    DisplaySens()
}
function IncreaseSens()
{
    Sensitivity+=10;
    DisplaySens()
}
