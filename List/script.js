const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");

function addTask()
    {
        // error message when no input put it
        if(inputBox.value === '')
            {
                alert("You didn't input a task");
            }
        // adding task to list 
        else
            {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listConatiner.appendChild(li);

                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
        // Makes the input box empty after adding task
        inputBox.value = "";
        saveData();
    }

listConatiner.addEventListener("click", function(e)
    {
        if(e.target.tagName === "LI")
            {
                e.target.classList.toggle("checked");
                saveData();
            }
        else if (e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }
    }, false);


// To keep the data on the page instead of dissaprearing when page refresh 
function saveData()
    {
        localStorage.setItem("data", listConatiner.innerHTML);
    }

function showTask()
    {
        listConatiner.innerHTML = localStorage.getItem("data");
    }
showTask();

inputBox.addEventListener("keydown", function(event) 
{
    if (event.key === "Enter") 
        {
            event.preventDefault();
            addTask();
        }
});