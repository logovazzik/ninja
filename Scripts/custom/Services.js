function saveOrderNumber() {
    //var orderedIds = $("#sortable").sortable("serialize");
    var orderedIds = $("#sortable").sortable("toArray");

    $.ajax({
        type: "POST",
        url: "/service/SaveNewOrder",
        dataType: "json",
        traditional: true,
        data: {
            orderedIds: orderedIds
        }
    });
}

function addNewActionToList() {
    var elValue = document.getElementById("newActionName");
    if (elValue.value !== '') {
        var elLi = document.createElement("li");

        var element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("value", elValue.value);
        element.setAttribute("name", "serviceAction");
        element.setAttribute("style", "width: 60%;");

        var deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Удалить");
        deleteButton.setAttribute("name", "deleteButton");
        deleteButton.setAttribute("style", "margin-left: 5px;");
        deleteButton.setAttribute("onclick", "$(this).closest('li').remove()");
        
        var listOfAction = document.getElementById("ActionsList");
        
        elLi.appendChild(element);
        elLi.appendChild(deleteButton);
        listOfAction.appendChild(elLi);

        elValue.value = '';
    }
}
