const background = document.querySelector(".body");
const colors = ["display_hidden"];

function handleResize(){
  let wframe = window.innerWidth;
  let hframe = window.innerHeight;
  console.log(wframe);
  if(wframe<=530 && (hframe>=900)){
  background.classList.remove(colors[0])
  }

  else{
  background.classList.add(colors[0]);

  }
}
window.addEventListener("resize", handleResize);