let list = document.querySelector("#list");
let elementoPai = document.querySelector("#list");

function addItem() {
    let text = document.querySelector("div #inputText");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");
    let state = false;

    if (text.value !== "") {
        button.addEventListener("click", () => {
            elementoPai.removeChild(div);
            if (document.querySelectorAll("#list div").length === 0) {
                list.style.display = "none";
            }
        });

        div.addEventListener("click", () => {
            state = !state;
            if (state) {
                div.style.backgroundColor = "rgb(118, 207, 118)";
            } else {
                div.style.backgroundColor = "rgb(247, 241, 241)";
            }
        });
    
        span.innerHTML = text.value;
        button.innerHTML = "-";
        div.classList.add("itemList");
    
        text.value = "";
        list.style.display = "block";
    
        div.appendChild(span);
        div.appendChild(button);
        elementoPai.appendChild(div);
    }
}

function removeAll() {
    document.querySelectorAll("#list div").forEach((div) => {
        elementoPai.removeChild(div);
    });

    list.style.display = "none";
}

document.querySelector("#input #inputText").addEventListener("keypress", function(e) {
    if (e.which === 13) {
        addItem();
    }
})