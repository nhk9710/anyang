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



/*=============slide============================*/
    $('.hashtagText').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.hash-prev'),
        nextArrow: $('.hash-next')
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
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: $('.banner-prev'),
        nextArrow: $('.banner-next')
    });

    $('.main-banner').slick({
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow: $('.main-prev'),
        nextArrow: $('.main-next')
    });

    $('.main-banner').on('afterChange', (event, slick, currentSlide) => {
        /*console.log(currentSlide);*/
        const hok2 = currentSlide+1;
        document.querySelector('.c_page').textContent = hok2;
    });



    $('.play').click(function(){
        if ($('.play').hasClass('go')) {
            $('.play').removeClass('go');
            $('.news-slide').slick('slickPause');
        }else{
            $('.play').addClass('go');
            $('.news-slide').slick('slickPlay');
        }
    });

    $('.banner_play').click(function(){
        if ($('.banner_play').hasClass('go')) {
            $('.banner_play').removeClass('go');
            $('.banner-slide').slick('slickPause');
        }else{
            $('.banner_play').addClass('go');
            $('.banner-slide').slick('slickPlay');
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
            const data = res.data.response.body.items.item;
            const d1 = data?.decideCnt;
            const d2 = data?.deathCnt;
            const decide = d1.toLocaleString('ko-KR');
            const death = d2.toLocaleString('ko-KR');
            document.querySelector('.temp1').innerHTML = decide||'';
            document.querySelector('.dead_cnt').innerHTML = death||'';
        })
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};


