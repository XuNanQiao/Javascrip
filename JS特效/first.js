var isIE = (document.all && document.getElementById && !window.opera) ? true : false;
var isMozilla = (!document.all && document.getElementById && !window.opera) ? true : false;
var seturl = 'url(#default#homepage)';
var weburl = window.location.href;
var webname = document.title;
 
function setpage() {
    if(isMozilla){
        try {netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");} 
        catch (e){alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ��[signed.applets.codebase_principal_support]����Ϊ'true'");}
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',weburl);
    }
    if(isIE){
        this.homepage.style.behavior=seturl;this.homepage.sethomepage(weburl); 
    }
}

function addpage() {
    if (isMozilla) {
        if (document.all) { window.external.addFavorite(weburl, webname); }
        else if (window.sidebar) { window.sidebar.addPanel(webname, weburl, ""); }
    }
    if (isIE) { window.external.AddFavorite(weburl, webname); } 
}


function selectTag(showContent, selfObj) {
    // ������ǩ
    var tag = document.getElementById("tags").getElementsByTagName("li");
    var taglength = tag.length;
    for (i = 0; i < taglength; i++) {
        tag[i].className = "";
    }
    selfObj.parentNode.className = "selectTag";
    // ��������
    for (i = 0; j = document.getElementById("tagContent" + i); i++) {
        j.style.display = "none";
    }
    document.getElementById(showContent).style.display = "block";
}

function change(flag) {
    var t1 = document.getElementById("ti1");
    var t2 = document.getElementById("ti2");
    var t3 = document.getElementById("ti3");
    var t4 = document.getElementById("ti4");
    var t5 = document.getElementById("ti5");
    var t6 = document.getElementById("ti6");
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var table4 = document.getElementById("table4");
    var table5 = document.getElementById("table5");
    var table6 = document.getElementById("table6");
    switch (flag) {
        case 1: t1.style.backgroundImage = "url(image/libian1.jpg)"; t2.style.backgroundImage = "url(image/lidi2.jpg)"; t3.style.backgroundImage = "url(image/lidi3.jpg)"; t4.style.backgroundImage = "url(image/lidi4.jpg)"; t5.style.backgroundImage = "url(image/lidi5.jpg)"; t6.style.backgroundImage = "url(image/lidi6.jpg)";
            table1.style.display = ""; table2.style.display = "none"; table3.style.display = "none"; table4.style.display = "none"; table5.style.display = "none"; table6.style.display = "none";
            break;
        case 2: t2.style.backgroundImage = "url(image/libian2.jpg)"; t1.style.backgroundImage = "url(image/lidi1.jpg)"; t3.style.backgroundImage = "url(image/lidi3.jpg)"; t4.style.backgroundImage = "url(image/lidi4.jpg)"; t5.style.backgroundImage = "url(image/lidi5.jpg)"; t6.style.backgroundImage = "url(image/lidi6.jpg)";
            table1.style.display = "none"; table2.style.display = "";  table3.style.display = "none"; table4.style.display = "none"; table5.style.display = "none"; table6.style.display = "none";
            break;
        case 3: t3.style.backgroundImage = "url(image/libian3.jpg)"; t1.style.backgroundImage = "url(image/lidi1.jpg)"; t2.style.backgroundImage = "url(image/lidi2.jpg)"; t4.style.backgroundImage = "url(image/lidi4.jpg)"; t5.style.backgroundImage = "url(image/lidi5.jpg)"; t6.style.backgroundImage = "url(image/lidi6.jpg)";
            table1.style.display = "none"; table2.style.display = "none"; table3.style.display = ""; table4.style.display = "none"; table5.style.display = "none"; table6.style.display = "none";
                break;
        case 4: t4.style.backgroundImage = "url(image/libian4.jpg)"; t1.style.backgroundImage = "url(image/lidi1.jpg)"; t2.style.backgroundImage = "url(image/lidi2.jpg)"; t3.style.backgroundImage = "url(image/lidi3.jpg)"; t5.style.backgroundImage = "url(image/lidi5.jpg)"; t6.style.backgroundImage = "url(image/lidi6.jpg)";
            table1.style.display = "none"; table2.style.display = "none"; table3.style.display = "none"; table4.style.display = ""; table5.style.display = "none"; table6.style.display = "none";
                break;
        case 5: t5.style.backgroundImage = "url(image/libian5.jpg)"; t1.style.backgroundImage = "url(image/lidi1.jpg)"; t2.style.backgroundImage = "url(image/lidi3.jpg)"; t3.style.backgroundImage = "url(image/lidi3.jpg)"; t4.style.backgroundImage = "url(image/lidi4.jpg)"; t6.style.backgroundImage = "url(image/lidi6.jpg)";
            table1.style.display = "none"; table2.style.display = "none"; table3.style.display = "none"; table4.style.display = "none"; table5.style.display = ""; table6.style.display = "none";
                break;
        case 6: t6.style.backgroundImage = "url(image/libian6.jpg)"; t1.style.backgroundImage = "url(image/lidi1.jpg)"; t2.style.backgroundImage = "url(image/lidi3.jpg)"; t3.style.backgroundImage = "url(image/lidi3.jpg)"; t4.style.backgroundImage = "url(image/lidi4.jpg)"; t5.style.backgroundImage = "url(image/lidi5.jpg)";
            table1.style.display = "none"; table2.style.display = "none"; table3.style.display = "none"; table4.style.display = "none"; table5.style.display = "none"; table6.style.display = "";
                break;
    }
}