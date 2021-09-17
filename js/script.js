// возвращает cookie если есть или undefined
function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

// уcтанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {

    setCookie(name, null, { expires: -1 })

}


$(document).ready(function () {
    $('.langu').click(function (e) {
        e.preventDefault()
        var a_link = $(this).text();
        $('.dropbtn').html(a_link)
    })

    function langLoad(value) {
        if (getCookie('set_lang') != null) {
            deleteCookie('set_lang');
        }
        setCookie('set_lang', value, { expires: 3600000 });
    }

    switch (getCookie('set_lang')) {
        case '1':
            langEng();
            $('.dropbtn').html('ENG');
            break;
        case '3':
            langRus();
            $('.dropbtn').html('РУС');
            break;
        case '2':
            langUkr();
            $('.dropbtn').html('УКР');
            break;
    
    }

    function langEng () {
        $('body').addClass('lang_eng-active')
        $('body').removeClass('lang_rus-active')
        $('body').removeClass('lang_ukr-active')
        $('form #name').attr("placeholder", "Your name");
        $('form #mail').attr("placeholder", "Your Email");
        $('form #massage').attr("placeholder", "Message");
        $('form #button').attr("value", "LEAVE APPLICATION");
        $('.block_complited_form div p').html("Thanks! \<br>\ The application has been successfully sent.");
        $('#lang_specif').html("Specifications");
        $('#lang_panorama').html("Panorama");
        $('#lang_news').html("News");
        $('#lang_map').html("Map");
        
    }

    function langUkr () {
        $('body').addClass('lang_ukr-active')
        $('body').removeClass('lang_rus-active')
        $('body').removeClass('lang_eng-active')
        $('form #name').attr("placeholder", "Ваше ім'я");
        $('form #mail').attr("placeholder", "Ваш Email");
        $('form #massage').attr("placeholder", "Повідомлення");
        $('form #button').attr("value", "Залишити заявку");
        $('.block_complited_form div p').html("Дякуємо! \<br>\ Заявка успішно відправлена.");
        $('#lang_specif').html("Характеристики");
        $('#lang_panorama').html("Панорама");
        $('#lang_news').html("Новини");
        $('#lang_map').html("Карта");
    }

    function langRus () {
        $('body').addClass('lang_rus-active')
        $('body').removeClass('lang_eng-active')
        $('body').removeClass('lang_ukr-active')
        $('form #name').attr("placeholder", "Ваше имя");
        $('form #mail').attr("placeholder", "Ваш Email");
        $('form #massage').attr("placeholder", "Сообщение");
        $('form #button').attr("value", "ОСТАВИТЬ ЗАЯВКУ");
        $('.block_complited_form div p').html("Спасибо! \<br>\ Заявка успешно отправлена.");
        $('#lang_specif').html("Характеристики");
        $('#lang_panorama').html("Панорама");
        $('#lang_news').html("Новости");
        $('#lang_map').html("Карта");
    }

    $('.lang_eng').click(function () {
        langEng();
        langLoad(1);
    })
    $('.lang_rus').click(function () {
        langRus();
        langLoad(3);
    })
    $('.lang_ukr').click(function () {
        langUkr();
        langLoad(2);
    })


    $('.slider_news_index .slick-prev').addClass('active-btn')

    $('.slider_news_index .slick-next').click(function(){
        $('.slider_news_index .slick-prev').removeClass('active-btn');
        $('.slider_news_index .slick-next').addClass('active-btn');
    })
    $('.slider_news_index .slick-prev').click(function(){
        $('.slider_news_index .slick-next').removeClass('active-btn');
        $('.slider_news_index .slick-prev').addClass('active-btn');
    })




    $('.langMob .box').click(function(){
        if( !$(this).hasClass('_active_lang')){
            $(this).addClass('_active_lang')
            $(this).find('.dropdown-content').css("display","block")
        }else{
            $(this).removeClass('_active_lang')
            $(this).find('.dropdown-content').css("display","none")
        }
    })






    $('.form').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('main_form')
        var name = el.name.value;
        var mail = el.mail.value;
        var massage = el.massage.value
        var fail = "";
        var acept = "Форма заполнена";
        
        if(name == "" ||  mail == "" || massage == "" )
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";
        
        else if (massage.length < 10)
        fail = "Вопрос введен некорректно"
        
        console.log("Name:" + " " + name + ";")
        console.log("Mail"  + " " + mail + ";");
        console.log("massage"  + " " + massage + ";");
        if( fail != ""){
            $("#error").fadeIn()
            $("#acept").html("")
            
        }else{
            $("#error").fadeOut()
            $("#acept").fadeIn()
            $("#error").html("")
            setTimeout(() => {
                $('#main_form').css("display","none")
                $('.block_complited_form').css("display","block")
                
            }, 1000);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }















})