let box=document.querySelector(".box")
let main=document.querySelector("main")
let body=document.querySelector("body")
let img=document.querySelector("img")
main.addEventListener("mousemove",(e)=>{
    img.style.top=e.clientY+'px'
    img.style.left=e.clientX+'px'
    
    document.body.style.cursor = "none";

})
box.addEventListener("mousemove",(e)=>{
    const rect = box.getBoundingClientRect();
    // Mouse position inside box
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to 0→1
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    // Convert mouse position to gradient angle (0°–360°)
    const angle = Math.floor((xPercent + yPercent) * 360);
    body.style.setProperty("--deg",`${angle}deg`)
    const boxBg = window.getComputedStyle(box).getPropertyValue("background");
    main.style.background = boxBg;
    

})