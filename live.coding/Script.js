var gestionSalle = new GestionSalle
var selectRow = null
var rowId

document.getElementById("formSubmit").addEventListener("submit", function(event){
    event.preventDefault();
    salle = readSalle()
    if(selectRow == null){
        gestionSalle.addSalle(salle)
    }else{
        if(confirm("vous avez sur")){
            salle.id = rowId
            gestionSalle.modifierSalle(salle)
        }
    }

    insertNewRow();
    restForm();
})

function readSalle(salle){
    salle = new Salle()
    salle.numéro = document.getElementById("num").value
    salle.nature = document.getElementById("nature").value
    return salle
}

function restForm() {
    document.getElementById("num").value = ''
    document.getElementById("nature").value = ''
}
function insertNewRow(salle) {
    var list = gestionSalle.listSalle
    var TableList = document.getElementById("TableList").getElementsByTagName("tbody")[0];
    while(TableList.rows.length>0){
        TableList.deleteRow(0)
    }
    for(let i=0 ; i<list.length ; i++){
        var newRow = TableList.insertRow(TableList.length)

        cell1 = newRow.insertCell(0)
        cell1.innerHTML = list[i].id

        cell2 = newRow.insertCell(1)
        cell2.innerHTML = list[i].numéro

        cell3 = newRow.insertCell(2)
        cell3.innerHTML = list[i].nature

        cell4 = newRow.insertCell(3)


        var modifierButton = document.createElement("button")
        var modifierButtonName = document.createTextNode("modifier")
        modifierButton.appendChild(modifierButtonName)
        modifierButton.setAttribute("onclick", 'modifier(this)')
        cell4.appendChild(modifierButton)

        var supprimerButton = document.createElement("button")
        var supprimerButtonName = document.createTextNode("supprimer")
        supprimerButton.appendChild(supprimerButtonName)
        supprimerButton.setAttribute("onclick", 'supprimer(this)')
        cell4.appendChild(supprimerButton)
    }
}
function modifier(buttonreferance) {
    selectRow = buttonreferance.parentElement.parentElement
    rowId = selectRow.cells[0].innerHTML
    salle = new Salle()
    salle = gestionSalle.getId(rowId)
    document.getElementById("num").value = salle.numéro
    document.getElementById("nature").value = salle.nature

}

function supprimer(buttonreferance) {
    if(confirm("vous avez sur")){
        var row = buttonreferance.parentElement.parentElement
        var rowId = row.cells[0].innerHTML

        document.getElementById("TableList").deleteRow(row.rowIndex)
        gestionSalle.getId(rowId)

        restForm()
    }

}