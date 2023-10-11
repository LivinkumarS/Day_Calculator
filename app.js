let submit=document.getElementById("submit");

submit.addEventListener('click',()=>{
let contents=document.getElementById("output");
let date_inp=document.getElementById("inp-date").value;
let month_inp=document.getElementById("inp-month").value.trim();
let year_inp=document.getElementById("inp-year").value;
contents.innerHTML='';
let yaer_leap=false;
if(year_inp%100==0){
    if(year_inp%400==0){
        yaer_leap=true;
    }
}
else{
    if(year_inp%4==0){
        yaer_leap=true;
    }
}
let months=[
    ['january',3],
    ['february', yaer_leap? 1:0],
    ['march',3],
    ['april',2],
    ['may',3],
    ['june',2],
    ['july',3],
    ['august',3],
    ['september',2],
    ['october',3],
    ['november',2],
    ['december',3]
]
let year=year_inp-1;
let near_century=Math.floor(year_inp/100)*100;
let odd_of_century=(near_century%400)/100;
let oddCent=0;
if(odd_of_century==3) oddCent=1;
if(odd_of_century==2) oddCent=3;
if(odd_of_century==1) oddCent=5;
let no_of_leaps=(Math.floor((year-near_century)/4));
let no_of_leapODDs=no_of_leaps*2;
let no_of_normalODDs=year-near_century-no_of_leaps;

let month=month_inp.toLowerCase();
let month_Odds=0;
for (mon of months){
    if (mon[0]==month) break;
    else{
        month_Odds+=mon[1];
    }
}

let total_OODs=(Number(date_inp)+Number(month_Odds)+Number(oddCent)+Number(no_of_leapODDs)+Number(no_of_normalODDs))%7;

let answer="";
if(total_OODs==0) answer="Sunday";
if(total_OODs==1) answer="Monday";
if(total_OODs==2) answer="Tuesday";
if(total_OODs==3) answer="Wednesday";
if(total_OODs==4) answer="Thursday";
if(total_OODs==5) answer="Friday";
if(total_OODs==6) answer="Saturday";

let new1=document.createElement("div");
let text=document.createTextNode(`${answer}...😎`);
new1.className="new";
new1.append(text);

contents.prepend(new1);
}
)