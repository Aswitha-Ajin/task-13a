var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let countrycode=document.createElement("div");
countrycode.setAttribute("id","countrycode");

let active=document.createElement("div");
active.setAttribute("id","active");

let recover=document.createElement("div");
recover.setAttribute("id","recover");

let death=document.createElement("div");
death.setAttribute("id","death");
let date=document.createElement("div");
date.setAttribute("id","date");

div.append(input,button,countrycode,active,recover,death,date);
document.body.append(div);

async function foo(){
let res=document.getElementById("country").value;
var url=`https://api.covid19api.com/dayone/country/${res}`;
let result=await fetch(url);
let result1=await result.json();

var index=result1.length-1;
console.log(result1[index].CountryCode);
countrycode.innerHTML=`Country Code:${result1[index].CountryCode}`;

console.log(result1[index].Active);
active.innerHTML=`Total Active Cases:${result1[index].Active}`;
console.log(result1[index].Recover);
recover.innerHTML=`Total Recovered Cases:${result1[index].Recovered}`;
console.log(result1[index].Deaths);
death.innerHTML=`Total Death Cases:${result1[index].Deaths}`;
console.log(result1[index].Date);
date.innerHTML=`Dated:${result1[index].Date}`;
}