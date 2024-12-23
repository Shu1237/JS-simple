const todolist = [
    {
        name: 'make dinner',
        date: '2021-09-01'
    },
    {
        name: 'wash dishes',
        date: '2021-09-02'
    }


]

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    todolist.forEach((todoObject, index)=> {
        //lấy hai thuộc tính name và date từ đối tượng todoObject.
        const { name, date } = todoObject;
        const html = `
            <div> ${name} </div>
            <div> ${date} </div>
                <button class="delete-button js-delete-todo-button">Delete</button>
            `;
        todoListHtml += html;
    })
 

    //     for (let i = 0; i < todolist.length; i++) {
    //         const todoObject = todolist[i];
    //         //c1
    //         // const todoName = todolist[i].name;
    //         // const todoDate= todolist[i].date;
    //         //c2
    //         const { name, date } = todoObject;
    //         const html = `

    //    <div> ${name} </div>
    //    <div> ${date} </div>
    //     <button onclick="
    //         todolist.splice(${i},1);
    //         renderTodoList();
    //     "  class="delete-button">Delete</button>
    //    `;
    //         todoListHtml += html;
    //     }

    //show todo list
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    document.querySelectorAll('.js-delete-todo-button')
    //each delete button we add a click event listener
    .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1);
            renderTodoList();
        });
    });
    
}
document.querySelector('.js-todo-button').addEventListener('click',()=>{
    addTodo();
})
function addTodo() {
    const inputElemnet = document.querySelector
        ('.js-name-input');

    //use value => save value of input
    const name = inputElemnet.value; //lay ra dc gia tri
    const DateElemnet = document.querySelector
        ('.js-date-input');
    const date = DateElemnet.value;
    todolist.push({
        //c1
        // name:name,
        // date:date
        //c2 
        name, date

    });


    //clear input
    inputElemnet.value = '';
    renderTodoList();

}