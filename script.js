let body = document.getElementById("body")
let title = document.getElementById("title")
let search_input = document.getElementById("search")
let month_icon = document.getElementById("month")
let label = document.getElementById("label")


// Dark mode & Light mode function start

function DarkMode() {
    body.style.backgroundColor = "black"
    title.style.color = "white"
    search_input.style.borderColor = "#6c63ff"
    label.style.color = "white"
}
function LightMode() {
    body.style.backgroundColor = "white"
    title.style.color = "black"
    search_input.style.borderColor = "#6c63ff"
    label.style.color = "black"
}

let sendBtn = document.getElementById("send")
let noteBox = document.getElementById('noteBox')

sendBtn.addEventListener('click', () => {
    noteBox.innerHTML += `
    
      <div class="solo_note">
        <div id="checkBox" class="checkBox">
          <input type="checkbox" id="check" />
          <label id="label" for="check">${search_input.value}</label>
        </div>
        <div class="noteIcons">
          <img src="./pencil.svg" alt="" />
          <img src="./trash.svg" alt="" />
        </div>
      </div>
        `
    search_input.value = ""
})