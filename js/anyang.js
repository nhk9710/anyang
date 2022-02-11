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

    $('.main-banner').on('afterChange', (event, slick, currentSlide) => {
        /*console.log(currentSlide);*/
        const hok2 = currentSlide+1;
        document.querySelector('.c_page').textContent = hok2;
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


   function hotest(){
        this.querySelector('.hiddenNav').style.opacity=1;
        this.querySelector('.hiddenNav').style.height='100px';
    }

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
            document.querySelector('.temp1').innerHTML = data?.decideCnt||'';
            document.querySelector('.dead_cnt').innerHTML = data?.deathCnt||'';
        })
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};


