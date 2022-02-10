$(document).ready(function(){

    $('ul.tabs li').click(function(){
        const tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('ul.hashTabs li').click(function(){
        const tab_id = $(this).attr('data-tab');

        $('ul.hashTabs li').removeClass('hashcurrent');
        $('.hashtab-content').removeClass('hashcurrent');

        $(this).addClass('hashcurrent');
        $("#"+tab_id).addClass('hashcurrent');
    })

    $('.bannersButton').click(function (){


        if($('.banners').hasClass('buttonNow')){
            this.querySelector('i').style.transform='rotate(0)'
            $('.banners').removeClass('buttonNow')
        }else{
            this.querySelector('i').style.transform='rotateX(180deg)'
            $('.banners').addClass('buttonNow')
        }
    })

/*=============slide============================*/
    $('.hashtagText').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('#aro1_prev'),
        nextArrow: $('#aro1_next'),
        autoplaySpeed: 3000
    });

    $('.news-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 3000,
        prevArrow: $('.news-prev'),
        nextArrow: $('.news-next')
    });

    $('.bannerUl').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $('.main-banner').slick({
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.main-prev'),
        nextArrow: $('.main-next')
    });



    $('.play').click((event)=>{
        if ($('.play').hasClass('go')) {
            $('.play').removeClass('go');
            $('.news-slide').slick('slickPause');
        }else{
            $('.play').addClass('go');
            $('.news-slide').slick('slickPlay');
        }
    });

    covid();
})

let covid = async function(){
    let ServiceKey=
        'tgrquMVa46gZIWaEWSZue1Vja10fKnJguD/Ts7z3y6hS1j47DxNZl7YS0oV+KuyDkMKRzpewR0BvZw2hnQNHZg==';
    const endCreateDt = new Date();

    try {
        await axios({
            url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson`,
            method: 'GET',
            params: {
                ServiceKey,
                pageNo: 1,
                numOfRows: 10,
                startCreateDt: 20211231,
                endCreateDt
            },
        }).then(res => {
            console.log(res.data.response.body.items.item);
            // document.write(JSON.stringify(res));
            const data = res.data.response.body.items.item;
            document.querySelector('.temp1').innerText = data?.decideCnt||'';
            document.querySelector('.dead_cnt').innerText = data?.deathCnt||'';
        })
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};




/*var xhr = new XMLHttpRequest();
var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'; /!*URL*!/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'sviskwvob7iqWy+KPRYjuAiZJjOcf+38yPEtk7IyXaY7Iq1ryM836T3TKfJQaMk8eL3gJf9NLp4/TrpumRsPnA=='; /!*Service Key*!/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /!**!/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /!**!/
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310'); /!**!/
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200315'); /!**!/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');*/

