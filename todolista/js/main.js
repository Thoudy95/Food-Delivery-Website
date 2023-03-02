let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
    popup = document.querySelector(".popup")
    popupInfo = document.querySelector(".popup-info")
    popupInput = document.querySelector(".popup-input")
    popupAddBtn = document.querySelector(".accept")
    popupCloseBtn = document.querySelector(".cancel")
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo);
    ulList.addEventListener("click", checkClick);
    popupCloseBtn.addEventListener("click", closeTodo)
    popupAddBtn.addEventListener("click", changeTodoText)
    todoInput.addEventListener('keyup', enterCheckKey)

};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		
        
        
        ulList.append(newTodo);

        CreateTools()

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania!";
	}
};

const CreateTools = () => {
   
   const toolsPanel = document.createElement('div')
   toolsPanel.classList.add('tools')
   newTodo.append(toolsPanel)

   const completeBtn = document.createElement('button')
   completeBtn.classList.add('complete')
   completeBtn.innerHTML = '<i class="fas fa-check"></i>'
   
   const editBtn = document.createElement('button')
   editBtn.classList.add('edit')
   editBtn.textContent = 'EDIT'
   
   const deleteBtn = document.createElement('button')
   deleteBtn.classList.add('delete')
   deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

   toolsPanel.append(completeBtn, editBtn, deleteBtn)

}





const checkClick = e => {
   if(e.target.matches('.complete')) {
     e.target.closest('li').classList.toggle('completed')
     e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}  

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    console.log(todoToEdit.firstChild)
    popup.style.display = 'flex'
}

const closeTodo = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== "") {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś wartość!'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const AllTodos = ulList.querySelectorAll('li')

    if (AllTodos.length === 0) {
        errorInfo.textContent = "Brak zadań do wykonania"
    } else if (AllTodos.length != 0){
        errorInfo.textContent = ""
    }
}

const enterCheckKey = e => {
     if (e.key === 'Enter') {
        addNewTodo()
     }
}


document.addEventListener("DOMContentLoaded", main);



const add = (x,y) => {
    const score = x + y

    showScore(score)
    showScore(x)
}

const showScore = score2 => {
console.log(`Wynik działania to ${score2}`)

}


const sentence = score3 => {
    const x = `I jest to duży wynik`
}

add(10,10)







