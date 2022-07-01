window.addEventListener("load", ()=>{


    const add = document.querySelector("#push");
    const input = document.querySelector("#newtask input");
    const list = document.querySelector("#tasks");

    add.addEventListener('click', (event)=> {
        event.preventDefault();

        const task = input.value;
        // const content = 0;
        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");

        task_element.appendChild(task_content);

        const task_newinput = document.createElement("input");
        task_newinput.classList.add("text");
        task_newinput.type = "text";
        task_newinput.value = task;
        task_newinput.disabled = true;

        task_content.appendChild(task_newinput);

        const task_action = document.createElement("div");
        task_action.classList.add("action");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerText = "Edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerText = "Delete";
        // task_delete.innerHTML = '<i class="fa-light fa-trash"></i>';

        task_action.appendChild(task_edit);
        task_action.appendChild(task_delete);

        task_content.appendChild(task_action);

        list.appendChild(task_element);

        input.value = '';

        task_edit.addEventListener("click", (event) => {
            if(task_edit.innerText.toLowerCase() == "edit"){
                task_edit.innerText = "Save";
                task_newinput.disabled = !task_newinput.disabled;
                task_edit.addEventListener("click" , (event) => {
                    task_edit.innerText = "Edit";
                    task_newinput.disabled = true;
                });
            }

        });

        task_delete.addEventListener('click', (event) =>{
            list.removeChild(task_element);
        });

    });
});