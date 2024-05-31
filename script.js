const inputbox = document.getElementById("input");
const listcontainer = document.getElementById("list-container");
function addtask(){
    if(inputbox.value == ''){
        alert("you should enter some task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();

}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
           e.target.classList.toggle("checked");
           saveData();
    }
    else if(e.target.tagName === "span"){
           e.target.parentElement.remove();
           saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showList(){
    listcontainer.innerHTML = localStorage.getItem("daya");
}
showList();