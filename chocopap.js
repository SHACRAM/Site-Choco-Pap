
/* Menu burger déroulant */ 
$(function(){
    $("#menuBurger").on("click", function(){
        $("#headerMobile").stop(true, true).slideToggle();
    }) 
});

/* Fermeture du menu burger si changement de taille d'écran*/
$(window).on("resize", function(){
    $("#headerMobile").hide()
}
);



/*Carrousel*/
$(function(){
    $('.carrousel').slick({
       accessibility: true,
       autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
       fade: true,
    })
})



    
    

    






  
