var descriptions = document.getElementById("desc");
var table = document.getElementById("tb4");
var abc = "In Progress";
var TodoList = [];
function updateTime() {
  var timeee = document.getElementById("timee");
  var currentTime = new Date();
  var showTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  timeee.innerHTML = showTime;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();
// var required = false;
// console.log(descriptions.value);
function pushList() {
  var task = descriptions.value.trim();
  if (task !== "") {
    TodoList.push({ task: task, status: "Active" }); // Initialize status to "In Progress"
    descriptions.value = "";
    render();
  }
}

function render() {
  table.innerHTML = "";
  for (var i = 0; i < TodoList.length; i++) {
    table.innerHTML += ` <tr>
      <td class="text-primary">${i + 1}</td>
      <td contentEditable="true" id="task_${i}" onblur="updateTask(${i})">${
      TodoList[i].task
    }</td>
      <td id="status_${i}" class="text-warning">${TodoList[i].status}</td>
    
      <td>
        <button type="button" class="buttonsz btn btn-danger " onclick="deleteList(${i})"><i class="fa-solid fa-trash-can"></i></button>
        <button type="button" class="buttonsz btn btn-success "  onclick="Finished(${i})"><i class="fa-solid fa-check"></i></button>
      </td>
    </tr>`;
  }
}
function deleteList(index) {
  TodoList.splice(index, 1);
  render();
}
function updateTask(index) {
  var updatedTask = document.getElementById(`task_${index}`).textContent;
  TodoList[index].task = updatedTask;
}

function Finished(index) {
  TodoList[index].status = `<i class="fa-solid fa-check text-info"></i>`;
  document.getElementById(`status_${index}`).innerHTML = TodoList[index].status;
}
