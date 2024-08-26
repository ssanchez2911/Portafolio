



$(document).ready(function () {
    $("#text1").mouseenter(function () {
    $("#text2").show();
    })

    $("#text1").mouseout(function () {
        $("#text2").hide();
        })
       
    $(".caja2").click(function () {

        $("#img").attr("width", "100%");

        })

    $(".caja2").mouseout(function () {
        $("#img").attr("width", "20%");
    })


    $(".caja3").click(function () {

        $("#text3").attr("style", "font-size: 2rem");

    })
    
    $(".caja3").mouseout(function () {
            $("#text3").attr("style", "font-size: 1rem");
    })
       
})



