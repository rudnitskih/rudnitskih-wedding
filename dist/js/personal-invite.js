$(function () {
    const defaultParams = {
        header: 'Шановні гості!',
        text: '19 серпня 2017 року ми створимо нову щасливу сім’ю. Для нас великою радістю буде розділити цей незабутній та важливий день із Вами. Від щирого серця запрошуємо Вас на наше весілля!',
        thanksText: 'Дякую. Все було кльово. Дякую. Фотки <a href="">тут</a>'
    };

    const singleUkrainian = '19 серпня 2017 року ми створимо нову щасливу сім’ю. Для нас великою радістю буде розділити цей незабутній та важливий день із тобою. Від щирого серця запрошуємо тебе на наше весілля!';

    const singleRussian ='19 августа 2017 мы создадим новую счастливую семью. Для нас большой радостью будет разделить этот незабываемый и важный день с тобой. От всего сердца приглашаем тебя на нашу свадьбу!';

    const coupleRussian = '19 августа 2017 мы создадим новую счастливую семью. Для нас большой радостью будет разделить этот незабываемый и важный день с Вами. От всей души приглашаем Вас на нашу свадьбу!';

    const englishText = '19th August of 2017 we plan to create a new family. I will be happy to see you at my wedding, but this is difficult to attend event across 6000 km:) For this purpose, we will broadcast our wedding on the Internet. Like for the Royal Family:) Please join to <a href="//www.pscp.tv/" target="_blank">Periscope</a> service at 15.00 (Kyiv Time) or 17.30 (Indian Time) to see our ceremony. The video will be available in Vlad Vovk\'s <a href="//www.pscp.tv/vo_olk1/1vOxwOeWRERxB" target="_blank">profile</a>. We will broadcast only ceremony, so duration will be 1 hour approximately. See you!';

    const invantation = {
        'mom': {
            header: 'Нійрідніші Мамо та Станіславе Борисовичу'
        },
        'mom-and-dad': {
            header: 'Найрідніші Мамо і Тато'
        },
        'Family-Vygovski': {
            header: 'Рідні наші Юрію, Іринко та Лізуша'
        },
        'Family-Skripnikov': {
            header: 'Дорогие наши Бабушка и Дедушка',
            text: coupleRussian
        },
        'Andrew-Skripnikov': {
            header: 'Дорогой наш Андрей',
            text: singleRussian
        },
        'Shpak-family': {
            header: 'Шановні Ігоре Георгійовичу, Валентино Миколаївно та Іринко'
        },
        'Godmother-Natalia': {
            header: 'Дорогая крестная',
            text: coupleRussian
        },
        'Godparents': {
            header: 'Дорогі хресний та тітко Олександро'
        },
        'Aleks-Makovey': {
            header: 'Наш любий друже Сашко',
            text: singleUkrainian
        },
        'Denis-and-Karina': {
            header: 'Дорогі Денисе та Карино'
        },
        'Vitaly-Gomonov': {
            header: 'Наш любий друже Віталію',
            text: singleUkrainian
        },
        'Vlad-and-Tasia': {
            header: 'Наші любі Владе і Тасю'
        },
        'Bogdan-Gerkalyuk': {
            header: 'Дорогий друже Богдане',
            text: singleUkrainian
        },
        'Vitaliy-and-Svetlana': {
            header: 'Наші любі Віталію та Світланко'
        },
        'Rys-family': {
            header: 'Найрідніші Олечко, Сашко, Богданчику та Дем\'янчику'
        },
        'Tetyanka': {
            header: 'Наша люба Тетянко',
            text: singleUkrainian
        },
        'Sveta-and-Sasha': {
            header: 'Любі Сашко та Світланко'
        },
        'Victoria-and-Igor': {
            header: 'Наші дорогі друзі Ігоре та Вікторіє'
        },
        'Lena-and-Igor': {
            header: 'Наші любі Оленко, Ігоре та Ростику'
        },
        'Andrew': {
            header: 'Наш добрий друже Андрію',
            text: singleUkrainian
        },
        'Mikhail': {
            header: 'Наш любий Мишко',
            text: singleUkrainian
        },
        'Vladislav': {
            header: 'Наш любий Владику',
            text: singleUkrainian
        },
        'Timur-and-Nina': {
            header: 'Любі Тімуре та Ніно'
        },
        'Mark': {
            header: 'Наш любий друже Марку',
            text: singleUkrainian
        },
        'Anastasia-and-Valery': {
            header: 'Наші любі Анастіє та Валерію'
        },
        'Eugene-and-Natalia': {
            header: 'Дорогі Євгене, Наталіє та Катруся'
        },
        'Irina': {
            header: 'Наша дорога Іринко',
            text: singleUkrainian
        },
        'Nick-and-Anastasia': {
            header: 'Любі Миколо та Анастасіє'
        },
        'Kirichek-family': {
            header: 'Шановні Вікторе Федоровичу та Валентино Сергіївна'
        },
        'Irochka': {
            header: 'Дорогі Іринко та Гордійчику'
        },
        'Valentin-Tatiana': {
            header: 'Уважаемые Валентин и Татьяна',
            text: coupleRussian
        },
        'Oleg': {
            header: 'Любий друже Олеже',
            text: singleUkrainian
        },
        'savchenko-family': {
            header: 'Дорогие Татьяна и Сашка',
            text: coupleRussian
        },

        'andrey-photograph': {
            header: 'Шановний Андрію!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – схопити найкращі моменти цього дня та зберегти їх у фотознімках. Ми віримо, що наше велике кохання та Ваш талант зроблять все необхідне! До скорої зустрічі!'
        },

        'sergey': {
            header: 'Шановний Сергію!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – ведучим нашого весілля! Ми віримо у Ваше прекрасно почуття гумору та майстерність зацікавлювати та веселити! До скорої зустрічі!'
        },

        'julia-organizer': {
            header: 'Шановна Юліє!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – втілити наші бачення та ідеї в реальність! Ми вдячні Вам за ту увагу, з якою Ви поставилися до найважливішого дня у нашому житті. До зустрічі!'
        },

        'sergey-and-maksym': {
            header: 'Шановні Сергію та Максиме!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – схопити найкращі моменти цього дня та зберегти їх у відео. Ми віримо, що наше велике кохання та Ваш талант зроблять все необхідне! До скорої зустрічі!'
        },

        'sheremet-family': {
            header: 'Любі наші Ольго та Олексійчику'
        },

        'ankush': {
            header: 'Dear Ankush!',
            text: englishText
        },

        'gourav': {
            header: 'Dear Gourav!',
            text: englishText
        },

        'surekha': {
            header: 'Dear Surekha!',
            text: englishText
        },

        'english': {
            header: 'Dear Friend!',
            text: englishText
        }
    };

    const personalInvite = Object.assign({}, defaultParams, invantation[getUrlParameter('invite')]);

    $('#invite-header').text(personalInvite.header);
    $('#invite-text').html(personalInvite.text);
    $('#thanks-text').html(personalInvite.thanksText);

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
