
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

/*Page produits*/

var produit1 = JSON.stringify({
    "id": "1" ,
    "title": "Cerisier",
    "price": 2.99,
    "note" : 5,
    "image": "./images/produit1.jpg",
    "category": {
        "blanc": false,
        "lait": true,
        "noir": false,
        "caramel": false,
        "noix": true,
        "fruit": true,
        "liqueur": false
      },
      "description": "Cerisier - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "ingredients": "Cerise enrobée de pâtes d'amandes, de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
  });
var cerisier = JSON.parse(produit1);
var produit2 = JSON.stringify({
    "id": "2" ,
    "title": "Coulis Caramel",
    "price": 13.99,
    "note" : 3,
    "image": "./images/produit2.jpg",
    "category": {
        "blanc": false,
        "lait": true,
        "noir": false,
        "caramel": true,
        "noix": false,
        "fruit": false,
        "liqueur": false
      },
      "description": " Coulis Caramel - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "ingredients": "Coulis de caramel enrobé de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
  });
var coulisCaramel = JSON.parse(produit2);
var checkBoxAll = document.getElementById('ch-all');

var detailProduitDiv = document.querySelector(".detailProduit div");

checkBoxAll.addEventListener("change", function(){
    detailProduitDiv.innerHTML='';
    if (checkBoxAll.checked){
       let produit1= document.createElement('img');
       produit1.src= cerisier.image;
       produit1.alt = cerisier.description;
       let produit2= document.createElement('img');
       produit2.src= coulisCaramel.image;
       produit2.alt = coulisCaramel.description;
       detailProduitDiv.appendChild(produit2);
       detailProduitDiv.appendChild(produit1);
       detailProduitDiv.style.display = 'block';
    } else{
        detailProduitDiv.style.display = "none";
    }  
    })

    
    

    






  
