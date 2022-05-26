function setPage() {
    var html = document.getElementsByTagName('html')[0];
    var deviceWidth = document.documentElement.clientWidth;
    var scale = deviceWidth / 750;//psd图上的宽度
    html.style.fontSize = scale * 100 + 'px';
}

setPage();

window.onresize = function () {
    setPage();
}
