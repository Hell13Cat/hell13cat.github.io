function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function mainbg() {
    let bg_list = ["bg/1.jpg", "bg/2.jpg", "bg/3.jpg"];
    num_bg = getRandomInt(0, 2);
    bg_select = bg_list[num_bg]
    document.getElementById('page').style.background = '#000000 url('+bg_select+') repeat';
    document.getElementById('page').style.backgroundSize = '120%';
}