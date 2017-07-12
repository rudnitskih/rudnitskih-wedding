$(function () {
    const defaultParams = {
        header: 'Шановні гості!',
        text: '19 серпня 2017 року ми створимо нову щасливу сім’ю. Для нас великою радістю буде розділити цей незабутній та важливий день із Вами. Від щирого серця запрошуємо Вас на наше весілля!'
    };

    const invantation = {
        'mom-and-dad': {
            header: 'Любі Мамо та Тато!'
        },
        '0001': {
            header: 'Любі Мамо та Славик!'
        }
    };

    const personalInvite = Object.assign({}, defaultParams, invantation[getUrlParameter('invite')]);

    $('#invite-header').text(personalInvite.header);
    $('#invite-text').text(personalInvite.text);

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
});
