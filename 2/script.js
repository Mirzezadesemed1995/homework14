document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Удалить</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(listItem);
            });
        }
    }

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
