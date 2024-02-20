const mode=document.getElementById('mode');
const textcolor=document.querySelectorAll('.mode');
const nav=document.getElementsByTagName('nav');
const aboutme =document.getElementsByClassName('aboutme');
const footer=document.getElementsByTagName('footer');
const hr=document.querySelectorAll('.hr');
console.log(hr)





let type=new Typed(".typed",{
   strings :["Coding with caffeine and creativity: I bring the pixels to life.",
"Your website's best friend: I make it look good and work even better","I speak fluent front-end: Let's build something awesome!","Don't be afraid to be creative and have fun!","User-centric solutions, pixel-perfect execution."],
typespeed:10,
backspeed:10,
loop:true,

});
      //  code for the light and dark mode 
mode.addEventListener("click",()=>{
   if(document.body.style.backgroundColor=="rgb(226 232 240 / var(--tw-bg-opacity))"){//color white
       document.body.style.backgroundColor=` rgb(15 23 42 / var(--tw-bg-opacity))`;
       mode.innerHTML=`Light mode`;
       mode.style.color=`black`;
       for (let i = 0; i < textcolor.length; i++) {
          textcolor[i].style.color="white";

       }
        for (let i = 0; i < textcolor.length; i++) {
          textcolor[i].style.color="white";
       
       }
       for (let i = 0; i < hr.length; i++) {
         hr[i].classList.add('bg-white');
         hr[i].classList.remove('bg-black');
      }
       mode.style.backgroundColor=`white`;
       aboutme[0].classList.add('border-white');
       aboutme[0].classList.remove('border-black');
       footer[0].classList.add('bg-black');
       footer[0].classList.remove('bg-gray-400');
       
   }else{
       document.body.style.backgroundColor="rgb(226 232 240 / var(--tw-bg-opacity))";//color white
     
       mode.innerHTML=`Dark mode`;
       mode.style.color=`white`;
       for (let i = 0; i < textcolor.length; i++) {
       textcolor[i].style.color="black";
       
       }
       for (let i = 0; i < hr.length; i++) {
         hr[i].classList.remove('bg-white');
         hr[i].classList.add('bg-black');
      }
       mode.style.backgroundColor=`black`;
       aboutme[0].classList.remove('border-white');
       aboutme[0].classList.add('border-black');
       footer[0].classList.remove('bg-black');
       footer[0].classList.add('bg-gray-400');

   }
   
})