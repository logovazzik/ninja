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
