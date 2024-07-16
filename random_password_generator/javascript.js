const inputValue=document.getElementById("password");
const generateButton=document.getElementById("generateButton");

const upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="~!@#$%^&*()<>?_";
const length=12;

const allChar=upercase+lowercase+number+symbol;
generateButton.addEventListener("click",()=>{
    let password="";
    password += upercase[Math.floor(Math.random()*upercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length>password.length){
        password +=allChar[Math.floor(Math.random()*allChar.length)];
    }
    console.log(password);
    inputValue.value=password;
});
