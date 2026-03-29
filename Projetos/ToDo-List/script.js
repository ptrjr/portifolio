let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function renderTasks(){

let list = document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

if(task.completed){
li.classList.add("completed")
}

li.innerHTML = `
${task.text}

<div class="actions">
<span onclick="toggleTask(${index})">✔</span>
<span onclick="removeTask(${index})">❌</span>
</div>
`

list.appendChild(li)

})

localStorage.setItem("tasks",JSON.stringify(tasks))

}

function addTask(){

let input = document.getElementById("taskInput")

if(input.value === "") return

tasks.push({
text: input.value,
completed:false
})

input.value=""

renderTasks()

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed

renderTasks()

}

function removeTask(index){

tasks.splice(index,1)

renderTasks()

}

renderTasks()