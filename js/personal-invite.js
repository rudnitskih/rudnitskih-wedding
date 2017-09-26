$(function () {
    const singleUkrainian = '19 серпня 2017 року ми створимо нову щасливу сім’ю. Для нас великою радістю буде розділити цей незабутній та важливий день із тобою. Від щирого серця запрошуємо тебе на наше весілля!';

    const singleRussian ='19 августа 2017 мы создадим новую счастливую семью. Для нас большой радостью будет разделить этот незабываемый и важный день с тобой. От всего сердца приглашаем тебя на нашу свадьбу!';

    const coupleRussian = '19 августа 2017 мы создадим новую счастливую семью. Для нас большой радостью будет разделить этот незабываемый и важный день с Вами. От всей души приглашаем Вас на нашу свадьбу!';

    const englishText = '19th August of 2017 we plan to create a new family. I will be happy to see you at my wedding, but this is difficult to attend event across 6000 km:) For this purpose, we will broadcast our wedding on the Internet. Like for the Royal Family:) Please join to <a href="//www.pscp.tv/" target="_blank">Periscope</a> service at 15.00 (Kyiv Time) or 17.30 (Indian Time) to see our ceremony. The video will be available in Vlad Vovk\'s <a href="//www.pscp.tv/vo_olk1/1vOxwOeWRERxB" target="_blank">profile</a>. We will broadcast only ceremony, so duration will be 1 hour approximately. See you!';

    const thanksTexts =  {
        singleUkrainianMan: 'Від імені новоствореної родини Рудницьких хочемо щиро подякувати Тобі, що погодився розділити день нашого весілля! Ми вдячні за теплі слова й побажання, веселий сміх та гарний настрій. Без тебе цей день не був би таким чудовим! Дякуємо за увагу, щедрість та щирість, за твій час – це для нас дуже багато значить. Ти завжди будешь бажаним гостєм у нашому домі.',
        singleUkrainianWoman: 'Від імені новоствореної родини Рудницьких хочемо щиро подякувати Тобі, що погодилась розділити день нашого весілля! Ми вдячні за теплі слова й побажання, веселий сміх та гарний настрій. Без тебе цей день не був би таким чудовим! Дякуємо за увагу, щедрість та щирість, за твій час – це для нас дуже багато значить. Ти завжди будешь бажаним гостєм у нашому домі.',
        coupleRussian: 'От имени вновьсозданной семьи Рудницких хотим искренне поблагодарить Вас, что согласились разделить день нашей свадьбы! Мы благодарны Вам за теплые слова и пожелания, веселый смех и хорошее настроение. Без Вас этот день не был бы таким замечательным! Спасибо за внимание, щедрость и искренность, за Ваше время - это для нас очень много значит. Вы всегда будете желанными гостями в нашем доме.',
        englishText: 'Thank you for your support and kind words for our family. You can find photos and videos to see how the wedding was. We invite you to our home when you will be in Ukraine.',
        missedUkrainian: 'Від імені новоствореної родини Рудницьких хочемо щиро подякувати за ваші теплі слова та підтримку. Дуже прикро, що ви не змогли бути:( Ви можете подивитись фотографії нижче, щоб подивитись як це було. Запрошуємо зустрітися та гарно провести час разом!'
    };

    const thanksSignature = {
        russian: 'Искренне Ваши,<br> Дмитрий и Марина Рудницких',
        english: 'Sincerely yours,<br> Dmytro and Maryna Rudnytskykh'
    };

    const defaultParams = {
        header: 'Шановні гості!',
        text: '19 серпня 2017 року ми створимо нову щасливу сім’ю. Для нас великою радістю буде розділити цей незабутній та важливий день із Вами. Від щирого серця запрошуємо Вас на наше весілля!',
        thanksText: 'Від імені новоствореної родини Рудницьких хочемо щиро подякувати Вам, що погодились розділити день нашого весілля! Ми вдячні Вам за теплі слова й побажання, веселий сміх та гарний настрій. Без Вас цей день не був би таким чудовим! Дякуємо за увагу, щедрість та щирість, за Ваш час – це для нас дуже багато значить. Ви завжди будете бажаними гостями у нашому домі.',
        thanksSignature: 'Щиро Вашi,<br> Дмитро та Марина Рудницьких'
    };

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
            text: coupleRussian,
            thanksText: thanksTexts.coupleRussian,
            thanksSignature: thanksSignature.russian
        },
        'Andrew-Skripnikov': {
            header: 'Дорогой наш Андрей',
            text: singleRussian,
            thanksText: 'От имени вновьсозданной семьи Рудницких хотим искренне поблагодарить Тебя, за твой финансовый подарок! Мы благодарны Вам за теплые слова и пожелания. Ты всегда будете желанными гостями в нашем доме.',
            thanksSignature: thanksSignature.russian
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
            text: singleUkrainian,
            thanksTexts: thanksTexts.missedUkrainian
        },
        'Denis-and-Karina': {
            header: 'Дорогі Денисе та Карино',
            thanksTexts: thanksTexts.missedUkrainian
        },
        'Vitaly-Gomonov': {
            header: 'Наш любий друже Віталію',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Vlad-and-Tasia': {
            header: 'Наші любі Владе і Тасю'
        },
        'Bogdan-Gerkalyuk': {
            header: 'Дорогий друже Богдане',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Vitaliy-and-Svetlana': {
            header: 'Наші любі Віталію та Світланко'
        },
        'Rys-family': {
            header: 'Найрідніші Олечко та Сашко'
        },
        'Tetyanka': {
            header: 'Наша люба Тетянко',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianWoman
        },
        'Sveta-and-Sasha': {
            header: 'Любі Сашко та Світланко'
        },
        'Victoria-and-Igor': {
            header: 'Наші дорогі друзі Ігоре та Вікторіє'
        },
        'Lena-and-Igor': {
            header: 'Наша люба Оленко',
            thanksTexts: thanksTexts.singleUkrainianWoman
        },
        'Andrew': {
            header: 'Наш добрий друже Андрію',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Mikhail': {
            header: 'Наш любий Мишко',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Vladislav': {
            header: 'Наш любий Владику',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Timur': {
            header: 'Наш добрий друже Тимур',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
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
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianWoman
        },
        'Nick-and-Anastasia': {
            header: 'Наш друже Миколай',
            text: singleUkrainian,
            thanksTexts: thanksTexts.singleUkrainianMan
        },
        'Kirichek-family': {
            header: 'Шановні Вікторе Федоровичу та Валентино Сергіївна'
        },
        'Irochka': {
            header: 'Дорогі Іринко та Гордійчику'
        },
        'Valentin-Tatiana': {
            header: 'Уважаемые Валентин и Татьяна',
            text: coupleRussian,
            thanksText: thanksTexts.coupleRussian,
            thanksSignature: thanksSignature.russian
        },
        'Oleg': {
            header: 'Любий друже Олеже',
            text: singleUkrainian
        },
        'savchenko-family': {
            header: 'Дорогие Татьяна и Сашка',
            text: coupleRussian,
            thanksText: thanksTexts.coupleRussian,
            thanksSignature: thanksSignature.russian
        },

        'andrey-photograph': {
            header: 'Шановний Андрію!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – схопити найкращі моменти цього дня та зберегти їх у фотознімках. Ми віримо, що наше велике кохання та Ваш талант зроблять все необхідне! До скорої зустрічі!',
            thanksText: 'Ми здогадувалися про те, що ми доволі симпатичні, і взагалі гарна пара, однак Ваші фотографії просто нас приголомшили – скільки сяйва, кохання та енергії! Дякуємо за легкість і невимушеність, за Вашу інтелігентність та вміння працювати! Наснаги Вам!'
        },

        'sergey': {
            header: 'Шановний Сергію!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – ведучим нашого весілля! Ми віримо у Ваше прекрасно почуття гумору та майстерність зацікавлювати та веселити! До скорої зустрічі!',
            thanksText: 'Наше весілля було веселим та легким завдяки Вам! Ми вдячні за чудові конкурси, Вашу посмішку, вдалі жарти та невичерпну енергію!'
        },

        'julia-organizer': {
            header: 'Шановна Юліє!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – втілити наші бачення та ідеї в реальність! Ми вдячні Вам за ту увагу, з якою Ви поставилися до найважливішого дня у нашому житті. До зустрічі!',
            thanksText: 'Ви втілили наше ідеальне весілля в реальність! Вдячні за Ваш професіоналізм та креативність, бажання творити та невичерпне море ідей!'
        },

        'sergey-and-maksym': {
            header: 'Шановні Сергію та Максиме!',
            text: '19 серпня 2017 року Ми з Мариною створюємо нову сім’ю, а Вас запрошуємо стати важливою частиною свята – схопити найкращі моменти цього дня та зберегти їх у відео. Ми віримо, що наше велике кохання та Ваш талант зроблять все необхідне! До скорої зустрічі!',
        },

        'sheremet-family': {
            header: 'Любі наші Ольго та Олексійчику'
        },

        'ankush': {
            header: 'Dear Ankush!',
            text: englishText,
            thanksText: thanksTexts.englishText,
            thanksSignature: thanksSignature.english
        },

        'gourav': {
            header: 'Dear Gourav!',
            text: englishText,
            thanksText: thanksTexts.englishText,
            thanksSignature: thanksSignature.english
        },

        'surekha': {
            header: 'Dear Surekha!',
            text: englishText,
            thanksText: thanksTexts.englishText,
            thanksSignature: thanksSignature.english
        },

        'english': {
            header: 'Dear Friend!',
            text: englishText,
            thanksText: thanksTexts.englishText,
            thanksSignature: thanksSignature.english
        }
    };

    const personalInvite = Object.assign({}, defaultParams, invantation[getUrlParameter('invite')]);

    $('#invite-header').text(personalInvite.header);
    $('#invite-text').html(personalInvite.text);
    $('#thanks-text').html(personalInvite.thanksText + '<br><br><span id="rudnytskykh-signature">' + personalInvite.thanksSignature + '</span>');

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
