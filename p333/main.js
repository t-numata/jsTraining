$(() => {
    const $weatherTag = $('.weather > p');
    const $locationTag = $('.location > p');
    $weatherTag.text('情報の取得中...');
    $locationTag.text('情報の取得中...');
    const TimeId = setInterval(
        reloadServerInfo($weatherTag, $locationTag),
        500 * 1000
    );
    function reloadServerInfo($weatherTag, $locationTag) {
        $.getJSON(
            'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
            data => {
                weatherData = data.forecasts;
                $weatherTag.text(weatherData[0].telop);
                $locationTag.text(data.location.city);
            }
        );
    }
});
/**
 * ajax通信について
 * このjsローカルで動かす際には、Access-Control-Allow-Originを回避してください
 * https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog
 *
 */
