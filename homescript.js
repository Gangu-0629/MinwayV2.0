let username="Player";
function myFunction() {
    let x = document.getElementById("usna").value;
    username=x;
    console.log("The name is "+x);
}

let charactername="man";
let robourl="man.png";
let cm=document.getElementById("charman");
let cw=document.getElementById("charwoman");
cm.addEventListener('click',()=>{
    robourl="man.png";
    console.log(robourl);
    charactername="man";
    console.log(charactername);
})
cw.addEventListener('click',()=>{
    robourl="woman.png";
    console.log(robourl);
    charactername="woman";
    console.log(charactername);
})

let start=document.querySelector("a");
start.addEventListener("click",()=>{
    localStorage.setItem("name",username);
    localStorage.setItem("character",charactername);
    localStorage.setItem("url",robourl);
})

