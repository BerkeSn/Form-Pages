// Get references to form elements and buttons
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var submit = document.getElementById("submit");
var progress = document.getElementById("progress");

// Event listener for the first "Next" button
next1.addEventListener("click", ()=>{
    form1.style = "left:-450px"; // Move form1 out of view
    form2.style = "left:40px;"   // Bring form2 into view
    progress.style = "width:240px"; // Extend progress bar
});

// Event listener for the second "Next" button
next2.addEventListener("click", ()=>{
    form2.style = "left:-450px"; // Move form2 out of view
    form3.style = "left:40px";   // Bring form3 into view
    progress.style = "width:360px"; // Extend progress bar further
});

// Event listener for the first "Back" button
back1.addEventListener("click",()=>{
    form2.style = "left:450px"; // Move form2 out of view to the right
    form1.style = "left:40px";  // Bring form1 back into view
    progress.style = "width:120px"; // Shrink progress bar
});

// Event listener for the second "Back" button
back2.addEventListener("click",()=>{
    form3.style = "left:450px"; // Move form3 out of view to the right
    form2.style = "left:40px";  // Bring form2 back into view
    progress.style = "width:240px"; // Adjust progress bar accordingly
});
