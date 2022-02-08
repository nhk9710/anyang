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

})

let covid = async function(){
    let ServiceKey= 'tgrquMVa46gZIWaEWSZue1Vja10fKnJguD%2FTs7z3y6hS1j47DxNZl7YS0oV%2BKuyDkMKRzpewR0BvZw2hnQNHZg%3D%3D';
    const endCreateDt = new Date();

try {
    await axios({
        url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson`,
        method: 'GET',
        params: {
            ServiceKey,
            pageNo: 1,
            numOfRows: 10,
            startCreateDt: 20200310,
            endCreateDt
        },
    }).then(res => {
        console.log(res);
        // document.write(JSON.stringify(res));
        document.querySelector('.coronaTable > .coronaAlarm .temp1').innterText = res?.DECIDE_CNT
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

