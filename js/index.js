$(document).ready(function(){

    $(".agregar").click(function(){
        if($('#newText').val() != ''){
            var $check = $("<button>", {"class": "check"}).text("Check");
            var $delete = $("<button>", {"class": "delete"}).text("Delete");
            var $lista = $("<li>", {"class": "lista"})


            $(".Lista")
            .append($lista
            .append([$("<p></p>").text($('#newText').val()), $check, $delete]));
        };
    });

    $(document).on('click', '.check', function() {
        if ($(this).parent().css('text-decoration-line') == "none")
            $(this).parent().css('text-decoration-line', 'line-through');
        else
            $(this).parent().css('text-decoration-line', 'none');
    });

    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });

});