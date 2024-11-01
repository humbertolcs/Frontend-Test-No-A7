document.getElementById('rows').addEventListener('input', function() {
    let rowsNumber = 0;
    
    rowsNumber = document.getElementById('rows').value;
    let list = document.getElementById("list");

    let joinList = "";
    for (let index = 0; index < rowsNumber; index++) {
        joinList += "<li><div id='itemDiv'><div id='itemNumber'>"+ (index + 1) +"</div></div></li>";
    }
    list.innerHTML =   joinList;
});
