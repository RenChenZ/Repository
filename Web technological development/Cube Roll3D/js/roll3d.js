window.onload = function() {
    var ul = document.getElementById('images');

    roll3d(ul);
    draggable3d(ul);

    function roll3d(ul) {
        var items = ul.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            items[i].style.transition = '.4s all ease' + (items.length - i) * 200 + 'ms';
        }
    }

    function draggable3d(ul) {

        var x = 0, y = 0;        
        var lastX = 0, lastY = 0;
        var speedX = 0, speedY = 0;
        var timer = null;

        document.onmousedown = function(e) {
            var items = ul.getElementsByTagName('li'); 
            var disX = e.clientX - x;
            var disY = e.clientY - y;
            clearInterval(timer);
            for (var i = 0; i < items.length; i++) {
                items[i].style.transition = 'unset';
            }

            document.onmousemove = function(e) {
                x = e.clientX - disX;
                y = e.clientY - disY;
                rotate3d(ul, x / 3, y / 3);
                speedX = e.clientX - lastX;
                speedY = e.clientY - lastY;
                lastX = e.clientX;
                lastY = e.clientY;
            };

            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
                timer = setInterval(function () {
                    speedX *= 0.95;
                    speedY *= 0.95;
                    x += speedX;
                    y += speedY;
                    rotate3d(ul, x / 3, y / 3);
                }, 30);
            };
            return false;
        };
    }

    function rotate3d(ul, x, y) {       
        ul.style.transform = 'perspective(800px) rotateX(' + (-y)+ 'deg) rotateY(' + x + 'deg)';
    }


    //onclick-button-disappearFromInside//

    document.getElementById("disappearFromInside").onclick = disappearFromInside;

    function disappearFromInside(insideDisappear) {
        var insideDisappear = document.getElementsByClassName("insides");
        
        for (i = 0; insideDisappear.length; i++) {
            insideDisappear[i].style.opacity = "0";
            insideDisappear[i].style.transition = "2s";
        }
    }
    

    //onclick-button-appearFromInside//

    document.getElementById("appearFromInside").onclick = resetter;

    function resetter(insideAppear) {
        var insideAppear = document.getElementsByClassName("insides");
        
        for (var i = 0; i < insideAppear.length; i++) {
            insideAppear[i].style.opacity = "1";
            insideAppear[i].style.transition = "2s";
        }
    }
    

    //onclick-button-disappearFromOutside//

    document.getElementById("disappearFromOutside").onclick = disappearFromOutside

    function disappearFromOutside(outsideDisappear) {
        var outsideDisappear = document.getElementsByClassName("little-divs");

        for (var i = 0; i < outsideDisappear.length; i++) {
            outsideDisappear[i].style.opacity = "0";
            outsideDisappear[i].style.transition = "2s";
        }
    }
    

    //onclick-button-appearFromOutside//

    document.getElementById("appearFromOutside").onclick = appearFromOutside;

    function appearFromOutside(outsideAppear) {
        var outsideAppear = document.getElementsByClassName("little-divs");

        for (var i = 0; i < outsideAppear.length; i++) {
            outsideAppear[i].style.opacity = "1";
            outsideAppear[i].style.transition = "2s";
        }
    }


    //onclick-button-hide frame//

    document.getElementById("hideFrame").onclick = hideFrame;

    function hideFrame(insdieTurnOffDivs, insideTurnOff) {
        var insideTurnOff = document.getElementsByClassName("insides");
        var insdieTurnOffDivs = document.getElementsByClassName("little-divs");

        for (var i = 0; i < insideTurnOff.length; i++) {
            insideTurnOff[i].style.border = "1px solid black";
            insideTurnOff[i].style.boxShadow = "0 0 10px black";
            insideTurnOff[i].style.opacity = "0";
            insideTurnOff[i].style.transition = "2s";
        }
        for (var i = 0;i < insdieTurnOffDivs.length; i++) {
            insdieTurnOffDivs[i].style.border = "1px solid black";
            insdieTurnOffDivs[i].style.boxShadow = "0 0 10px black";
            insdieTurnOffDivs[i].style.opacity = "0";
            insdieTurnOffDivs[i].style.transition = "2s";
        }
    }
    

    //onclick-button-show frame//

    document.getElementById("showFrame").onclick = showFrame;

    function showFrame(insideTurnOnDivs, insideTurnOn) {
        var insideTurnOn = document.getElementsByClassName("insides");
        var insideTurnOnDivs = document.getElementsByClassName("little-divs");

        for (var i = 0; i < insideTurnOn.length; i++) {
            insideTurnOn[i].style.border = "1px solid white";
            insideTurnOn[i].style.boxShadow = "0 0 10px white";
            insideTurnOn[i].style.opacity = "1";
            insideTurnOn[i].style.transition = "2s";
        }
        for (var i = 0; i < insideTurnOnDivs.length; i++) {
            insideTurnOnDivs[i].style.border = "1px solid white";
            insideTurnOnDivs[i].style.boxShadow = "0 0 10px white";
            insideTurnOnDivs[i].style.opacity = "1";
            insideTurnOnDivs[i].style.transition = "2s";
        }
    }


    //onclick-button-showpictures//

    document.getElementById("showPictures").onclick = showPictures;

    function showPictures(images) {
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = "0.4";
            images[i].style.transition = "2s";
        }
    }


    //onclick-button-hidepictures//

    document.getElementById("hidePictures").onclick = hidePictures;
    
    function hidePictures(images) {
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = "0";
            images[i].style.transition = "2s";
        }
    }  
    

    //onclick-button-hidefaces//

    document.getElementById("hideFaces").onclick = hideFaces;

    function hideFaces(faces) {
        var faces = document.getElementsByClassName("face");

        for (var i = 0; i < faces.length; i++) {
            faces[i].style.opacity = "0";
            faces[i].style.transition = "2s";
        }
    }
    

    //onclick-button-showfaces//

    document.getElementById("showFaces").onclick = showFaces;

    function showFaces(faces) {
        var faces = document.getElementsByClassName("face");

        for (var i = 0; i < faces.length; i++) {
            faces[i].style.opacity = "1";
            faces[i].style.transition = "2s";
        }
    }
    

    //onclick-button-transformation & Rotation//

    document.getElementById("transformation&Rotation").onclick = transformationRotation;

    function transformationRotation(insideTransformRotate) {
        var insideTransformRotate = document.getElementById("insides-box");

        insideTransformRotate.style.transform = "rotateY(-1440deg) scale3d(0.3, 3, 0.3)";
        insideTransformRotate.style.transition = "2s";
    }


    //onclick-button-transformation & Rotation Fat//

    document.getElementById("transformation&RotationFat").onclick = transformationRotationFat;

    function transformationRotationFat(insideTransformRotateFat) {
        var insideTransformRotateFat = document.getElementById("insides-box");

        insideTransformRotateFat.style.transform = "rotateY(-720deg) scale3d(3, 3, 3)";
        insideTransformRotateFat.style.transition = "2s";
    }


    //onclick-button-transformation & Rotation Reset//

    document.getElementById("transformation&RotationReset").onclick = transformationRotationReset;

    function transformationRotationReset(insideTransformRotateReset) {
        var insideTransformRotateReset = document.getElementById("insides-box");

        insideTransformRotateReset.style.transform = "rotateY(0)";
        insideTransformRotateReset.style.transition = "2s";
    }


    //onclick-button-transfom around//

    document.getElementById("transformAround").onclick = transformAround;
        
    function transformAround(divsAround) {
        var divsAround = document.getElementsByClassName("little-divs");

        for (var i = 0; i < divsAround.length; i++) {
            divsAround[i].style = "transform: rotateZ(360deg) translateZ(300px); border-radius: 10px; background-color: white; opacity: 0.3; transition: 2s;";
        }
    }

    //onclick-button-transfom around Reset//

    document.getElementById("transformAroundReset").onclick = transformAroundReset;
        
    function transformAroundReset(divsAround) {
        var divsAround = document.getElementsByClassName("little-divs");

        for (var i = 0; i < divsAround.length; i++) {
            divsAround[i].style = "transform: rotateZ(0deg) translateZ(0px); background-color: none; opacity: 1; transition: 2s;";
        }
    }


    //onclick-button-change inside color//

    var colors = ["rgba(255, 255, 255, 0.3)", "rgba(0, 0, 139, 0.3)", "rgba(219, 11, 0, 0.3)", "rgba(0, 0, 0, 0.3)"];
    var item = 0;

    document.getElementById("changeInsideColor").onclick = changeInsideColor;

    function changeInsideColor(insideColor) {
        var insideColor = document.getElementsByClassName("insides");

        for (var i = 0; i < insideColor.length; i++) {
            insideColor[i].style.backgroundColor = colors[item % colors.length];
            insideColor[i].style.transition = "2s";
        }
        item++;
    }

    
    //onclick-button-inside color none//

    document.getElementById("insideColorNone").onclick = insideColorNone;

    function insideColorNone(insideColor) {
        var insideColor = document.getElementsByClassName("insides");

        for (var i = 0; i < insideColor.length; i++) {
            insideColor[i].style = "background-color: none; transition: 2s;";
        }
    }


    //onclick-button-deploy type one//

    document.getElementById("deployTypeOne").onclick = deployTypeOne;

    function deployTypeOne(deploy, deployDivs, divsTop, divsBottom, deployPillar, front, back, left, right, top, bottom, sixFaces, littleDivsFourBox) {
        var deploy = document.getElementById("little-divs-box");
        var deployDivs = document.getElementsByClassName("little-divs");
        var divsTop = document.getElementsByClassName("top-divs");
        var divsBottom = document.getElementsByClassName("bottom-divs");
        var deployPillar = document.getElementById("insides-box");
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var top = document.getElementById("top");
        var bottom = document.getElementById("bottom");
        var sixFaces = document.getElementById("sixFaces");
        var littleDivsFourBox = document.getElementById("little-divs-four-box");

        //core//

        deploy.style = "transform: rotateY(-36000deg); transition: 60s;";

        sixFaces.style = "transform: rotateY(-135deg); transition: 30s ease 71s;";
        littleDivsFourBox.style = "transform: rotateY(-135deg); transition: 30s ease 71s;";

        //around divs//

        for (var i = 0; i < deployDivs.length; i++) {
            deployDivs[i].style = "transform: translateZ(383px); border-radius: 10px; background-color: rgb(164, 164, 164); opacity: 0.6; transition: 60s;";
        }

        //top and bottom correct//

        for (var i = 0; i < divsTop.length; i++) {
            divsTop[i].style = "transform: translateZ(312px) scale(1.5,1.5); top: 100px; left: 100px; border-radius: 10px; background-color: rgb(164, 164, 164); opacity: 0.1; transition: 50s;";
        }
        for (var i = 0; i < divsBottom.length; i++) {
            divsBottom[i].style = "transform: translateZ(162px) scale(3,3); top: 100px; left: 100px; border-radius: 1000px; background-color: rgb(164, 164, 164); opacity: 0.1; transition: 50s;";
        }

        //roll pillar//

        deployPillar.style = "transform: rotateY(72000deg) translateY(-75px) scale3d(0.3, 2.5, 0.3); transition: 70s;";

        //faces//
        
        front.style = "transform: translateZ(305px) translateY(199px) rotateX(-78deg) scale(0.5, 1.5); transition: 40s ease 25s;";
        back.style = "transform: rotateY(180deg) translateZ(305px) translateY(199px) rotateX(-78deg) scale(0.5, 1.5); transition: 40s ease 29s;";
        left.style = "transform: rotateY(270deg) translateZ(305px) translateY(199px) rotateX(-78deg) scale(0.5, 1.5); transition: 40s ease 27s;";
        right.style = "transform: rotateY(-270deg) translateZ(305px) translateY(199px) rotateX(-78deg) scale(0.5, 1.5); transition: 40s ease 31s;";
        top.style = "transform: rotateX(90deg) translateZ(150px); opacity: 0; transition: 20s ease-in 1s;";
        bottom.style = "transform: rotateX(-90deg) translateZ(150px); opacity: 0; transition: 20s ease-in 1s;";
    }

        
    //onclick-button-cancel deploy type one//
        
    document.getElementById("cancelDeployTypeOne").onclick = cancelDeployTypeOne;

    function cancelDeployTypeOne(deploy, deployDivs, divsTop, divsBottom, deployPillar, front, back, left, right, top, bottom, sixFaces, littleDivsFourBox) {
        var deploy = document.getElementById("little-divs-box");
        var deployDivs = document.getElementsByClassName("little-divs");
        var divsTop = document.getElementsByClassName("top-divs");
        var divsBottom = document.getElementsByClassName("bottom-divs");
        var deployPillar = document.getElementById("insides-box");
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var top = document.getElementById("top");
        var bottom = document.getElementById("bottom");
        var sixFaces = document.getElementById("sixFaces");
        var littleDivsFourBox = document.getElementById("little-divs-four-box");

        //core//

        deploy.style = "transform: rotateY(0); transition: 60s 31s;";

        sixFaces.style = "transform: rotateY(0deg); transition: 30s;";
        littleDivsFourBox.style = "transform: rotateY(0deg); transition: 30s;";

        //around divs//

        for (var i = 0; i < deployDivs.length; i++) {
            deployDivs[i].style = "transform: translateZ(0); background-color: none; opacity: 1; transition: 60s ease 31s;";
        }

        //top and bottom correct//

        for (var i = 0; i < divsTop.length; i++) {
            divsTop[i].style = "background-color: none; opacity: 1; transition: 75s ease 31s;";
        }
        for (var i = 0; i < divsBottom.length; i++) {
            divsBottom[i].style = "background-color: none; opacity: 1; transition: 75s ease 31s;";
        }

        //roll pillar//

        deployPillar.style = "transform: rotateY(0deg); transition: 70s ease 31s;";

        //faces//
        
        front.style = "transform: translateZ(150px); transition: 20s ease 31s;";
        back.style = "transform: rotateY(180deg) translateZ(150px); transition: 20s ease 35s;";
        left.style = "transform: rotateY(270deg) translateZ(150px); transition: 20s ease 33s;";
        right.style = "transform: rotateY(-270deg) translateZ(150px); transition: 20s ease 37s;";
        top.style = "transform: rotateX(90deg) translateZ(150px); transition: 20s ease-in 81s;";
        bottom.style = "transform: rotateX(-90deg) translateZ(150px); transition: 20s ease-in 81s;";
    }

        
    //onclick-button-deploy type two//

    document.getElementById("deployTypeTwo").onclick = deployTypeTwo;

    function deployTypeTwo(deployScalePillar, deployDivs, deployScaleFrameFat, changeFaceColor) {
        var deployScalePillar = document.getElementById("little-divs-box");
        var deployDivs = document.getElementsByClassName("little-divs");
        var deployScaleFrameFat = document.getElementById("insides-box");
        var changeFaceColor = document.getElementsByTagName("li");

        //core function//

        deployScalePillar.style = "transform: rotateY(1440deg) scale3d(3,3,3); transition: 60s;";

        for (var i = 0; i < deployDivs.length; i++) {
            deployDivs[i].style = "background-color: rgba(255, 255, 255, 0.3); transition: 60s;"
        }

        //fat//

        deployScaleFrameFat.style = "transform: rotateY(2880deg) scale3d(3, 3, 3); transition: 60s;";

        //faces//

        for (var i = 0; i < changeFaceColor.length; i++) {
            changeFaceColor[i].style = "background-color: rgba(255, 255, 255, 0.5); transition: 60s;";
        }
    }


    //onclick-button-cancel deploy type two//

    document.getElementById("cancelDeployTypeTwo").onclick = cancelDeployTypeTwo;
    
    function cancelDeployTypeTwo(deployScalePillar, deployDivs, deployScaleFrameFat, changeFaceColor) {
        var deployScalePillar = document.getElementById("little-divs-box");
        var deployDivs = document.getElementsByClassName("little-divs");
        var deployScaleFrameFat = document.getElementById("insides-box");
        var changeFaceColor = document.getElementsByTagName("li");

        //core function//

        deployScalePillar.style = "transform: scale3d(1,1,1); transition: 10s;";

        for (var i = 0; i < deployDivs.length; i++) {
            deployDivs[i].style = "background-color: none; transition: 10s;"
        }

        //fat//

        deployScaleFrameFat.style = "transform: scale3d(1, 1, 1); transition: 10s;";

        //faces//

        for (var i = 0; i < changeFaceColor.length; i++) {
            changeFaceColor[i].style = "background-color: rgba(255, 255, 255, 0.3); transition: 10s;";
        }
    }


    //keyCode for buttons//

    document.onkeydown = contorlByKeyCode;

    function contorlByKeyCode(evt) {
        evt = (evt) ? evt : window.event;

        if (evt.keyCode == 81) {
            disappearFromInside();
        }
        if (evt.keyCode == 87) {
            resetter();
        }
        if (evt.keyCode == 69) {
            disappearFromOutside();
        }
        if (evt.keyCode == 82) {
            appearFromOutside();
        }
        if (evt.keyCode == 84) {
            hideFrame();
        }
        if (evt.keyCode == 89) {
            showFrame();
        }
        if (evt.keyCode == 85) {
            showPictures();
        }
        if (evt.keyCode == 73) {
            hidePictures();
        }
        if (evt.keyCode == 79) {
            hideFaces();
        }
        if (evt.keyCode == 80) {
            showFaces();
        }
        if (evt.keyCode == 65) {
            transformationRotation();
        }
        if (evt.keyCode == 83) {
            transformationRotationFat();
        }
        if (evt.keyCode == 68) {
            transformationRotationReset();
        }
        if (evt.keyCode == 70) {
            transformAround();
        }
        if (evt.keyCode == 71) {
            transformAroundReset();
        }
        if (evt.keyCode == 72) {
            changeInsideColor();
        }
        if (evt.keyCode == 74) {
            insideColorNone();
        }
        if (evt.keyCode == 75) {
            deployTypeOne();
        }
        if (evt.keyCode == 76) {
            cancelDeployTypeOne();
        }
        if (evt.keyCode == 90) {
            deployTypeTwo();
        }
        if (evt.keyCode == 88) {
            cancelDeployTypeTwo();
        }
    }
}