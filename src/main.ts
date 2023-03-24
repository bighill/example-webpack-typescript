import { foo } from "./foo";

function main() {
  const div = document.createElement("div");
  div.innerHTML = "hello there";

  console.log(foo());

  return div;
}

document.body.appendChild(main());
