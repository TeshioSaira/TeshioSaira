var account_move = false;
var account_startTime = 0;
var account_count = 0;

window.onload = firstScript;

function firstScript(){
    account_count = document.getElementsByClassName('account_icon_img').length;
    modeSelect(0);
}

function modeSelect(mode){
    var infrontInformationItem = document.getElementsByClassName('infrontInformationItem');
    for(var i = 0; i < infrontInformationItem.length; i++){
        if(mode == i){
            infrontInformationItem[i].removeAttribute('style');
        }else{
            infrontInformationItem[i].removeAttribute('style');
            infrontInformationItem[i].setAttribute('style', 'display: none;');
        }
    }
    if(mode == 0){
        account_move = true;
        account_startTime = new Date().getTime();
    }
}

function openMarshmallow(){
    window.open("https://marshmallow-qa.com/k041ew722thw37j?t=C9ae0S&utm_medium=url_text&utm_source=promotion", "_blank");
}

function openTwitch(){
    window.open("https://www.twitch.tv/teshiosaira", "_blank");
}

function openYouTube(){
    window.open("https://www.youtube.com/@TeshioSaira", "_blank");
}

setInterval(() => {
    var displayWidth = window.innerWidth;
    var displayHeight = window.innerHeight;
    if(account_move){
        var account_time = new Date().getTime() - account_startTime;
        for(var i = 0; i < account_count; i++){
            var radian = Math.PI * ((0.5 + (i + 1) / (account_count + 1)) * account_time / 2000 + 0.5);
            var top = (displayHeight / 2 - Math.sin(radian) * displayWidth / 9 - displayWidth * 0.075) / displayHeight * 100;
            var left = (1 + Math.cos(radian)) * 50 - 7.5;
            var opacity = 1;
            if(radian < Math.PI){
                opacity = 0.5;
            }
            document.getElementsByClassName('account_icon_img')[i].removeAttribute('style');
            document.getElementsByClassName('account_icon_img')[i].setAttribute('style', 'top: ' + top + '%; left: ' + left + '%; opacity: ' + opacity + ';');
        }
        if(account_time >= 2000){
            account_move = false;
        }
    }
}, 10);