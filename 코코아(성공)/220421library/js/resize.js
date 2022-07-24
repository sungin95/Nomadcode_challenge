const body = document.getElementById("body");
const body_N = ["body1", "body2"]
function handleResize(){
  let wframe = window.innerWidth;
  console.log(wframe);
  if(wframe<=1000 ){
    body.classList.add(body_N[0]);
    body.classList.remove(body_N[1])
  } else{
    body.classList.add(body_N[1]);
    body.classList.remove(body_N[0])
  }
}
window.addEventListener("resize", handleResize);