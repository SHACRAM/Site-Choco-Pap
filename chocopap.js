
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
var allProduct = [
    {
        "id": "1" ,
        "title": "Cerisier",
        "price": 2.99,
        "note" : 5,
        "image": "../images/produit1.jpg",
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
      },
      {
        "id": "2" ,
        "title": "Coulis Caramel",
        "price": 13.99,
        "note" : 3,
        "image": "../images/produit2.jpg",
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
      },
      {
        "id": "3" ,
        "title": "Douceur exotique",
        "price": 4.99,
        "note" : 4,
        "image": "../images/produit3.jpg",
        "category": {
            "blanc": false,
            "lait": true,
            "noir": false,
            "caramel": false,
            "noix": false,
            "fruit": false,
            "liqueur": true
          },
          "description": " Douceur exotique - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Liqueur aromatisée à la cerise enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "4" ,
        "title": "Blanc Passion",
        "price": 5.99,
        "note" : 5,
        "image": "../images/produit4.jpg",
        "category": {
            "blanc": true,
            "lait": false,
            "noir": false,
            "caramel": false,
            "noix": false,
            "fruit": false,
            "liqueur": false
          },
          "description": "Blanc Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Pâte à la noix de coco enrobée de chocolat blanc. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "5" ,
        "title": "Douceur croquante",
        "price": 2.99,
        "note" : 3,
        "image": "../images/produit5.jpg",
        "category": {
            "blanc": false,
            "lait": true,
            "noir": false,
            "caramel": false,
            "noix": true,
            "fruit": false,
            "liqueur": false
          },
          "description": "Douceur croquante - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Noisette enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "6" ,
        "title": "Le Zèbre",
        "price": 19.99,
        "note" : 4,
        "image": "../images/produit6.jpg",
        "category": {
            "blanc": true,
            "lait": true,
            "noir": false,
            "caramel": false,
            "noix": false,
            "fruit": false,
            "liqueur": false
          },
          "description": "Le Zèbre - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Mixe de chocolat blanc et de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "7" ,
        "title": "Coulis Fraise",
        "price": 9.99,
        "note" : 4,
        "image": "../images/produit7.jpg",
        "category": {
            "blanc": false,
            "lait": true,
            "noir": true,
            "caramel": false,
            "noix": false,
            "fruit": true,
            "liqueur": true
          },
          "description": "Coulis Fraise - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Morceau de fraise à la liqueur entièrement enrobée de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "8" ,
        "title": "Noir Passion",
        "price": 4.99,
        "note" : 5,
        "image": "../images/produit8.jpg",
        "category": {
            "blanc": false,
            "lait": false,
            "noir": true,
            "caramel": false,
            "noix": false,
            "fruit": false,
            "liqueur": false
          },
          "description": "Noir Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Chocolat noir au coeur fondant. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "9" ,
        "title": "Fantaisie",
        "price": 2.99,
        "note" : 5,
        "image": "../images/produit9.jpg",
        "category": {
            "blanc": false,
            "lait": true,
            "noir": false,
            "caramel": true,
            "noix": true,
            "fruit": false,
            "liqueur": false
          },
          "description": "Fantaisie - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Noix enrobée de chocolat au lait et parcemée de billes de sucre colorées. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      },
      {
        "id": "10" ,
        "title": "Caramel Salé",
        "price": 14.99,
        "note" : 4,
        "image": "../images/produit10.jpg",
        "category": {
            "blanc": false,
            "lait": false,
            "noir": false,
            "caramel": true,
            "noix": false,
            "fruit": false,
            "liqueur": false
          },
          "description": "Caramel Salé - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "ingredients": "Caramel au beurre salé avec un coeur en poudre chocolatée. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
      }
  ]

var checkBoxAll = document.getElementById('ch-all');
var detailProduit= document.querySelector(".detailProduit");


checkBoxAll.addEventListener("change", function(){
    detailProduit.innerHTML='';
    if (!checkBoxAll.checked){
        detailProduit.style.display = "none";
        return;
    }
    var description=[];
    var prix=[];
    var image = [];
    allProduct.forEach(element => {
        let prixP = element.price;
        let descriptionP = element.description;
        let imageUrl = element.image;
        prix.push(prixP);
        description.push(descriptionP);
        image.push(imageUrl);
    });
    

    image.forEach((url, index) => {
        var imageInfo = document.createElement('img');
        imageInfo.src = url;

        var descriptionP = document.createElement('p');
        descriptionP.classList.add('descriptionProduit');
        descriptionP.textContent = description[index];
        

        var prixP = document.createElement('p');
        prixP.classList.add("prixProduit");
        prixP.textContent = prix[index];

        var buttonPanier = document.createElement('button')
        buttonPanier.classList.add('boutonAddPanier');
        buttonPanier.textContent='Ajouter au panier';

        var divProduit = document.createElement('div');
        divProduit.classList.add('produitUnitaire')

        
        divProduit.appendChild(imageInfo);
        divProduit.appendChild(descriptionP);
        divProduit.appendChild(prixP);
        divProduit.appendChild(buttonPanier);
        detailProduit.appendChild(divProduit);
        detailProduit.style.display = 'block';
    });
})
    



    








    

    






  
