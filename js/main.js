function nyadev_screen_set(num) {
    console.log(num)
    list_pages = document.getElementsByClassName("nyadev_page_ch");
    for (let one_page of list_pages) {
        one_page.classList.add("nyadev_hiden");
    }
    document.getElementById("page_set_"+num).classList.remove("nyadev_hiden");
    list_pages = document.getElementsByClassName("nyadev_menu_item");
    for (let one_page of list_pages) {
        one_page.classList.remove("nyadev_menu_selectet");
    }
    if (num != "main") {
        document.getElementById("menu_set_"+num).classList.add("nyadev_menu_selectet");
    }
}

function makeHttpObject() {
    try {return new XMLHttpRequest();}
    catch (error) {}
    try {return new ActiveXObject("Msxml2.XMLHTTP");}
    catch (error) {}
    try {return new ActiveXObject("Microsoft.XMLHTTP");}
    catch (error) {}
    throw new Error("Could not create HTTP request object.");
}
function test(){
    var request = makeHttpObject();
    request.open("GET", "https://fgg.viryt.xyz/", true);
    request.send(null);
    request.onreadystatechange = function() {
    if (request.readyState == 4)
        alert(request.responseText);
    };
}