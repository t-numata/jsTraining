$(() => {
    const $param = $('p');
    console.log($param.length);
    console.log(typeof $param);
    console.log($param.length);
    console.log($param instanceof $);
    console.log($param instanceof jQuery);

    // すべてのp要素の文字列を変更する
    $('p').text('更新されました！');
    $('p')
        .eq(2)
        .html('<spam>HTML要素を更新しました!</spam>');
});
