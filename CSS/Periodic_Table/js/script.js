var alkali_plus = [];
var transition = [];
var varied = [];
var noids = [];
for (let element of data.table){
    let arr = element.elements;
    for (var i=0; i<arr.length; i++){
        if (arr[i].group == "" || arr[i].group == "Element Alkali s" || arr[i].group == "Element Alkaline s"){
            alkali_plus.push(arr[i]);
        }
        else if (arr[i].group == "Element Transition d"){
            transition.push(arr[i]);
        }
        else{
            varied.push(arr[i]);
        }
    }
}
// console.log(data);
for (let element of data.lanthanoids){
    noids.push(element);
}
noids.pop();
for (let element of data.actinoids){
    noids.push(element);
}
function generateTopRow(){
    var toprow = "<p id='group'>Group</p><ul id='first_ul'><li>1</li><li>2</li></ul><ul id='second_ul'>"
    for (let i = 3; i <= 18; i ++){
        if( i< 10){
            toprow += "<li>&nbsp&nbsp" + i + "</li>"
        }
        else{
            toprow += "<li>" + i + "</li>"
        }
    }
    toprow += "</ul><p id='period'>Period</p>"
    document.getElementById('top-row').innerHTML = toprow;
}
function generateLeftRow(){
    var leftrow = "<ul>"
    for (let i = 1; i <= 7; i++){
        leftrow += "<li>" + i + "</li>"
    }
    leftrow += "</ul>"
    document.getElementById('left-row').innerHTML = leftrow;
}
function generateLeft(){
    var leftgroup = "";
    for (var i = 0; i < alkali_plus.length; i++){
        var el = alkali_plus[i];
        if (el.number == 1){
            leftgroup += "<div class='element left-group block'><p>" + el.number + "</p><h3>" + el.small + "</h3><p>" + Math.round(el.molar * 1000) / 1000 + "</p></div>"
        }
        else {
            var elementHTML = "<div class='element left-group'><p>" + el.number + "</p><h3>" + el.small + "</h3><p>" + Math.round(el.molar * 1000) / 1000 + "</p></div>"

            leftgroup += elementHTML;
        }
    }
    document.getElementById('left').innerHTML = leftgroup;
}
function generateMiddle(){
    var middlegroup = "";
    for (var i = 0; i < transition.length; i++){
        var el = transition[i];
        var elementHTML = "<div class='element middle-group'><p>" + el.number + "</p><h3>" + el.small + "</h3><p>" + Math.round(el.molar * 1000) / 1000 + "</p></div>"

        middlegroup += elementHTML;
    }
    document.getElementById('middle').innerHTML = middlegroup;
}
function generateRight(){
    var rightgroup = "<div class='element right-group block right-aligned'><p>2</p><h3>He</h3><p>4.003</p></div>";
    for (var i = 1; i < varied.length; i++){
        var el = varied[i];
        var elementHTML = "<div class='element right-group'><p>" + el.number + "</p><h3>" + el.small + "</h3><p>" + Math.round(el.molar * 1000) / 1000 + "</p></div>";

        rightgroup += elementHTML;
    }
    document.getElementById('right').innerHTML = rightgroup;
}
function generateBottom(){
    var bottomgroup = "";
    for (var i = 0; i < noids.length-1; i++){
        var el = noids[i];
        var elementHTML = "<div class='element bottom-group'><p>" + el.number + "</p><h3>" + el.small + "</h3><p>" + Math.round(el.molar * 100) / 100 + "</p></div>";

        bottomgroup += elementHTML;
    }
    document.getElementById('bottom').innerHTML = bottomgroup;
}

generateTopRow();
generateLeftRow();
generateLeft();
generateMiddle();
generateRight();
generateBottom();
