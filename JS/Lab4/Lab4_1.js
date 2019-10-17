var photoArr = new Array(4);
photoArr["tokyo1"] = new Image(300, 300);
photoArr["tokyo1"].src = 'tokyo1.jpg';

photoArr["tokyo2"] = new Image(300, 300);
photoArr["tokyo2"].src = 'tokyo2.jpg';

photoArr["tokyo3"] = new Image(300, 300);
photoArr["tokyo3"].src = 'tokyo3.jpg';

photoArr["tokyo4"] = new Image(300, 300);
photoArr["tokyo4"].src = 'tokyo4.jpg';

var index, imgHold;

function photoFunc() {
    index = document.getElementById('photoSelect').value;
    imgHold = document.getElementById('imgBox');
    document.getElementById('imgBox').src = photoArr[index].src;
}
