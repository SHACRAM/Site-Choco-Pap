
/* Menu burger déroulant */ 
$(function(){
    $("#menuBurger").on("click", function(){
        $("#headerMobile").stop(true, true).slideToggle();
    }) 
});

/* Fermeture du menu si changement de taille d'écran*/
$(window).on("resize", function(){
    $("#headerMobile").hide()
}
);


