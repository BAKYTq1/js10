// const content = document.getElementsByTagName('h3')(0)
// content.textContent = "Привет мир ";

// const btn = document.querySelector("button")
// const btn2 = btn.onclick( () => {
    
// });


// function showAlert() {
//     console.log("You clicked the button!");
//     // ("You clicked the button!");
// }

// const ul = document.getElementsByTagName('ul')[0]
// const h1 = document.createElement('button')

// h1.textContent = 'Content 4';

// console.log(h1);

// ul.appendChild(h1)

// const ul1 = document.getElementsByTagName('ul')[0]
// // console.log(ul);

// const h12 = document.createElement('h1')

// h12.textContent = 'Content 3';

// console.log(h12);

// ul1.appendChild(h12)

// const class1 = document.getElementsByClassName('text')[0]

// const class2 = document.createElement("button")

// class1.addEventListener = () => {
//     class2.remuveChild(h12)
// }

// class2.textContent = 'click';

// class1.appendChild(class2)

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');   


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');   

        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);   

        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value 
 = '';
    }
});
