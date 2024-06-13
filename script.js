const inputbox = document.getElementsByClassName("input")[0];
const listcon = document.getElementById("listcontainer");
const btn = document.getElementsByClassName("btn")[0];

function addlist() {
    if (inputbox.value === "") {
        alert("YOU DID NOT WRITE ANYTHING");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcon.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "&#10060;";
        span.addEventListener("click",()=>{
            li.remove();
            span.remove();
        })
        li.appendChild(span);

        li.addEventListener("click",()=>{
            li.classList.toggle("checked")
        })
    }
    inputbox.value ='';

}

btn.addEventListener("click", addlist);

console.log("hello world")
