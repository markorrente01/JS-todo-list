![preview](/images/todolist%20preview.png)
# simple todo-list

## Contents

  - [Screenshot](#screenshot)
  - [Link](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resource](#useful-resources)
- [Author](#author)

### Screenshot

![ios11](/images/todoList-ios11.png)
![desktop](/images/todoList-sc-desktop.png)

### Link

- Live Site URL: [Live site](https://markorrente01.github.io/JS-todo-list/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- FlexBox
- CSS Grid
- SCSS
- Javascript


### What I learned

In this mini-project i learnt how to delete items individually from local storage using the filter method and updating the ui if all other list items passed the test.

```js
function createLi(todoText) {
    const li = document.createElement('li');
        li.innerHTML = `${todoText} <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#ffab01">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>`

        li.querySelector('svg').addEventListener('click', ()=>{
            delItem(todoText); 
            
        })
    return li;
}
function delItem(todoText) {
    allTodos = allTodos.filter(filterTodo=> todoText !== filterTodo);
    saveToLs();
    updateTodoList();
}
```
### Continued development

Will later recreate this with a better ui experience using react instead of js.

### Useful resource

- [chatgpt](https://chatgpt.com/) - This is a great help when you get stuck in a project but you must give it a good prompt for better result.

## Author

- Frontend Mentor - [@Markorrente](https://www.frontendmentor.io/profile/markorrente01);
- X(formally known as twitter) - [markorrente01](https://twitter.com/markorrente01);