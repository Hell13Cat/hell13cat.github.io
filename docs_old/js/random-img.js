function setimg() {
    url_req = "https://nekos.life/api/v2/img/neko";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url_req, false ); // false for synchronous request
    xmlHttp.send( null );
    datas =  JSON.parse(xmlHttp.responseText);
    img_url = datas["url"];
    document.getElementById('maindiv').style.background = '#000000 url('+img_url+') repeat';
}