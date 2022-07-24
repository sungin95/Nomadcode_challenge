const click = document.getElementById("click");
const every_body = document.getElementById("every_body");
const background = document.querySelector("#background")
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
click.addEventListener("click",chaing_color)
function chaing_color(){
  console.log(1);
  const color1 = colors[(Math.floor(Math.random() * colors.length))];
  const color2 = colors[(Math.floor(Math.random() * colors.length))];
  every_body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}//이 한줄 찾는데 2시간ㄷㄷ 
