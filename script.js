function addWorkFunc(){
    const input = document.getElementById("input");
    const work = input.value;

    if(work === "") return;

    const table = document.getElementById("table")
    const row = document.createElement("tr");

    row.innerHTML = `<td>${work}<button class="btn delete-btn" onclick="deleteWorkFunc(this)">remove</button></td>`;
    table.appendChild(row);
}

function deleteWorkFunc(btn){
    const row = btn.closest("tr");

    row.remove()
}