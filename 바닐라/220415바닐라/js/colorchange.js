const title = document.querySelector("#hello");
const colors = ["background_color-violet", "background_color-default", "background_color-yellow"];

title.classList.add(colors[1]);
function handleResize(){
  let wframe = window.innerWidth;
  console.log(wframe);
  if(wframe<=499 ){
    title.classList.add(colors[0]);
    title.classList.remove(colors[1])
  }else if(wframe>500 &&wframe <=1000){
    title.classList.add(colors[1]);
    title.classList.remove(colors[2])
    title.classList.remove(colors[0])
  }else{
    title.classList.add(colors[2]);
    title.classList.remove(colors[1])
  }
}
window.addEventListener("resize", handleResize);