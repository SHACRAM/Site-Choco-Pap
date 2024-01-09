
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



/*Carrousel
$(function(){
    $('.carrousel').slick({
       accessibility: true,
       autoplay: true,
       autoplaySpeed: 3000,
       dots: true,
       fade: true,
    })
})*/

/*Page produits*/

/*filtre deroulant catégories*/ 
document.addEventListener('DOMContentLoaded', function(){
    var largeurEcranResponsive = window.innerWidth;

    if (largeurEcranResponsive <= 896) {
        $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").hide();
    }
    window.addEventListener('resize', function(){
        largeurEcranResponsive = window.innerWidth;
        if (largeurEcranResponsive <= 896) {
            $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").hide();
        } else {
            $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").show();
        }
    });

    /*filtre deroulant catégories */
    $(function(){
        $("#toggleCategories").on("click", function(){
            $("#zone-filtre-categories").stop(true, true).slideToggle();
        }) 
    });

    /*filtre  deroulant prix*/ 
    $(function(){
        $("#togglePrix").on("click", function(){
            $("#zone-filtre-prix").stop(true, true).slideToggle();
            var prixSizeMin = document.getElementById('prixMin');
            var prixSizeMax = document.getElementById('prixMax');
            prixSizeMin.style.width = '6em';
            prixSizeMax.style.width = '6em';
        }) 
    });

    /*filtre deroulant note*/ 
    $(function(){
        $("#toggleNote").on("click", function(){
            $("#zone-filtre-note").stop(true, true).slideToggle();
        }) 
    });
});

document.addEventListener('DOMContentLoaded', function(){
    var menuDeroulantAll = document.querySelectorAll('.menuDeroulantAll');
    menuDeroulantAll.forEach(menu =>{
        menu.addEventListener('click', function(){
            var chevron = menu.querySelector('img');
            if(chevron.classList.contains('hidden')){
                chevron.classList.remove('hidden');
                chevron.classList.add('visible')
            } else {
                chevron.classList.remove('visible')
                chevron.classList.add('hidden');
            }
        })
    })
})

/*Importation du fichier products.json */

/*fetch('../json/products.json')
    .then(res => {
        if(!res.ok){
            return console.log('Erreur du chargement des donnés')
        }
        return res.json();
    } )
    .then(data=> {
        allProduct = data;
    });*/

/*filtre "tous les produits" au chargement de la page */
document.addEventListener('DOMContentLoaded', function(){
    majQuantitePanier();
    allProduct.forEach((product) => {
        let id = document.createElement('p');
        id.classList.add('id');
        id.textContent = product.id;

        let imageInfo = document.createElement('img');
        imageInfo.src = product.image;
        imageInfo.alt = product.description;

        var titleP = document.createElement('p');
        titleP.classList.add('descriptionProduit');
        titleP.textContent = product.title;
        

        let prixP = document.createElement('p');
        prixP.classList.add("prixProduit");
        prixP.textContent = `${product.price} €`;

        var noteP = document.createElement('p');
        noteP.classList.add("noteProduit");
        noteP.textContent = `Note: ${product.note}/5`;

        var buttonPanier = document.createElement('button')
        buttonPanier.classList.add('boutonAddPanier');
        buttonPanier.textContent='Ajouter au panier';

        var divProduit = document.createElement('div');
        divProduit.classList.add('produitUnitaire')
        listeDiv.push(divProduit);

        divProduit.appendChild(id);
        divProduit.appendChild(imageInfo);
        divProduit.appendChild(titleP);
        divProduit.appendChild(prixP);
        divProduit.appendChild(noteP);
        divProduit.appendChild(buttonPanier);
        affichageProduit.appendChild(divProduit);
        affichageProduit.style.display = 'flex';
        ajoutPanier();
    });
    
})
var allProduct = [{
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
  }]
var listeDiv = [];
var checkBoxAll = document.querySelector('input[name="ch-all"]');
var affichageProduit= document.querySelector("#affichageProduit");
checkBoxAll.addEventListener("change", function(){
    affichageProduit.innerHTML='';
    if (!checkBoxAll.checked){
        affichageProduit.style.display = "none";
        return;
    }
    checkBoxs.forEach(checkBox=>{
        checkBox.checked = false;
    })
    addProduct();
    
});

/*filtre categories en fonction des checkBox */
var affichageProduit= document.querySelector("#affichageProduit");
var produitValide = new Set(); 
var checkBoxs = document.querySelectorAll('input[name="category"]');
checkBoxs.forEach(checkBox=>{
    checkBox.addEventListener('change', function(){
        listeDiv = [];
        var categories = [];
        checkBoxs.forEach(checkBox=>{
            if(checkBox.checked){
                categories.push(checkBox.value);
            }
            else if (!checkBox.checked){
                affichageProduit.innerHTML = '';
                produitValide.clear();
                checkBoxAll.checked;
                
            }
        });

        var allUnchecked = Array.from(checkBoxs).every(function(checkBox){
            return !checkBox.checked;
        });

        checkBoxAll.checked = allUnchecked;
        if (allUnchecked){
            addProduct();
        }
        categories.forEach(category=>{
            allProduct.forEach(product =>{
                if(product.category[category]===true && !produitValide.has(product.id)){
                    let imageInfo = document.createElement('img');
                    imageInfo.src = product.image;
                    imageInfo.alt = product.description;
            
                    var titleP = document.createElement('p');
                    titleP.classList.add('descriptionProduit');
                    titleP.textContent = product.title;
                    
                    
                    var prixP = document.createElement('p');
                    prixP.classList.add("prixProduit");
                    prixP.textContent = `${product.price} €`;
                    
                    
            
                    var noteP = document.createElement('p');
                    noteP.classList.add("noteProduit");
                    noteP.textContent = `Note: ${product.note}/5`;
            
                    let buttonPanier = document.createElement('button')
                    buttonPanier.classList.add('boutonAddPanier');
                    buttonPanier.textContent='Ajouter au panier';
            
                    let divProduit = document.createElement('div');
                    divProduit.classList.add('produitUnitaire')
                    listeDiv.push(divProduit);
            
                    
                    divProduit.appendChild(imageInfo);
                    divProduit.appendChild(titleP);
                    divProduit.appendChild(prixP);
                    divProduit.appendChild(noteP);
                    divProduit.appendChild(buttonPanier);
                    affichageProduit.appendChild(divProduit);
                    affichageProduit.style.display = 'flex'

                    produitValide.add(product.id);
                    majDisplay();
                }
                ajoutPanier();
            });
        })
     
    })
})

/*filtre prix */
document.addEventListener('DOMContentLoaded', function(){
    var prixMin = document.getElementById('prixMin');
    var prixMax = document.getElementById('prixMax');
    var prixAll = document.querySelectorAll('input[name="prix"]');
    prixMin.value = 1;
    prixMax.value = 30;

    prixAll.forEach(input=>{
        input.addEventListener('input', function(){
            majDisplay();
        })
    })
});
 
/*Filtre Note */
document.addEventListener('DOMContentLoaded', function(){
    var notes = document.querySelectorAll('#noteMin, #noteMax');
    notes.forEach(note=>{
        note.addEventListener('change', function(){
            majDisplay();     
        })
    })
})

/*Gestion de l'ouverture et fermeture du panier mobile*/
document.addEventListener('DOMContentLoaded', function(){
var panier = document.getElementById('affichagePanier');
var panierMobile = document.getElementById('panierMobile')

panierMobile.addEventListener('click', function(){
    panier.classList.remove('closed');
    panier.classList.add('opened');
    headerMobile.style.display = 'none';
    affichageProduit.style.display = 'none';
    filter.style.display = 'none';
})
var imageCroix = document.getElementById('imageCroix');
imageCroix.addEventListener('click', function(){
    if(affichageProduit.style.width = '50%'){
        affichageProduit.style.width = '100%';
    }
    panier.classList.add('closed');
    panier.classList.remove('opened');
    affichageProduit.style.display = 'flex';
    filter.style.display = 'block';
    footer.style.marginTop = 0;
})
window.addEventListener('resize', function(){
    let largeur = window.innerWidth;
    if(largeur){
        panier.classList.add('closed');
        panier.classList.remove('opened');
        affichageProduit.style.display = 'flex';
        filter.style.display = 'block';
        footer.style.marginTop = 0;
    }
})

/*Gestion de l'ouverture et fermeture du panier desktop */
var panier = document.getElementById('affichagePanier');
var panierDesktop = document.getElementById('panierDesktop')

panierDesktop.addEventListener('click', function(){
    panier.classList.remove('closed');
    panier.classList.add('opened');
    affichageProduit.style.width = '50%';  
})
})

/*Ajout des produits dans le panier */
var produitAjoute = [];
var produitAjouteUnique = new Set();
var zonePanier = document.getElementById('zonePanier');
document.addEventListener('DOMContentLoaded', ajoutPanier);





function addProduct(){
    allProduct.forEach((product) => {
        let imageInfo = document.createElement('img');
        imageInfo.src = product.image;
        imageInfo.alt = product.description;

        var titleP = document.createElement('p');
        titleP.classList.add('descriptionProduit');
        titleP.textContent = product.title;
        

        let prixP = document.createElement('p');
        prixP.classList.add("prixProduit");
        prixP.textContent = `${product.price} €`;

        var noteP = document.createElement('p');
        noteP.classList.add("noteProduit");
        noteP.textContent = `Note: ${product.note}/5`;

        var buttonPanier = document.createElement('button')
        buttonPanier.classList.add('boutonAddPanier');
        buttonPanier.textContent='Ajouter au panier';

        var divProduit = document.createElement('div');
        divProduit.classList.add('produitUnitaire')
        listeDiv.push(divProduit);

        
        divProduit.appendChild(imageInfo);
        divProduit.appendChild(titleP);
        divProduit.appendChild(prixP);
        divProduit.appendChild(noteP);
        divProduit.appendChild(buttonPanier);
        affichageProduit.appendChild(divProduit);
        affichageProduit.style.display = 'flex';
        majDisplay();
        
    });
 } 

function ajoutPanier() {/*detect le clic sur le bouton du produit */
    var divAffiche = document.getElementsByClassName('produitUnitaire');
    
    Array.from(divAffiche).forEach(div => {
        let bouton = div.querySelector('button');
        if (!bouton.hasEventListener) {
            bouton.addEventListener('click', function() {
                let divProduit = this.closest('.produitUnitaire');
                let id = divProduit.querySelector('.id');
                produitAjoute.push(id);
                Array.from(produitAjoute).forEach(produit =>{
                    produitAjouteUnique.add(produit);
                });
                ajoutPanierAffichage();
            });
            bouton.hasEventListener = true;   
        }
    })
    
}

function majDisplay(){/*maj de l'affichage en fonction des filtres choisis */
    var [minP, maxP, minN, maxN ]=detectInput();
            listeDiv.forEach(div=>{
                var prixProduit = parseFloat(div.querySelector('.prixProduit').textContent);
                var noteProduit = div.querySelector('.noteProduit');
                var paragrapheNote= noteProduit.textContent.match(/\d+/);
                var noteInt = parseInt(paragrapheNote[0]);
                if(prixProduit >= minP && prixProduit <= maxP && noteInt>= minN && noteInt<= maxN){
                    div.style.display = 'flex';
                } else{
                    div.style.display = 'none';
                }
            })
}
function detectInput(){/*permet de detecter les entrés de l'utilisateur */
    var nombreMin = document.getElementById('prixMin');
    var nombreMax = document.getElementById('prixMax');
    var noteMin= document.getElementById('noteMin');
    var noteMax =document.getElementById('noteMax');

    var nombreActuelMin = parseFloat(nombreMin.value);
    var nombreActuelMax = parseFloat(nombreMax.value);
    var noteMinActuelle = parseInt(noteMin.value);
    var noteMaxActuelle = parseInt(noteMax.value);

    return[nombreActuelMin, nombreActuelMax, noteMinActuelle, noteMaxActuelle];
}

function ajoutPanierAffichage(){/*affiche les produits dans le panier */
    zonePanier.innerHTML = '';
    majQuantitePanier();
    produitAjouteUnique.forEach(produit =>{
        allProduct.forEach(product=>{
            if(produit.textContent === product.id){  
                let imageClose = document.createElement('img');
                imageClose.classList.add('imgDelete');
                imageClose.src = '../images/xmark-solid.svg';
                imageClose.alt = 'croix pour supprimer le produit du panier';

                let imageP = document.createElement('img')
                imageP.classList.add('imgProduitPanier');
                imageP.src = product.image;
                imageP.alt = product.description;

                let nomP = document.createElement('p');
                nomP.classList.add('titrePoduitPanier');
                nomP.textContent = product.title;

                let prixP = document.createElement('p');
                prixP.classList.add('prixProduitPanier');
                prixP.textContent = `${product.price} €`;

                let inputNumber = document.createElement('input');
                inputNumber.type = 'number';
                inputNumber.name = 'quantitePanier';
                inputNumber.value = '0';
              

                let divInfo = document.createElement('div');
                divInfo.classList.add('divInfo');
                
                let divProduitPanier = document.createElement('div')
                divProduitPanier.classList.add('divProduitPanier');

                divInfo.appendChild(nomP);
                divInfo.appendChild(prixP);
                divInfo.appendChild(inputNumber);

                divProduitPanier.appendChild(imageClose);
                divProduitPanier.appendChild(imageP);
                divProduitPanier.appendChild(divInfo);

                zonePanier.appendChild(divProduitPanier);
            
                
            }
        })
    }) 
}

function majQuantitePanier(){/*maj du compteur d'elements dans le panier */
    var mainNavPanier = document.querySelectorAll('#mainNavPanier, #mainNavPanierMobile');
    mainNavPanier.forEach(panier =>{
        panier.innerHTML = '';
        var panierP = document.createElement('p');
        panierP.classList.add('panierP');
        panierP.textContent = produitAjoute.length;

        panier.appendChild(panierP);
    })
}









    

    






  
