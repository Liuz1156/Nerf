var column1Circles = [];
var column2Circles = [];
var column3Circles = [];

var circles = document.querySelectorAll("#content div[id^='circle']");
circles.forEach(function(circle) {
    var rect = circle.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;

    if (circle.parentElement.id === 'column1') {
        column1Circles.push({ x: centerX, y: centerY });
    } else if (circle.parentElement.id === 'column2') {
        column2Circles.push({ x: centerX, y: centerY });
    } else if (circle.parentElement.id === 'column3') {
        column3Circles.push({ x: centerX, y: centerY });
    }
});

function draw1(){
    for (var i = 0; i < column1Circles.length; i++) {
        var circle1 = column1Circles[i];
        // console.log("Circle1", i+1, ":", circle1);

        for (var j = 0; j < column2Circles.length; j++) {
            var circle2 = column2Circles[j];
            // console.log("Circle2", j+1, ":", circle2);

            createLine(circle1.x, circle1.y, circle2.x, circle2.y)
        }

    }
    var c1 = document.querySelector("#column1");

    var divs = c1.querySelectorAll("div");

    divs.forEach(function(div) {
        div.style.backgroundColor = "#a7eaea"; // 设置背景颜色为红色，您可以根据需要更改颜色值
    });
    var c2 = document.querySelector("#column2");

    var divs2 = c2.querySelectorAll("div");

    divs2.forEach(function(div2) {
        div2.style.backgroundColor = "#4eeec6"; // 设置背景颜色为红色，您可以根据需要更改颜色值
    });
}
function draw2(){
    for (var a = 0; a < column2Circles.length; a++) {
        var circle3 = column2Circles[a];
        // console.log("Circle1", a+1, ":", circle3);

        for (var b = 0; b < column3Circles.length; b++) {
            var circle4 = column3Circles[b];
            // console.log("Circle2", b+1, ":", circle4);

            createLine(circle3.x, circle3.y, circle4.x, circle4.y)
        }

    }
    var c3 = document.querySelector("#column3");

    var divs = c3.querySelectorAll("div");

    divs.forEach(function(div) {
        div.style.backgroundColor = "#faedae"; // 设置背景颜色为红色，您可以根据需要更改颜色值
    });
}

// -------------------------------------- 画线的两个核心函数
// 在指定位置绘制一个点
function createPointer(x, y) {
    var pointer = document.createElement("div");
    pointer.id = "pointer";
    pointer.style.width = "3px";
    pointer.style.height = "3px";
    pointer.style.position = "absolute";
    pointer.style.background = "#333333";
    pointer.style.opacity = "0.8"
    pointer.style.borderRadius = "50%";
    pointer.style.top = y + "px";
    pointer.style.left = x + "px";
    pointer.style.transition = "opacity 1.5s";

    document.body.appendChild(pointer);

    // 使用 setTimeout 延迟添加类名，以触发过渡动画
    setTimeout(function() {
        pointer.classList.add("show");
    }, 10);
}

// createPointer(100, 100);


// 两点之间画线
// for(var )
function createLine(aX, aY, bX, bY) {
    createPointer(aX, aY);
    createPointer(bX, bY);
    // 计算出倾斜角
    var tX, tY;
    //
    var rX, rY;
    if (aX < bX) { // b点在a点的右边
        tX = bX - aX;
        rX = 1;
    } else { // b点在a点的左边
        tX = aX - bX;
        rX = -1;
    }
    if (aY < bY) { // b点在a点的下面
        tY = bY - aY;
        rY = 1;
    } else {
        tY = aY - bY;
        rY = -1;
    }
    var k = tY / tX; // 角度比
    // 绘制直线
    var maxX = Math.abs(aX - bX);
    var maxY = Math.abs(aY - bY);
    if (maxX > maxY) {
        for(var i=1; i < maxX; i+=5) {
            var tempY = i * k;
            createPointer(aX + i * rX, aY + tempY * rY);
        }
    } else {
        for(var i=1; i < maxY; i+=5) {
            var tempX = i / k;
            createPointer(aX + tempX * rX, aY + i * rY);
        }
    }
}

var card = document.getElementById('card');
var test = document.getElementById('test');
var pointer = document.getElementById("pointer")

card.addEventListener('click', function() {
    if (card.classList.contains('move-out')) {
        card.classList.remove('move-out');
        test.style.opacity = 0;
        // pointer.style.opacity = 0;
        test.style.transition = "all 0.3s ease-in-out";
        test.style.transitionDelay = "0s";
    } else {
        card.classList.add('move-out');
        test.style.opacity = 1;
        // pointer.style.opacity = 1;
        test.style.transition = "all 0.3s ease-in-out";
        test.style.transitionDelay = "0.7s";
    }
});

var sliders = document.querySelectorAll('.slider');
var sliderValues = new Map();
var total = 0;

sliders.forEach(function(slider, index) {
    var thumb = slider.querySelector('.slider-thumb');
    var value = 0;

    thumb.addEventListener('mousedown', startDrag);
    thumb.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        e.preventDefault();
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
    }

    function drag(e) {
        var sliderRect = slider.getBoundingClientRect();
        var min = 0;
        var max = 100;
        var offsetX = 0;

        if (e.type === 'mousemove') {
            offsetX = e.clientX - sliderRect.left;
        } else if (e.type === 'touchmove') {
            offsetX = e.touches[0].clientX - sliderRect.left;
        }

        if (offsetX < 0) {
            offsetX = 0;
        } else if (offsetX > sliderRect.width) {
            offsetX = sliderRect.width;
        }

        var percentage = (offsetX / sliderRect.width) * 100;
        thumb.style.left = offsetX - (thumb.offsetWidth / 2) + 'px';

        value = Math.round((percentage / 100) * (max - min) + min);
    }

    function stopDrag() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);

        sliderValues.set(index, value);
        console.log('Slider', index, 'Value:', value);

        if (sliderValues.size === sliders.length) {
            console.log('All Slider Values:', sliderValues);
            total = sliderValues.get(0)+ sliderValues.get(1)+ sliderValues.get(2)+sliderValues.get(3);
            console.log("total: "+total);
        }else {
            // alert("请输入所有特征值！")
        }
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var ai = document.getElementById("ai");
var header = document.getElementById("header")

ai.addEventListener("click", async function () {
    if (sliderValues.size != sliders.length){
        alert("请输入所有特征值！");
    }else {
        if (total !== 0) {
            draw1();
            await sleep(1000); // 等待1秒钟
            draw2();
            if (total >= 200){
                console.log("020202")
                header.style.backgroundImage = "url('/img/test01_s.jpg')"
            }else {
                console.log("01111111111")
                header.style.backgroundImage = "url('/img/test02_s.jpg')"
            }
        }
    }
})

window.onload = function (){
    // 获取图片元素
    var imageElement = document.getElementById('ex');

// 图片列表
    var imageList = ['test01.jpg', 'test02.jpg'];

// 随机选择一张图片
    var randomIndex = Math.floor(Math.random() * imageList.length);
    var randomImage = imageList[randomIndex];

// 设置图片的 src 属性
    imageElement.src = "img/"+randomImage;

}


