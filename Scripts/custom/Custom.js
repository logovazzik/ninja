var skip = 0;

function SendEmail(name, telephone) {
    var requestData = {
        Subject: name,
        From: name,
        To: "ninjas@mail.ru",
        Body: name + "заказал обратный звонок на номер " + telephone,
    };

    $.ajax({
        url: '/Email/SendEmail',
        type: 'POST',
        data: JSON.stringify(requestData),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: true
    });
}

function DeleteArticle(articleId, theme) {
    if (confirm("Вы уверены, что хотите удалить статью: '" + theme + "'")) {
        $.ajax({
            url: '/BlogCreation/DeleteArticle',
            type: 'GET',
            data: { articleId: articleId }
        });
    }
    return false;
}

function LoadMoreArticles() {
    skip = skip + 9;
    var category = GetAttribute("category");
    var fd = $("#hiddenFilterDate").value;

    var requestData = {
        Category: category,
        Skip: skip,
        FormattedDate: fd
    };

    $.ajax({
        url: '/Blog/GetAdditionalArticles',
        type: 'GET',
        data: requestData
    })
    .success(function (result) {
        $("#articlesList").append(result);
    });

    return false;
}

function GetAttribute(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || null;
    }
}

function SubscribeEmail(email) {
    $.ajax({
        url: '/Email/SubscribeEmail',
        type: 'POST',
        data: { email: email }
    }).success(function () {
        $('#subscribeEmail').val('');
        alert("Вы успешно подписались на нашу рассылку!");
    });
}
