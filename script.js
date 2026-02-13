flag=0;
function changeSlide(n){
flag=flag+n;
slideshow(flag);
}
slideshow(flag);
function slideshow(num){ 
    let slides = document.getElementsByClassName("slider");
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;   }
    console.log(slides);
    for(let y of slides){
        y.style.display = "none";
    }   
    console.log(num);
slides[num].style.display = "block";
}