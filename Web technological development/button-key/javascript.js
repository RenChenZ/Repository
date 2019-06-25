window.onload = function() {
    /*function fun1() {
        alert("Q");
    }
    function fun2() {
        alert("W")
    }*/

    document.onkeydown = function() {
        showKeyDown(evt);
        var evt = null;

        function showKeyDown(evt) {
            evt = (evt) ? evt : window.event;

            if (evt.keyCode == 81) {
                func();
            }
            if (evt.keyCode == 87) {
                fun2();
            }
        }
    }

    
    var sColor = ["red","blue","black"];
    var div0 = document.getElementsByClassName("div1")[0];
    var i = 0;
    div0.style.transition = "2s";
    document.getElementById("CC").onclick = function() {
        change();

        function change() {
            div0.style.backgroundColor = sColor[i%sColor.length];
            i++;
        }
    }
    

    document.getElementById("changePosition").onclick = roll2D;

    function roll2D(roll) {
        var roll = document.getElementsByTagName("ul")[0];
        roll.style = "transform: translateX(942.48px) rotate(1080deg); transition: 6s;";
    }
    
    
    document.getElementById("backPosition").onclick = function() {
        var roll = document.getElementsByTagName("ul")[0];
        roll2D(roll);

        function roll2D(roll) {
            roll.style = "transform: translateX(0px) rotate(0deg); transition: 6s;";
        } 
    }


    func() = function() {
        alert("Q");
    }
}