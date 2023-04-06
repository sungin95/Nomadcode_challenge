


let body_container = document.querySelector("div.hello:first-child h1");



function handleTitleMouseover(){
  body_container.innerText = "The mouse is here";
  body_container.classList = "mouseover";
}
function handleTitleMouseout(){
  body_container.innerText = "The mouse is gone";
  body_container.classList = "mouseout";
}
function handleTitleMouseup(){
  body_container.innerText = "That was a right click";
  body_container.classList = "mouseup";
}
function handleTitleResize(){
  body_container.innerText = "You just resized";
  body_container.classList = "resize";
}


body_container.addEventListener("mouseover", handleTitleMouseover);

body_container.addEventListener("mouseout", handleTitleMouseout);

body_container.addEventListener("mouseup", handleTitleMouseup);

window.addEventListener("resize", handleTitleResize);//이거 왜 작동 안하는지 모르겠다???


