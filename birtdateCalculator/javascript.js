const inputDate=document.getElementById("inputDate");
inputDate.max = new Date().toISOString().split("T")[0];
const outputvalue = document.getElementById("outputvalue");

function calculateDate(){
    const birthdate = new Date(inputDate.value);
    let y1 = birthdate.getFullYear();
    let m1 = birthdate.getMonth()+1;
    let d1 = birthdate.getDay();

    const today = new Date();
    let y2 = today.getFullYear();
    let m2 = today.getMonth()+1;
    let d2 = today.getDay();

    //calculating the differences between the ages inputed by user to present date
    let y3,m3,d3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3 = (m2+12)-m1;
    }
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3=getDayInMonth(y1,m1)+d2-d1;
    }
    if (m3<0) {
        m3=11;
        y3--;
    }
    outputvalue.innerHTML=`your age is ${y3} year  ${m3} month ${d3} days`;
}
function getDayInMonth(year,month,day){
    return new Date(year,month,0).getDate();
}