isSafeText = function(text){    

    return /^[0-9\+\-\*\/\(\)\.]{1,}$/.test(text);
}

replaceCharsToCompute = function(text){
    text = text.replace(/x/, "*");
    text = text.replace(/∻/, "/");
    
    return text;
}

$("#compute").click(function () {
    var statement = replaceCharsToCompute($(".display").text());

    if (!isSafeText(statement)){
        alert("Operacion no permitida");
        $(".display").text("");    
        
        return;
    }
    
    var result;

    try {
        result = eval(statement);
    } catch(exception){
        alert("Operacion invalida");
        $(".display").text("");

        return;
    }

    if (result == Infinity){
        alert("Division invalida");
        $(".display").text("");
        return ;
    }

    $(".display").text(result);
});

$('.btn').click(function () {
    if ($(this).hasClass("control")){
        return;
    }
    
    $(".display").text($(".display").text() + $(this).text());
});

$("#clear").click(function () {
    $(".display").text("");
});

$("#back").click(function () {
    $(".display").text($(".display").text().substr(0, $(".display").text().lentgh - 1));
});