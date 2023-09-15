let btn = window.document.querySelector(".btntema")
  let html = window.document.getElementsByTagName("html")[0]
btn.addEventListener("click", () => {
  if (html.className == "dark") html.setAttribute("class", "light")
  else html.setAttribute("class", "dark")
})
