const clickButton=document.getElementById("clickButton");
const textareas=document.getElementById("textareas");
clickButton.addEventListener("click",()=>{    
    let p=document.createElement("p");
    p.setAttribute("contenteditable","true");    
    
    let img=document.createElement("img");
    img.src="image/delete.png";
    img.alt='delete';


    textareas.appendChild(p).appendChild(img);
    setdata1();
});

textareas.addEventListener("click",(e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        setdata1();
    }
    
});

function setdata1(){
    localStorage.setItem("data2",textareas.innerHTML);
}
function showdata1(){
    textareas.innerHTML=localStorage.getItem("data2");
}
showdata1();