function saveOrderNumber() {
    //var orderedIds = $("#sortable").sortable("serialize");
    var orderedIds = $("#sortable").sortable("toArray");

    $.ajax({
        type: "POST",
        url: "/portfolio/SaveNewOrder",
        dataType: "json",
        traditional: true,
        data: {
            orderedIds: orderedIds
        }
    });
}

function deletePortfolio(id) {
    //var orderedIds = $("#sortable").sortable("serialize");

    $.ajax({
        type: "POST",
        url: "/portfolio/delete",
        dataType: "json",
        traditional: true,
        data: {
            portfolioId: id
        }
    });
    submit();
}

var ActionNumber = 0;

function addNewActionToList() {
    var elValue = document.getElementById("newActionName");
    if (elValue.value !== '') {
        var elLi = document.createElement("li");

        var element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("value", elValue.value);
        element.setAttribute("name", "PortfolioAction");
        element.setAttribute("style", "width:400px;");

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

function addNewActionToListCreation() {    
    var elValue = document.getElementById("newActionName");
    if (elValue.value !== '') {
        var elLi = document.createElement("li");

        var element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("value", elValue.value);
        element.setAttribute("name", "PortfolioAction[" + ActionNumber + "].ActionDescription");
        element.setAttribute("id", "PortfolioAction[" + ActionNumber + "].ActionDescription");
        element.setAttribute("style", "width: 60%;");

        var deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Удалить");
        deleteButton.setAttribute("name", "deleteButton");
        deleteButton.setAttribute("style", "margin-left: 5px;");
        deleteButton.setAttribute("onclick", "$(this).closest('li').remove(); ActionNumber--;");

        var listOfAction = document.getElementById("ActionsList");

        elLi.appendChild(element);
        elLi.appendChild(deleteButton);
        listOfAction.appendChild(elLi);

        elValue.value = '';
        ActionNumber++;
    }
}
