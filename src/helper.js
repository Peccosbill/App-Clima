function Checked() {
  const check = document.querySelector("#checkbox");
  console.log(check);
  console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    check.setAttribute("checked", true);
  }
}

export default Checked();
