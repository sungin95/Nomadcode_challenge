const sections = document.querySelectorAll("section");


for (let i = 0; i < Object(sections).length; i++) {
  switch (i % 12 + 1) {
    case 1:
      sections[i].querySelector(".small_title").innerText = `E-commerce`;
      sections[i].querySelector(".title").innerText = `UNIF`;
      sections[i].querySelector(".right_box").innerText = `Design & Development`;
      sections[i].querySelector(".button_shape").innerText = `2014->Present`;
      break;
    case 2:
      sections[i].querySelector(".small_title").innerText = `Event`;
      sections[i].querySelector(".title").innerText = `Veuve Clicquot`;
      sections[i].querySelector(".right_box").innerText = `Website, initialtive idenitities`;
      sections[i].querySelector(".button_shape").innerText = `2015->Present`;
      break;
    case 3:
      sections[i].querySelector(".small_title").innerText = `Artist`;
      sections[i].querySelector(".title").innerText = `HAIM`;
      sections[i].querySelector(".right_box").innerText = `Visual identity, Digital Strategy, Design & Development`;
      sections[i].querySelector(".button_shape").innerText = `2014 -> Foreve`;
      break;
    case 4:
      sections[i].querySelector(".small_title").innerText = `Institulonal`;
      sections[i].querySelector(".title").innerText = `MOCA`;
      sections[i].querySelector(".right_box").innerText = `Streaming Platform`;
      sections[i].querySelector(".button_shape").innerText = `2016`;
      break;
    case 5:
      sections[i].querySelector(".small_title").innerText = `Studio Project`;
      sections[i].querySelector(".title").innerText = `Public Access`;
      sections[i].querySelector(".right_box").innerText = `Website, Streamng Platform, Programming`;
      sections[i].querySelector(".button_shape").innerText = `2016 -> Present`;
      break;
    case 6:
      sections[i].querySelector(".small_title").innerText = `Musician `;
      sections[i].querySelector(".title").innerText = `Kelela`;
      sections[i].querySelector(".right_box").innerText = `Interactive Microsite`;
      sections[i].querySelector(".button_shape").innerText = `2016`;
      break;
    case 7:
      sections[i].querySelector(".small_title").innerText = `E-commerce`;
      sections[i].querySelector(".title").innerText = `UNIF`;
      sections[i].querySelector(".right_box").innerText = `Design & Development`;
      sections[i].querySelector(".button_shape").innerText = `2014->Present`;
      break;
    case 8:
      sections[i].querySelector(".small_title").innerText = `Event`;
      sections[i].querySelector(".title").innerText = `Veuve Clicquot`;
      sections[i].querySelector(".right_box").innerText = `Website, initialtive idenitities`;
      sections[i].querySelector(".button_shape").innerText = `2015->Present`;
      break;
    case 9:
      sections[i].querySelector(".small_title").innerText = `Artist`;
      sections[i].querySelector(".title").innerText = `HAIM`;
      sections[i].querySelector(".right_box").innerText = `Visual identity, Digital Strategy, Design & Development`;
      sections[i].querySelector(".button_shape").innerText = `2014 -> Foreve`;
      break;
    case 10:
      sections[i].querySelector(".small_title").innerText = `Institulonal`;
      sections[i].querySelector(".title").innerText = `MOCA`;
      sections[i].querySelector(".right_box").innerText = `Streaming Platform`;
      sections[i].querySelector(".button_shape").innerText = `2016`;
      break;
    case 11:
      sections[i].querySelector(".small_title").innerText = `Studio Project`;
      sections[i].querySelector(".title").innerText = `Public Access`;
      sections[i].querySelector(".right_box").innerText = `Website, Streamng Platform, Programming`;
      sections[i].querySelector(".button_shape").innerText = `2016 -> Present`;
      break;
    case 12:
      sections[i].querySelector(".small_title").innerText = `Musician `;
      sections[i].querySelector(".title").innerText = `Kelela`;
      sections[i].querySelector(".right_box").innerText = `Interactive Microsite`;
      sections[i].querySelector(".button_shape").innerText = `2016`;
      break;
  }
}
