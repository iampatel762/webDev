const inputText = document.getElementById("inputText");
const listContainer=document.getElementById("listContainer");

function add(){
    if(inputText.value==''){
        alert("please enter something!!!");
    }
else{
        let li=document.createElement('LI');
        li.innerHTML=inputText.value;
        listContainer.appendChild(li);
        inputText.value="";

        let span=document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    setdata();
}
listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("enterList");
        setdata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        setdata();
    }
});

function setdata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showdata();