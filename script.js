$(document).ready(function() {
    var input = $('#input');

    $('button').click(function() {
        var buttonVal = $(this).html();
        var inputVal = input.val();

        if (buttonVal == 'Clear') {
            input.val('');
        } else if (buttonVal == '⌫') {
            input.val(inputVal.slice(0, -1));
        } else if (buttonVal == '=') {
            input.val(eval(inputVal));
        }else if(buttonVal == '**'){
            input.val(eval(inputVal*inputVal))
        }else if(buttonVal == "√"){
            input.val(eval(Math.sqrt(inputVal))) 
        } else {
            input.val(inputVal + buttonVal)+IDBCursorWithValue();
        }
    });
});