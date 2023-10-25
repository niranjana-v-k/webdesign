const jst=()=>{
const student={
    name:"hi",
    rolnum:123,
    obj1:siva={
        rolnum:1234,
    },
    obj2:yeswath={
        rolnum:12345,
    },
    obj3:gokul={
        name:"gokul",
        rolnum:223,
    }
};
window.alert(student.obj3.rolnum);
}


const arrow=()=>{
function constructor(a,b)
{
this.a=a;
this.b=b;

}
const detaile=new constructor(4,5); //function
let c=detaile.a+detaile.b;
console.log(c);
}

function oncick()
{
    let i=document.getElementById("input");
    let o=i.value;
     let p=document.getElementById("para");
   p.innerHTML=o;
}

function changecolor()
{
    let input=document.getElementById('input');
    input.style.backgroundColor='yellow'
}
function changetext()
{
    let i="welcome";
    let o=i;
    let p=document.getElementById("para");
    p.innerHTML=o;
    p.style.backgroundColor='red'
}
function removetext()
{
   let p=document.getElementById('para');
    p.style.backgroundColor='white'
}
function colorchange()
{
    let input=document.getElementById('input');
    let o=input.value;
    let div=document.getElementById("div");
   div.style.backgroundColor=o;
}


function addingElement()
{
    const newelement=document.createElement("p");
    newelement.textContent="hii da"
    const  adding=document.getElementById('container');
    adding.appendChild(newelement);
}