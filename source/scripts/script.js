document.querySelector("#push").onclick = function () {
  const input = document.querySelector("#newtask input");

  if (document.querySelector("input").value.length == 0) {
    alert("Por favor, adicione uma tarefa!");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id='taskname'>
                    ${document.querySelector("input").value}
                </span>
                <button class='done'>
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    input.value = "";
  }

  let current_tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
