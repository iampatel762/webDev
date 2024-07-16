let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.getElementById("selectBox");
let voices = [];
window.speechSynthesis.onvoiceschanged=() =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    console.log(voices);
    voices.forEach((voice,indexv)=>(voiceSelect.options[indexv]= new Option(voice.name,indexv)));
};
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.getElementById("button").addEventListener("click",()=>{
    let textareaValue = document.getElementsByClassName("textarea");
    speech.text = textareaValue[0].value;
    window.speechSynthesis.speak(speech);
});