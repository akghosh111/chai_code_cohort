
const btn = document.getElementById("addBtn");
const input = document.getElementById("itemInput");
const list = document.getElementById("list");

function saveItems() {
    const items = [];

    document.querySelectorAll("#list li").forEach(li => {
        items.push(li.firstChild.textContent);
    });

    localStorage.setItem("items", JSON.stringify(items));
}


function loadItems() {
    const items = JSON.parse(localStorage.getItem("items")) || [];

    items.forEach(itemText => {
        createListItem(itemText);
    });
}


function createListItem(text) {
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.textContent = text;
    li.appendChild(delBtn);
    list.appendChild(li);

    
    delBtn.addEventListener("click", () => {
        li.remove();
        saveItems();
    });

    
    li.addEventListener('dblclick', function () {
        this.contentEditable = true;
        this.focus();
        this.style.cursor = 'text';
    });

    
    li.addEventListener('blur', function () {
        this.contentEditable = false;
        saveItems();
    });
}


btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Mat kar lala!");
        return;
    }

    createListItem(input.value);
    saveItems();

    input.value = "";
});


loadItems();

