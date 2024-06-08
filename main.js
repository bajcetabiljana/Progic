$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".bar").toggleClass("close");
        $(".menu-li").toggle();
    });
});
