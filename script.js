let btn=document.querySelector('button')
let genrateqr=document.querySelector('img')
let name=document.getElementById('name')
console.log(name.value);


let pn=document.getElementById('pn')
let pid=document.getElementById('pid')

btn.addEventListener("click",()=>{
    console.log(name.value);
    // let k=name.value+pn.value+pid.value
    genrateqr.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +name.value+pn.value+pid.value
})