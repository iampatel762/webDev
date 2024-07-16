const toastBox = document.getElementsByClassName("toastBox");

let msgSuccess = "you Submitted succesfully!";
let msgError = "Something error occured!";
let msgInvalid = "Ivalid input!";

function display(msg){
    let toast = document.createElement("div");
    let img = document.createElement("img");
    toast.innerHTML = msg;
    toast.classList.add("toast");
    toastBox[0].appendChild(toast).appendChild(img);

    if(msg.includes("error")){
        toast.classList.add('error');
    }
    else if(msg.includes("Invalid")){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },8000)
}