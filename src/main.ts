import foo from "./foo";
import bravo from "./bravo";
import "./global.css";

function main() {
  const res = document.createElement("div");

  const alpha = document.createElement("div");
  alpha.innerHTML = "alpha";
  alpha.classList.add("hello");

  const charlie = document.createElement("div");
  charlie.innerHTML = "charlie";

  res.append(alpha);
  res.append(bravo());
  res.append(charlie);

  console.log(foo());

  return res;
}

document.body.appendChild(main());
