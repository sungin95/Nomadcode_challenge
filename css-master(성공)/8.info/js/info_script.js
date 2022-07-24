const box_i = document.querySelectorAll(".box_i");

for (let i = 0; i < Object(box_i).length; i++) {
  switch (i % 12 + 1) {
    case 1:
      box_i[i].querySelector("h1").innerText = `Art News`;
      box_i[i].querySelector("h6").innerText = `Performal Launches Online Platlorm for Streaming New and Archived Works`;
      break;
    case 2:
      box_i[i].querySelector("h1").innerText = `The Guardian`;
      box_i[i].querySelector("h6").innerText = `Masked balls and gay uprisings: Queer Maps is a guide to 150 years of LGBTQ history`;
      break;
    case 3:
      box_i[i].querySelector("h1").innerText = `Frieze`;
      box_i[i].querySelector("h6").innerText = `Distibuted DISsent - How dis art blurs the lines between education, entertainment and commmerce`;
      break;
    case 4:
      box_i[i].querySelector("h1").innerText = `It's Nice That`;
      box_i[i].querySelector("h6").innerText = `Disart turns "learning into a Netfilix-like expenrence"`;
      break;
    case 5:
      box_i[i].querySelector("h1").innerText = `WWD`;
      box_i[i].querySelector("h6").innerText = `Art Collective Dis Releases Progressive`;
      break;
    case 6:
      box_i[i].querySelector("h1").innerText = `Art Net`;
      box_i[i].querySelector("h6").innerText = `DIS Magazine, New York's Hiooest Art Media Outlet, Is Launching a 'PBS' for Gen Z`;
      break;
    case 7:
      box_i[i].querySelector("h1").innerText = `The New Yorker`;
      box_i[i].querySelector("h6").innerText = `How to be a Successful Black Woman`;
      break;
    case 8:
      box_i[i].querySelector("h1").innerText = `Village Voice`;
      box_i[i].querySelector("h6").innerText = `Martine Syms's interactive MoMMA Installation Explores. The Tyanny of Screens`;
      break;
    case 9:
      box_i[i].querySelector("h1").innerText = `Kaleidoscope Magazine`;
      box_i[i].querySelector("h6").innerText = `Martine Syms & carhart WIP`;
      break;
    case 10:
      box_i[i].querySelector("h1").innerText = `Dazed Magazine`;
      box_i[i].querySelector("h6").innerText = `Dazed Summer 017`;
      break;
    case 11:
      box_i[i].querySelector("h1").innerText = `Art Forum`;
      box_i[i].querySelector("h6").innerText = `Martine Syms discusses her Projects exhibition at MoMA.`;
      break;
    case 12:
      box_i[i].querySelector("h1").innerText = `Culture Type`;
      box_i[i].querySelector("h6").innerText = `Public Access`;
      break;
  }
}