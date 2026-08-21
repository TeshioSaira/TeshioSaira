var キャラ = {};
var 光円錐 = {};
var 基礎ステータス = {};
var メインステータス = {};
var サブステータス = {};
var ステータス = [
    {
        "base": {},
        "finally": {},
        "バフ": {}
    },
    {
        "base": {},
        "finally": {},
        "バフ": {}
    },
    {
        "base": {},
        "finally": {},
        "バフ": {}
    },
    {
        "base": {},
        "finally": {},
        "バフ": {}
    }
];
var 変数 = {};
var 選択データ = [
    {
        "キャラ": "ファイノン",
        "光円錐": "燃え盛る黎明のように",
        "遺物": {
            "頭部": {
                "遺物名": "ナビゲーターの深宇宙スコープ",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            },
            "手部": {
                "遺物名": "ナビゲーターの遊戯サイコロ",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            },
            "胴体": {
                "遺物名": "ナビゲーターの星図ユニフォーム",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            },
            "脚部": {
                "遺物名": "ナビゲーターの永巡ブーツ",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            },
            "次元界オーブ": {
                "遺物名": "バナダイスの中央広場",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            },
            "連結縄": {
                "遺物名": "バナダイスのミームケーブル",
                "サブステータス": [
                    ["防御力", 0, 1, 0],
                    ["会心率", 0, 0, 2],
                    ["会心ダメージ", 0, 1, 0],
                    ["HP割合", 0, 1, 0]
                ]
            }
        }
    }
];

function selectChara(num) {
    document.getElementById("tool_hsr_base_div").setAttribute("style", "display: none");
    document.getElementById("tool_hsr_select").setAttribute("style", "display: block");
    var select_title = document.getElementById("tool_hsr_select_title");
    select_title.textContent = num + "枠目のキャラクターを選択してください"
    var select_div = document.getElementById("tool_hsr_select_div");
    select_div.innerHTML = "";
    var charaList = Object.keys(キャラ);
    var selectedCharaList = [];
    for(var i = 0; i < 選択データ.length; i++){
        selectedCharaList[selectedCharaList.length] = 選択データ[i]["キャラ"];
    }
    for(var i = 0; i < charaList.length; i++){
        console.log(キャラ[charaList[i]]);
        var div = document.createElement("div");
        div.setAttribute("class", "tool_hsr_chara_div");
        var img_div = document.createElement("div");
        img_div.setAttribute("class", "tool_hsr_chara_img_div");
        div.appendChild(img_div);
        var img = document.createElement("img");
        img.setAttribute("class", "tool_hsr_chara_img");
        if(charaList[i] != "開拓者（壊滅）" && charaList[i] != "開拓者（存護）"){
            img.setAttribute("src", "../images/hsr/chara/" + charaList[i] + ".png");
        }else{
            img.setAttribute("src", "../images/hsr/chara/" + charaList[i] + ".gif");
        }
        if(selectedCharaList.indexOf(charaList[i]) != -1){
            img.setAttribute("style", "opacity: 0.33;");
            div.setAttribute("style", "position: relative;");
            var word = document.createElement("span");
            word.textContent = (selectedCharaList.indexOf(charaList[i]) + 1) + "枠目";
            word.setAttribute("class", "tool_hsr_wordOnImg");
            div.appendChild(word);
        }else{
            div.setAttribute("style", "cursor: pointer");
            div.setAttribute("onclick", "changeChara(" + num + ", '" + charaList[i] + "');");
        }
        img_div.appendChild(img);
        var p = document.createElement("p");
        p.setAttribute("class", "tool_hsr_chara_p");
        var img1 = document.createElement("img");
        img1.setAttribute("class", "tool_hsr_attributeImg");
        img1.setAttribute("src", "../images/hsr/attribute/" + キャラ[charaList[i]]["属性"] + ".jpeg");
        p.appendChild(img1);
        var span = document.createElement("span");
        span.textContent = "　" + charaList[i] + "　";
        p.appendChild(span);
        var img2 = document.createElement("img");
        img2.setAttribute("class", "tool_hsr_attributeImg");
        img2.setAttribute("src", "../images/hsr/destiny/" + キャラ[charaList[i]]["運命"] + ".png");
        p.appendChild(img2);
        if(selectedCharaList.indexOf(charaList[i]) != -1){
            img1.setAttribute("style", "opacity: 0.33;");
            img2.setAttribute("style", "opacity: 0.33;");
            span.setAttribute("style", "opacity: 0.33;");
        }
        div.appendChild(p);
        select_div.appendChild(div);
    }
}

function changeChara(num, charaName){
    選択データ[num-1]["キャラ"] = charaName;
    document.getElementById("tool_hsr_base_div").setAttribute("style", "display: block;");
    document.getElementById("tool_hsr_select").setAttribute("style", "display: none;");
    console.log(選択データ[num-1]);
    setList();
}

function statusDetail(){
    var trigger = document.getElementsByClassName("tool_hsr_statusDetail");
    if(document.getElementsByClassName("tool_hsr_sta_none").length > document.getElementsByClassName("tool_hsr_sta_block").length){
        while(0 < document.getElementsByClassName("tool_hsr_sta_none").length){
            document.getElementsByClassName("tool_hsr_sta_none")[0].setAttribute("class", "tool_hsr_sta_block");
        }
        for(var i = 0; i < trigger.length; i++){
            trigger[i].textContent = "↑閉じる";
        }
    }else{
        while(0 < document.getElementsByClassName("tool_hsr_sta_block").length){
            document.getElementsByClassName("tool_hsr_sta_block")[0].setAttribute("class", "tool_hsr_sta_none");
        }
        for(var i = 0; i < trigger.length; i++){
            trigger[i].textContent = "↓詳細を開く";
        }
    }
}

function setList(){
    const statusList = Object.keys(基礎ステータス);
    for(var i = 1; i < 2; i++){
        const chara = 選択データ[i-1]["キャラ"];
        if(chara != "開拓者（壊滅）" && chara != "開拓者（存護）"){
            document.getElementById(i + "_charaImg").setAttribute("src", "../images/hsr/chara/" + chara + ".png");
        }else{
            document.getElementById(i + "_charaImg").setAttribute("src", "../images/hsr/chara/" + chara + ".gif");
        }
        document.getElementById(i + "_charaAttribute").setAttribute("src", "../images/hsr/attribute/" + キャラ[chara]["属性"] + ".jpeg");
        document.getElementById(i + "_charaName").textContent = chara;
        document.getElementById(i + "_charaDestiny").setAttribute("src", "../images/hsr/destiny/" + キャラ[chara]["運命"] + ".png");
        document.getElementById(i + "_lightConeDestiny").setAttribute("src", "../images/hsr/destiny/" + キャラ[chara]["運命"] + ".png");

        var div_ステータス = document.getElementById(i + "_ステータス");
        div_ステータス.innerHTML = "";

        const typeList = ["星魂", "天賦", "追加能力", "秘技", "通常攻撃", "戦闘スキル", "必殺技", "必殺通常攻撃", "必殺戦闘スキル", "必殺必殺技"];
        for(var j = 0; j < typeList.length; j++){
            const div_type = document.getElementById(i + "_" + typeList[j]);
            div_type.innerHTML = "";
            const add_element = createVariableElement(typeList[j], i, キャラ[chara][typeList[j]]);
            console.log(add_element);
            if(add_element != ""){
                div_type.appendChild(add_element);
            }
        }
    }
    console.log(ステータス);
    setStatus();

    for(var i = 1; i < 2; i++){
        const chara = 選択データ[i-1]["キャラ"];
        var div_ステータス = document.getElementById(i + "_ステータス");
        for(var j = 0; j < statusList.length; j++){
            var p = document.createElement("p");
            if(j > 4){
                p.setAttribute("class", "tool_hsr_sta_block");
            }
            var span1 = document.createElement("span");
            span1.textContent = statusList[j] + "：";
            p.appendChild(span1);
            var span2 = document.createElement("span");
            span2.setAttribute("id", i + "_" + statusList[j]);
            if(キャラ[chara].ステータス?.[statusList[j]] == undefined){
                span2.textContent = 基礎ステータス[statusList[j]];
            }else{
                span2.textContent = キャラ[chara].ステータス?.[statusList[j]];
            }
            p.appendChild(span2);
            div_ステータス.appendChild(p);
        }
    }
    statusDetail();
}

function setStatus(){
    for(var i = 0; i < 選択データ.length; i++){
        var charaName = 選択データ[i]["キャラ"];
        ステータス[i]["base"] = 基礎ステータス;
    }
}

function createVariableElement(type, charaNum, jsons){
    console.log(type, charaNum, jsons);
    if(jsons == undefined){
        console.log(type);
        return "";
    }else if(jsons.length == 0){
        console.log(type);
        return "";
    }else{
        var div = document.createElement("div");
        for(var actionNum = 0; actionNum < jsons.length; actionNum++){
            var json = jsons[actionNum];
            var name = document.createElement("h3");
            name.textContent = json["名前"];
            div.appendChild(name);
            if(json["変数"] != undefined){
                for(var i = 0; i < json["変数"].length; i++){
                    const 変数データ = json["変数"][i];
                    var p1 = document.createElement("p");
                    var span1_1 = document.createElement("span");
                    span1_1.setAttribute("id", charaNum + "_" + type + "_変数_" + actionNum + "_" + i + "_名前");
                    span1_1.textContent = 変数データ["名前"];
                    var span1_2 = document.createElement("span");
                    span1_2.textContent = "：";
                    var span1_3 = document.createElement("span");
                    span1_3.setAttribute("id", charaNum + "_" + type + "_変数_" + actionNum + "_" + i + "_数");
                    span1_3.textContent = 変数データ["初期値"];
                    p1.appendChild(span1_1);
                    p1.appendChild(span1_2);
                    p1.appendChild(span1_3);
                    div.appendChild(p1);
                    var p2 = document.createElement("p");
                    p2.setAttribute("id", charaNum + "_" + type + "_変数_" + actionNum + "_" + i + "_詳細");
                    var small2 = document.createElement("small");
                    small2.textContent = 変数データ["詳細"];
                    p2.appendChild(small2);
                    div.appendChild(p2);
                    var input3 = document.createElement("input");
                    input3.setAttribute("class", "tool_hsr_cell_range");
                    input3.setAttribute("id", charaNum + "_" + type + "_変数_" + actionNum + "_" + i + "_入力");
                    input3.setAttribute("type", "range");
                    input3.setAttribute("min", 変数データ["最小値"]);
                    input3.setAttribute("max", 変数データ["最大値"]);
                    input3.setAttribute("value", 変数データ["初期値"]);
                    変数[変数データ["名前"]] = 変数データ["初期値"];
                    div.appendChild(input3);
                    var script4 = document.createElement("script");
                    script4.textContent = 'document.getElementById("' + charaNum + "_" + type + "_変数_" + actionNum + "_" + i + '_入力").addEventListener("input", (event) => {変数["' + 変数データ["名前"] + '"] = event.target.value; document.getElementById("'+ charaNum + "_" + type + "_変数_" + actionNum + "_" + i + '_数").textContent = 変数["' + 変数データ["名前"] + '"];})';
                    div.appendChild(script4);
                }
            }
            if(json["バフ"] != undefined){
                for(var i = 0; i < 4; i++){
                    if(actionNum == 0){
                        ステータス[i]["バフ"][charaNum + "_" + type] = [];
                    }
                    ステータス[i]["バフ"][charaNum + "_" + type][actionNum] = [];
                }
                for(var i = 0; i < json["バフ"].length; i++){
                    const バフデータ = json["バフ"][i];
                    if(バフデータ["to"] != "自身" && バフデータ["to"] != "全体"){
                        var p1 = document.createElement("p");
                        var select1 = document.createElement("select");
                        select1.setAttribute("id", charaNum + "_" + type + "_バフ_" + actionNum + "_" + i + "_対象");
                        for(var j = 1; j < 5; j++){
                            var option1 = document.createElement("option");
                            option1.setAttribute("value", j);
                            option1.textContent = j + "キャラ目";
                            if(j == 1){
                                option1.setAttribute("selected", true);
                            }
                            select1.appendChild(option1);
                        }
                        div.appendChild(select1);
                    }else if(バフデータ["to"] == "自身"){
                        ステータス[charaNum - 1]["バフ"][charaNum + "_" + type][actionNum][i] = {};
                        ステータス[charaNum - 1]["バフ"][charaNum + "_" + type][actionNum][i][バフデータ["type"]] = バフデータ["num"];
                    }else if(バフデータ["to"] == "全体"){
                        for(var j = 0; j < 4; j++){
                            ステータス[j]["バフ"][charaNum + "_" + type][actionNum][i] = {};
                            ステータス[j]["バフ"][charaNum + "_" + type][actionNum][i][バフデータ["type"]] = バフデータ["num"];
                        }
                    }
                }
            }
            if(json["ダメージ"] != undefined){
                var p3 = document.createElement("p");
                p3.textContent = "↓ 🔴 はターゲット↓";
                p3.setAttribute("style", "color: #e06c6c;");
                div.appendChild(p3);
                var select1 = document.createElement("select");
                select1.innerHTML = "<button><selectedcontent></selectedcontent></button>";
                for(var j = 1; j < 6; j++){
                    for(var k = 1; k <= j; k++){
                        var option1 = document.createElement("option");
                        option1.setAttribute("value", j + "_" + k);
                        var option1_text = "";
                        for(var l = 1; l <= j; l++){
                            if(l == k){
                                option1_text += " 🔴 ";
                            }else{
                                option1_text += " ⚫️ ";
                            }
                        }
                        option1.textContent = option1_text;
                        if(j == 5 && k == 3){
                            option1.setAttribute("selected", true);
                        }
                        select1.appendChild(option1);
                    }
                }
                div.appendChild(select1);
                for(var i = 0; i < json["ダメージ"].length; i++){
                    var p1 = document.createElement("p");
                    p1.textContent = json["ダメージ"][i]["攻撃範囲"];
                    p1.setAttribute("style", "color: #e06c6c;");
                    div.appendChild(p1);
                    var p2 = document.createElement("p");
                    p2.setAttribute("id", charaNum + "_" + type + "_変数_" + actionNum + "_" + i + "_ダメージ");
                    p2.textContent = "--ダメージ";
                    p2.setAttribute("style", "color: #e06c6c;");
                    div.appendChild(p2);
                }
            }
        }
        return div;
    }
}

function subStatusAuto(kind, lv, num){
    var fullStatus = サブステータス[kind] / 10;
    var nanoStatus = fullStatus / 10;
    var searchStatus = nanoStatus * 10 * (lv + 1);
    var ten = 0;
    for(var i = 1; (fullStatus * (10 ** i)) < 10; i++){
        ten = i;
    }
    console.log(ten);
    var minus = 0;
    for(var i = 0; i < 7; i ++){
    }
    for(var i = 1; Math.trunc((searchStatus - (nanoStatus * i)) * (10 ** ten)) >= num * (10 ** ten); i++){
        minus = i;
    }
    console.log(minus);
    var ans = [0, 0, 0];
    while(minus > 1){
        minus -= 2;
        ans[0]++;
    }
    if(minus >= 1){
        ans[1]++;
    }
    ans[2] = lv + 1 - ans[0] - ans[1];
    return ans;
}




window.addEventListener("load", async (event) => {
    const re_キャラ = await fetch("../json/tool_hsr/キャラ.json");
    キャラ = await re_キャラ.json();
    const re_光円錐 = await fetch("../json/tool_hsr/光円錐.json");
    光円錐 = await re_光円錐.json();
    const re_基礎ステータス = await fetch("../json/tool_hsr/基礎ステータス.json");
    基礎ステータス = await re_基礎ステータス.json();
    const re_メインステータス = await fetch("../json/tool_hsr/メインステータス.json");
    メインステータス = await re_メインステータス.json();
    const re_サブステータス = await fetch("../json/tool_hsr/サブステータス.json");
    サブステータス = await re_サブステータス.json();
    setList();
});