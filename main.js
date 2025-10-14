var account_move = false;
var account_move_return = false;
var informationChanger_disappear = false;
var informationChanger_disappear_fitst = false;
var account_startTime = 0;
var informationChanger_startTime = 0;
var account_count = 0;
var informationChanger_count = 0;
var loadStart_time = 0;

window.onload = firstScript;

function firstScript(){
    account_count = document.getElementsByClassName('account_icon_img').length;
    informationChanger_count = document.getElementsByClassName('informationChangerItem').length;
    modeSelect(0);
}

function loadStart(){
    loadStart_time = new Date().getTime();
}

function modeSelect(mode){
    loadStart();
    var displayWidth = window.outerWidth;
    var infrontInformationItem = document.getElementsByClassName('infrontInformationItem');
    for(var i = 0; i < infrontInformationItem.length; i++){
        if(infrontInformationItem[i].getAttribute('style').split('animation').length > 1){
            if(infrontInformationItem[i].getAttribute('style').split('disappear').length > 1){
                infrontInformationItem[i].removeAttribute('style');
                infrontInformationItem[i].setAttribute('style', 'display: none;');
            }else{
                infrontInformationItem[i].removeAttribute('style');
                infrontInformationItem[i].setAttribute('style', 'animation: 1s ease-out forwards infrontInformationItem_disappear;');
            }
        }
        if(mode == i){
            infrontInformationItem[i].removeAttribute('style');
            infrontInformationItem[i].setAttribute('style', 'animation: 1s ease-out forwards infrontInformationItem_appear;');
        }
    }
    var informationChangerItem = document.getElementsByClassName('informationChangerItem');
    for(var i = 0; i < informationChangerItem.length; i++){
        if(i + 1 == mode){
            var width = informationChangerItem[i].clientWidth / displayWidth * 100;
            var attribute = informationChangerItem[i].getAttribute('style');
            informationChangerItem[i].removeAttribute('style');
            if(i < informationChangerItem.length / 2){
                informationChangerItem[i].setAttribute('style', attribute + ' width: ' + width + '%; animation: 1s ease-out forwards informationChangerItem_l_appear;');
            }else{
                informationChangerItem[i].setAttribute('style', attribute + ' width: ' + width + '%; animation: 1s ease-out forwards informationChangerItem_r_appear;');
            }
            informationChangerItem[i].children[0].removeAttribute('style');
            informationChangerItem[i].children[0].setAttribute('style', 'animation: 1s ease-out forwards informationChangerItem_p_appear;');
        }else{
            var attribute = informationChangerItem[i].getAttribute('style');
            informationChangerItem[i].removeAttribute('style');
            informationChangerItem[i].setAttribute('style', attribute + ' animation: 1s ease-out forwards informationChangerItem_disappear;');
            informationChangerItem[i].children[0].removeAttribute('style');
        }
    }
    if(mode == 0){
        account_move = true;
        account_startTime = new Date().getTime();
    }else{
        account_move_return = true;
        account_startTime = new Date().getTime();
    }
}

function openMarshmallow(){
    if(!account_move){
        window.open("https://marshmallow-qa.com/k041ew722thw37j?t=C9ae0S&utm_medium=url_text&utm_source=promotion", "_blank");
    }
}

function openTwitch(){
    if(!account_move){
        window.open("https://www.twitch.tv/teshiosaira", "_blank");
    }
}

function openYouTube(){
    if(!account_move){
        window.open("https://www.youtube.com/@TeshioSaira", "_blank");
    }
}

function returnHome(){
    if(!informationChanger_disappear){
        loadStart();
        informationChanger_disappear_fitst = true;
        informationChanger_disappear = true;
        informationChanger_startTime = new Date().getTime();
    }
}

setInterval(() => {
    var displayWidth = window.outerWidth;
    var displayHeight = window.outerHeight;
    if(account_move){
        var account_time = new Date().getTime() - account_startTime;
        for(var i = 0; i < account_count; i++){
            var radian = Math.PI * ((0.5 + (i + 1) / (account_count + 1)) * Math.sqrt(1 - Math.pow(1 - account_time / 1000, 2)) + 0.5);
            var top = (displayHeight / 2 - Math.sin(radian) * displayWidth / 20 - displayWidth * 0.075) / displayHeight * 100;
            var left = (1 + Math.cos(radian)) * 50 - 7.5;
            var opacity = 1;
            var scale = Math.pow(Math.sin(radian), 2) * 1.2;
            if(Math.sin(radian) > 0){
                scale = Math.pow(1 - Math.sin(radian), 2) / 4;
            }
            if(radian % (Math.PI * 2) < Math.PI){
                opacity = 1 - Math.sin(radian);
            }
            document.getElementsByClassName('account_icon_img')[i].removeAttribute('style');
            document.getElementsByClassName('account_icon_img')[i].setAttribute('style', 'top: ' + top + '%; left: ' + left + '%; opacity: ' + opacity + '; transform: scale(' + scale + ');');
        }
        for(var i = 0; i < informationChanger_count; i++){
            var width = document.getElementsByClassName('informationChangerItem')[i].clientWidth / displayWidth * 100;
            if(i < informationChanger_count / 2){
                var radian = Math.PI * (1 - (1 + i) / (1 + informationChanger_count) * Math.sqrt(1 - Math.pow(1 - account_time / 1000, 2)));
                var top = ((displayHeight / 2 - displayWidth * 0.125) * (1 - Math.sin(radian))) / displayHeight * 100;
                var left = (1 + Math.cos(radian)) * 45 - width / 2 + 2;
                var opacity = radian / (Math.PI * 0.1);
                document.getElementsByClassName('informationChangerItem')[i].removeAttribute('style');
                document.getElementsByClassName('informationChangerItem')[i].setAttribute('style', 'top: ' + top + '%; left: ' + left + '%; opacity: ' + opacity + ';');
            }else{
                var radian = Math.PI * (1 - (informationChanger_count - i) / (1 + informationChanger_count) * Math.sqrt(1 - Math.pow(1 - account_time / 1000, 2)));
                var top = ((displayHeight / 2 - displayWidth * 0.125) * (1 - Math.sin(radian))) / displayHeight * 100;
                var right = (1 + Math.cos(radian)) * 45 - width / 2 + 2;
                var opacity = radian / (Math.PI * 0.1);
                document.getElementsByClassName('informationChangerItem')[i].removeAttribute('style');
                document.getElementsByClassName('informationChangerItem')[i].setAttribute('style', 'top: ' + top + '%; right: ' + right + '%; opacity: ' + opacity + ';');
            }
        }
        if(account_time >= 1000){
            account_move = false;
        }
    }
    if(account_move_return){
        var account_time = new Date().getTime() - account_startTime;
        for(var i = 0; i < account_count; i++){
            var radian = Math.PI * ((0.5 + (i + 1) / (account_count + 1)) + (0.5 + (account_count - i) / (account_count + 1)) * Math.sqrt(1 - Math.pow(1 - account_time / 1000, 2)) + 0.5);
            var top = (displayHeight / 2 - Math.sin(radian) * displayWidth / 20 - displayWidth * 0.075) / displayHeight * 100;
            var left = (1 + Math.cos(radian)) * 50 - 7.5;
            var opacity = 1;
            var scale = (3 - Math.sin(radian)) / 4;
            if(radian % (Math.PI * 2) < Math.PI){
                opacity = 0.5;
            }
            document.getElementsByClassName('account_icon_img')[i].removeAttribute('style');
            document.getElementsByClassName('account_icon_img')[i].setAttribute('style', 'top: ' + top + '%; left: ' + left + '%; opacity: ' + opacity + '; transform: scale(' + scale + ');');
        }
        if(account_time >= 1000){
            account_move_return = false;
            var infrontInformationItem = document.getElementsByClassName('infrontInformationItem');
            infrontInformationItem[0].setAttribute('style', 'display: none;');
        }
    }
    if(informationChanger_disappear){
        var informationChangerItem = document.getElementsByClassName('informationChangerItem');
        var informationChanger_disappear_time = new Date().getTime() - informationChanger_startTime;
        var now_style = "";
        for(var i = 0; i < informationChangerItem.length; i++){
            now_style = informationChangerItem[i].getAttribute('style');
            if(now_style.split('_appear').length > 1){
                if(informationChanger_disappear_fitst){
                    now_style = now_style.split(' opacity')[0] + ' width' + now_style.split(' opacity')[1].split('; width')[1];
                    informationChanger_disappear_fitst = false;
                }else{
                    now_style = now_style.split(' opacity')[0];
                }
                var opacity = (1000 - informationChanger_disappear_time) / 1000;
                informationChangerItem[i].removeAttribute('style');
                informationChangerItem[i].setAttribute('style', now_style + ' opacity: ' + opacity + ';');
                if(informationChanger_disappear_time >= 1000){
                    informationChanger_disappear = false;
                    informationChangerItem[i].setAttribute('style', 'display: none;');
                }
            }
        }
        if(informationChanger_disappear_time >= 1000){
            informationChanger_disappear = false;
            modeSelect(0);
        }
    }
    if(loadStart_time + 1000 > new Date().getTime()){
        document.getElementById('loading').removeAttribute('style');
    }else{
        if(document.getElementById('loading').getAttribute('style') != 'display: none;'){
            document.getElementById('loading').removeAttribute('style');
            document.getElementById('loading').setAttribute('style', 'display: none;');
        }
    }
}, 10);