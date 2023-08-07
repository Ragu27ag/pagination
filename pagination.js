import { data } from "./data.js";

let maindiv = document.createElement("div");
maindiv.classList.add("maindiv");

let buttdiv = document.createElement("div");
buttdiv.classList.add("buttdiv");

let currpage = 1;
let postperpage = 10;

function da(currpage) {
  maindiv.innerHTML = "";

  console.log(currpage);

  let lastindex = postperpage * currpage;

  let firstindex = lastindex - postperpage;

  console.log("fn");
  data.slice(firstindex, lastindex).forEach((dataum) => {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("innerdiv");
    let para1 = document.createElement("p");
    para1.innerText = `ID : ${dataum.id}`;
    innerdiv.append(para1);
    let para2 = document.createElement("p");
    para2.innerText = `Name : ${dataum.name}`;
    innerdiv.append(para2);
    let para3 = document.createElement("p");
    para3.innerText = `Email : ${dataum.email}`;
    innerdiv.append(para3);
    maindiv.append(innerdiv);
  });
}

for (let i = 1; i <= Math.ceil(data.length / postperpage); i++) {
  let butt = func(i);
  buttdiv.append(butt);
}
function func(i) {
  let buttons = document.createElement("button");
  buttons.innerText = i;
  buttons.setAttribute("id", i);
  buttons.classList = "buttons";
  buttons.addEventListener("click", function () {
    // page = res;
    // let cu = 1;
    // lastindex = postperpage * page;
    // firstindex = lastindex - postperpage;
    // if (p === cu) {
    //   res++;
    //   p++;
    //   cu++;
    //   da();
    //   func();
    // }
    // console.log(page, lastindex, firstindex, res, p, cu);
    currpage = i;

    da(currpage);
    window.scrollTo(0, 0);
    console.log(currpage);
  });

  return buttons;
}

document.body.append(maindiv);
document.body.append(buttdiv);

da(currpage);
func();
