const Begging = document.getElementById("begging");
const disabled = document.getElementById("none");
const work = document.getElementById("work");

let moneycount = 0;

disabled.style.display = "none";
moneycount = Number(moneycount)


Begging.onclick = function(){
    let currentvalue = Math.floor(Math.random() * 500) + 1
    moneycount = moneycount + currentvalue;
    const money = document.getElementById("money").textContent = moneycount;

    Begging.style.display = "none"

    setTimeout(() => {Begging.style.display = "block"} , 7200)

    document.getElementById("comment").textContent = "You Earned "+currentvalue+" And Your Balance Is "+moneycount+" Now";

    setTimeout(() => {document.getElementById("comment").textContent = "Finish your To Do List!!!"} , 5000)

    return moneycount;

}

work.onclick = function(){
    let currentvalue = Math.floor(Math.random() * (5000 - 1000)) + 1
    moneycount = moneycount + currentvalue;
    const money = document.getElementById("money").textContent = moneycount;

    work.style.display = "none"

    setTimeout(() => {work.style.display = "block"} , 18000)

    document.getElementById("comment").textContent = "You Earned "+currentvalue+" And Your Balance Is "+moneycount+" Now";

    setTimeout(() => {document.getElementById("comment").textContent = "Finish your To Do List!!!"} , 5000)
}