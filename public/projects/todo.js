/* 

COMP 125-Assignment 1-W23 

Instructions: 

The assignment is to build a Simple To Do List. The HTML/CSS is provided for you as well as a shell of the JavaScript functions that I used to do the assignment. You can however change up the JavaScript to suit your coding style.  

If you'd like to see the code in action you can check out this CodePen that I've put together https://codepen.io/ProfAkshay/pen/OJwZMZw. You'll notice that the HTML/CSS look normal but the JavaScript is scrambled. I've obfuscated the code so it works but it can't be read. 

Assignment Breakdown:

Add Task Functionality - 40%
Delete Task Functioanlity - 30%
Complete Task Functionaly - 30%

Hints:

- A task is added when the user hits enter. Here is some information on that https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp.

- Remember that when you are adding an EventListener to your app when it first loads, it only adds the listener to the divs that are created. If you are creating new divs dynamically, you'll need to add the listener after you create the div. 

- To get the strikethrough for complete task you need to add a class called "task-complete" to the div. Ensure you can complete the task but also mark it as not complete if you click it again. You can test this functionality in the CodePen.

- This assignment introduces some concepts that you haven't done yet. I highly encourage you to not leave it to the last minute to do it. Feel free to bounce ideas off each other to get it done. Don't cheat though, do not submit code you don't understand. 

Submission: 

Create a CodePen account (https://codepen.io/) and put your code there and submit just the codepen link into eCentennial. It makes it much easier for me to mark if you all use CodePen so I don't have unzip lots of files. 

If you have any questions, contact me at akonjier@my.centennialcollege.ca

*/
 var counter = 0;
 var input = document.getElementById("todoinput");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter"){
      document.getElementById("todo-list").innerHTML += "<li class='task' id='item" + counter +/*create id*/ "'onClick='completeTask(this.id)'>" + input.value + "<div class = 'remove-task' id='item" + counter + "'onClick='removeTask(this.id)'>remove</div></li>";
      input.value = ""; //clear the previous input
      counter ++;
    }
  });

function removeTask(id) {
  document.getElementById(id).remove();
  document.getElementById("complete"+ id).remove();
  }

function completeTask(id) {
  document.getElementById(id).className =="task"? document.getElementById(id).className="task task-complete"/*If not line-through*/: document.getElementById(id).className="task";/*If line-thorugh already*/
}



