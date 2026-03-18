const btn = document.getElementById("addBtn");
const input = document.getElementById("itemInput");
const list = document.getElementById("list");


btn.addEventListener("click", () => {
    if(input.value === "") {
        alert("Mat kar lala!")
        return;
    }

    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.textContent = input.value;
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = ""


    delBtn.addEventListener("click", () => {
        li.remove()
    })



    li.addEventListener('dblclick', function() {
    
        this.contentEditable = true;
        
        this.focus();
        
        this.style.cursor = 'text'; 
    });
})