const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const inputText = document.getElementById("inputText");
const qrImage = document.getElementById("qrImage");
const qrBox = document.getElementsByClassName("qrBox");

function getQr(){
    if (inputText.value.length>0) {
        qrBox[0].id="QrBoxI";
        let qrString = apiUrl + inputText.value;
        qrImage.src=qrString;
    } 
}
inputText.addEventListener("input",(e)=>{
    if (e.target.value=="") {
        qrBox[0].id="";
    }
    
});