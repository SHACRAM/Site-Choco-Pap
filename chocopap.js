/* Menu burger déroulant */
$(function () {
  $("#menuBurger").on("click", function () {
    $("#headerMobile").stop(true, true).slideToggle();
  });
});

/* Fermeture du menu burger si changement de taille d'écran*/
$(window).on("resize", function () {
  $("#headerMobile").hide();
});

/*Page produits*/

/*filtre deroulant catégories*/
document.addEventListener("DOMContentLoaded", function () {
  var largeurEcranResponsive = window.innerWidth;

  if (largeurEcranResponsive <= 896) {
    $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").hide();
  }
  window.addEventListener("resize", function () {
    largeurEcranResponsive = window.innerWidth;
    if (largeurEcranResponsive <= 896) {
      $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").hide();
    } else {
      $("#zone-filtre-categories, #zone-filtre-prix, #zone-filtre-note").show();
    }
  });
  /*filtre deroulant catégories */
  $(function () {
    $(".chevronUpC").hide();
    $(".chevronDownC").show();
    $("#toggleCategories").on("click", function () {
      var zoneFiltreCategories = $("#zone-filtre-categories");
      zoneFiltreCategories.stop(true, true).slideToggle();

      $(".chevronUpC").toggle();
      $(".chevronDownC").toggle();
    });
  });

  /*filtre  deroulant prix*/
  $(function () {
    $(".chevronUpP").hide();
    $(".chevronDownP").show();
    $("#togglePrix").on("click", function () {
      $("#zone-filtre-prix").stop(true, true).slideToggle();
      var prixSizeMin = document.getElementById("prixMin");
      var prixSizeMax = document.getElementById("prixMax");
      prixSizeMin.style.width = "6em";
      prixSizeMax.style.width = "6em";
      $(".chevronUpP").toggle();
      $(".chevronDownP").toggle();
    });
  });

  /*filtre deroulant note*/
  $(function () {
    $(".chevronUpN").hide();
    $(".chevronDownN").show();
    $("#toggleNote").on("click", function () {
      $("#zone-filtre-note").stop(true, true).slideToggle();
      $(".chevronUpN").toggle();
      $(".chevronDownN").toggle();
    });
  });
});

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
document.addEventListener("DOMContentLoaded", function () {
  majQuantitePanier();
  allProduct.forEach((product) => {
    createHtmlProduct(product);
  });
});
var allProduct = [
  {
    id: "1",
    title: "Cerisier",
    price: 2.99,
    note: 5,
    image: "../images/produit1.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: false,
      caramel: false,
      noix: true,
      fruit: true,
      liqueur: false,
    },
    description:
      "Cerisier - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Cerise enrobée de pâtes d'amandes, de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "2",
    title: "Coulis Caramel",
    price: 13.99,
    note: 3,
    image: "../images/produit2.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: false,
      caramel: true,
      noix: false,
      fruit: false,
      liqueur: false,
    },
    description:
      " Coulis Caramel - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Coulis de caramel enrobé de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "3",
    title: "Douceur exotique",
    price: 4.99,
    note: 4,
    image: "../images/produit3.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: false,
      caramel: false,
      noix: false,
      fruit: false,
      liqueur: true,
    },
    description:
      " Douceur exotique - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Liqueur aromatisée à la cerise enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "4",
    title: "Blanc Passion",
    price: 5.99,
    note: 5,
    image: "../images/produit4.jpg",
    category: {
      blanc: true,
      lait: false,
      noir: false,
      caramel: false,
      noix: false,
      fruit: false,
      liqueur: false,
    },
    description:
      "Blanc Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Pâte à la noix de coco enrobée de chocolat blanc. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "5",
    title: "Douceur croquante",
    price: 2.99,
    note: 3,
    image: "../images/produit5.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: false,
      caramel: false,
      noix: true,
      fruit: false,
      liqueur: false,
    },
    description:
      "Douceur croquante - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Noisette enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "6",
    title: "Le Zèbre",
    price: 19.99,
    note: 4,
    image: "../images/produit6.jpg",
    category: {
      blanc: true,
      lait: true,
      noir: false,
      caramel: false,
      noix: false,
      fruit: false,
      liqueur: false,
    },
    description:
      "Le Zèbre - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Mixe de chocolat blanc et de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "7",
    title: "Coulis Fraise",
    price: 9.99,
    note: 4,
    image: "../images/produit7.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: true,
      caramel: false,
      noix: false,
      fruit: true,
      liqueur: true,
    },
    description:
      "Coulis Fraise - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Morceau de fraise à la liqueur entièrement enrobée de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "8",
    title: "Noir Passion",
    price: 4.99,
    note: 5,
    image: "../images/produit8.jpg",
    category: {
      blanc: false,
      lait: false,
      noir: true,
      caramel: false,
      noix: false,
      fruit: false,
      liqueur: false,
    },
    description:
      "Noir Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Chocolat noir au coeur fondant. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "9",
    title: "Fantaisie",
    price: 2.99,
    note: 5,
    image: "../images/produit9.jpg",
    category: {
      blanc: false,
      lait: true,
      noir: false,
      caramel: true,
      noix: true,
      fruit: false,
      liqueur: false,
    },
    description:
      "Fantaisie - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Noix enrobée de chocolat au lait et parcemée de billes de sucre colorées. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
  {
    id: "10",
    title: "Caramel Salé",
    price: 14.99,
    note: 4,
    image: "../images/produit10.jpg",
    category: {
      blanc: false,
      lait: false,
      noir: false,
      caramel: true,
      noix: false,
      fruit: false,
      liqueur: false,
    },
    description:
      "Caramel Salé - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients:
      "Caramel au beurre salé avec un coeur en poudre chocolatée. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux",
  },
];
var listeDiv = [];
var checkBoxAll = document.querySelector('input[name="ch-all"]');
var affichageProduit = document.querySelector("#affichageProduit");
checkBoxAll.addEventListener("change", function () {
  affichageProduit.innerHTML = "";
  if (!checkBoxAll.checked) {
    affichageProduit.style.display = "none";
    return;
  }
  checkBoxs.forEach((checkBox) => {
    checkBox.checked = false;
  });
  addProduct();
});

/*filtre categories en fonction des checkBox */
var affichageProduit = document.querySelector("#affichageProduit");
var produitValide = new Set();
var checkBoxs = document.querySelectorAll('input[name="category"]');
checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", function () {
    listeDiv = [];
    var categories = [];
    checkBoxs.forEach((checkBox) => {
      if (checkBox.checked) {
        categories.push(checkBox.value);
      } else {
        affichageProduit.innerHTML = "";
        produitValide.clear();
        checkBoxAll.checked;
      }
    });
    var allUnchecked = Array.from(checkBoxs).every(function (checkBox) {
      return !checkBox.checked;
    });
    checkBoxAll.checked = allUnchecked;
    if (allUnchecked) {
      addProduct();
    }
    categories.forEach((category) => {
      allProduct.forEach((product) => {
        if (
          product.category[category] === true &&
          !produitValide.has(product.id)
        ) {
          createHtmlProduct(product);
          produitValide.add(product.id);
          majDisplay();
        }
      });
    });
  });
});

/*filtre prix */
document.addEventListener("DOMContentLoaded", function () {
  var prixMin = document.getElementById("prixMin");
  var prixMax = document.getElementById("prixMax");
  var prixAll = document.querySelectorAll('input[name="prix"]');
  prixMin.value = 1;
  prixMax.value = 30;

  prixAll.forEach((input) => {
    input.addEventListener("input", function () {
      majDisplay();
    });
  });
});

/*Filtre Note */
document.addEventListener("DOMContentLoaded", function () {
  var notes = document.querySelectorAll("#noteMin, #noteMax");
  notes.forEach((note) => {
    note.addEventListener("change", function () {
      majDisplay();
    });
  });
});

/*Gestion de l'ouverture et fermeture du panier mobile*/
document.addEventListener("DOMContentLoaded", function () {
  openCloseCart();
});

/*Ajout des produits dans le panier */
var produitAjoute = [];
var produitAjouteUnique = new Set();
var totalPriceCart = new Map();
let totalPrice = 0;
var zonePanier = document.getElementById("zonePanier");
let value = 0;

let cartLocalStorage = new Map();
// Gestion du localStorage
function saveStorage(product, quantity) {
  if (product.id in cartLocalStorage) {
    cartLocalStorage[product.id] = {
      id: product.id,
      quantity: quantity,
    };
  } else {
    let cartProduct = {
      id: product.id,
      quantity: quantity,
    };
    cartLocalStorage[product.id] = cartProduct;
  }
  console.log(cartLocalStorage);
  localStorage.setItem("cartContent", JSON.stringify(cartLocalStorage));
}

function getStorage() {
  let savedCart = JSON.parse(localStorage.getItem("cartContent"));
  return savedCart;
}

document.addEventListener("DOMContentLoaded", function () {
  let savedCart = getStorage();
  console.log(savedCart);

  for (const product in savedCart) {
    if (Number(savedCart[product].quantity) > 0) {
      produitAjouteUnique.add(savedCart[product].id);
      for (let i = 0; i < Number(savedCart[product].quantity); i++) {
        let para = document.createElement("p");
        para.classList.add("id");
        para.textContent = savedCart[product].id;
        produitAjoute.push(para);
      }
    }
  }
  ajoutPanierAffichage();
  majQuantitePanier();
});

function addProduct() {
  allProduct.forEach((product) => {
    createHtmlProduct(product);
    majDisplay();
  });
}

function majDisplay() {
  /*maj de l'affichage en fonction des filtres choisis */
  var [minP, maxP, minN, maxN] = detectInput();
  listeDiv.forEach((div) => {
    var prixProduit = parseFloat(div.querySelector(".prixProduit").textContent);
    var noteProduit = div.querySelector(".noteProduit");
    var paragrapheNote = noteProduit.textContent.match(/\d+/);
    var noteInt = parseInt(paragrapheNote[0]);
    if (
      prixProduit >= minP &&
      prixProduit <= maxP &&
      noteInt >= minN &&
      noteInt <= maxN
    ) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
}
function detectInput() {
  /*permet de detecter les entrés de l'utilisateur */
  var nombreMin = document.getElementById("prixMin");
  var nombreMax = document.getElementById("prixMax");
  var noteMin = document.getElementById("noteMin");
  var noteMax = document.getElementById("noteMax");

  var nombreActuelMin = parseFloat(nombreMin.value);
  var nombreActuelMax = parseFloat(nombreMax.value);
  var noteMinActuelle = parseInt(noteMin.value);
  var noteMaxActuelle = parseInt(noteMax.value);

  return [nombreActuelMin, nombreActuelMax, noteMinActuelle, noteMaxActuelle];
}

function ajoutPanierAffichage() {
  /*affiche les produits dans le panier */
  zonePanier.innerHTML = "";
  produitAjouteUnique.forEach((produit) => {
    allProduct.forEach((product) => {
      if (produit === product.id) {
        let imageClose = document.createElement("img");
        imageClose.classList.add("imgDelete");
        imageClose.src = "../images/trash-can-regular.svg";
        imageClose.alt = "croix pour supprimer le produit du panier";
        imageClose.addEventListener("click", function () {
          zonePanier.removeChild(divProduitPanier);
          produitAjouteUnique.delete(product.id);
          let cartContent = getStorage();
          delete cartContent[product.id];
          localStorage.setItem("cartContent", JSON.stringify(cartContent));
          produitAjoute = produitAjoute.filter(
            (produit) => produit.textContent !== product.id
          );
          totalPriceCart.delete(product.id);
          totalCart();
          majQuantitePanier();
        });

        let imageP = document.createElement("img");
        imageP.classList.add("imgProduitPanier");
        imageP.src = product.image;
        imageP.alt = product.description;

        let nomP = document.createElement("p");
        nomP.classList.add("titrePoduitPanier");
        nomP.textContent = product.title;

        let prixP = document.createElement("p");
        prixP.classList.add("prixProduitPanier");
        prixP.textContent = `${product.price} €`;

        let inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputNumber.name = "quantitePanier";
        inputNumber.value = produitAjoute.filter(
          (id) => id.textContent === product.id
        ).length;
        console.log(produitAjoute);
        let totalPriceProduct = inputNumber.value * product.price;
        totalPriceCart.set(product.id, totalPriceProduct);
        emptyCart();
        let quantity = inputNumber.value;
        inputNumber.addEventListener("input", function () {
          totalPriceProduct = inputNumber.value * product.price;
          totalPriceCart.set(product.id, totalPriceProduct);
          totalCart();
          let quantityInput = inputNumber.value;

          if (inputNumber.value == 0) {
            zonePanier.removeChild(divProduitPanier);
            produitAjouteUnique.delete(product.id);

            produitAjoute = produitAjoute.filter(
              (produit) => produit.textContent !== product.id
            );
            totalPriceCart.delete(product.id);
            console.log(product.id);
            majQuantitePanier();
          }
          majQuantitePanier();
          quantity = quantityInput;
          saveStorage(product, quantity);
          quantityInput = "0";
        });

        saveStorage(product, quantity);
        let divInfo = document.createElement("div");
        divInfo.classList.add("divInfo");

        let divProduitPanier = document.createElement("div");
        divProduitPanier.classList.add("divProduitPanier");

        divInfo.appendChild(nomP);
        divInfo.appendChild(prixP);
        divInfo.appendChild(inputNumber);

        divProduitPanier.appendChild(imageClose);
        divProduitPanier.appendChild(imageP);
        divProduitPanier.appendChild(divInfo);

        zonePanier.appendChild(divProduitPanier);
      }
    });
  });
}

function majQuantitePanier() {
  /*maj du compteur d'elements dans le panier */
  var mainNavPanier = document.querySelectorAll(
    "#mainNavPanier, #mainNavPanierMobile"
  );
  mainNavPanier.forEach((panier) => {
    panier.innerHTML = "";
    var panierP = document.createElement("p");
    panierP.classList.add("panierP");
    let inputs = document.querySelectorAll("input[name=quantitePanier]");
    let sum = 0;
    inputs.forEach((input) => {
      sum = sum += parseInt(input.value);
    });
    panierP.textContent = sum;

    panier.appendChild(panierP);
  });
}

// création et ajout des éléments de l'affichage + boutton d'ajout au panier
function createHtmlProduct(product) {
  let id = document.createElement("p");
  id.classList.add("id");
  id.textContent = product.id;

  let imageInfo = document.createElement("img");
  imageInfo.src = product.image;
  imageInfo.alt = product.description;

  var titleP = document.createElement("p");
  titleP.classList.add("descriptionProduit", "text-style3");
  titleP.textContent = product.title;
  titleP.addEventListener("click", function () {
    createHtmlDetail(product);
  });

  let prixP = document.createElement("p");
  prixP.classList.add("prixProduit");
  prixP.textContent = `${product.price} €`;

  var noteP = document.createElement("p");
  noteP.classList.add("noteProduit");
  noteP.textContent = `Note: ${product.note}/5`;

  var buttonPanier = document.createElement("button");
  buttonPanier.classList.add("boutonAddPanier");
  buttonPanier.textContent = "Ajouter au panier";
  buttonPanier.addEventListener("click", function () {
    let divProduit = this.closest(".produitUnitaire");
    let id = divProduit.querySelector(".id");
    produitAjoute.push(id);
    console.log(id);
    Array.from(produitAjoute).forEach((produit) => {
      produitAjouteUnique.add(produit.textContent);
    });
    ajoutPanierAffichage();
    totalCart();
    majQuantitePanier();
  });

  var divProduit = document.createElement("div");
  divProduit.classList.add("produitUnitaire");
  listeDiv.push(divProduit);

  divProduit.appendChild(id);
  divProduit.appendChild(imageInfo);
  divProduit.appendChild(titleP);
  divProduit.appendChild(prixP);
  divProduit.appendChild(noteP);
  divProduit.appendChild(buttonPanier);
  affichageProduit.appendChild(divProduit);
  affichageProduit.style.display = "flex";
}

// Bouton vider le panier
function emptyCart() {
  let totalHtml = document.getElementById("totalCart");
  let emptyButton = document.getElementById("emptyCartButton");
  emptyButton.addEventListener("click", function () {
    zonePanier.innerHTML = "";
    produitAjoute = [];
    totalHtml.textContent = `Total : 0€`;
    produitAjouteUnique.clear();
    totalPrice = 0;
    totalPriceCart.clear();
    localStorage.clear();
    majQuantitePanier();
  });
}

// Mise à jour du prix total du panier
function totalCart() {
  totalPrice = 0;
  let totalHtml = document.getElementById("totalCart");
  for (let price of totalPriceCart.values()) {
    totalPrice += price;
  }
  totalHtml.textContent = `Total : ${totalPrice.toFixed(2)}€`;
}

function createHtmlDetail(product) {
  let affichageBoutique = document.getElementById("affichageBoutique");
  let displayInfoProduct = document.getElementById("displayInfoProduct");
  displayInfoProduct.innerHTML = "";
  affichageBoutique.style.display = "none";
  displayInfoProduct.style.display = "flex";
  let id = document.createElement("p");
  id.classList.add("id");
  id.textContent = product.id;

  let imageClose = document.createElement("img");
  imageClose.classList.add("imageCroix");
  imageClose.src = "../images/rectangle-xmark-regular.svg";
  imageClose.alt = "cliquer ici pour fermer la page detail produit";
  imageClose.addEventListener("click", function () {
    displayInfoProduct.style.display = "none";
    affichageBoutique.style.display = "block";
  });

  let titleP = document.createElement("h2");
  titleP.classList.add("text-style7");
  titleP.textContent = product.title;

  let priceP = document.createElement("p");
  priceP.classList.add("prixProduit", "text-style3");
  priceP.textContent = `${product.price} €`;

  let descriptionP = document.createElement("p");
  descriptionP.classList.add("text-style3");
  descriptionP.textContent = product.description;

  let inputNumber = document.createElement("input");
  inputNumber.type = "number";

  inputNumber.value = 1;
  let inputActuel = 0;

  let buttonP = document.createElement("button");
  buttonP.classList.add("boutonAddPanier", "text-style3");
  buttonP.textContent = "Ajouter au panier";
  buttonP.addEventListener("click", function () {
    inputActuel = inputNumber.value;
    let i = 0;
    if (Number(inputActuel) !== 0) {
      do {
        let id = divDetailP.querySelector(".id");
        produitAjoute.push(id);

        Array.from(produitAjoute).forEach((produit) => {
          produitAjouteUnique.add(produit.textContent);
        });

        ajoutPanierAffichage();
        totalCart();
        i++;
      } while (i < inputActuel);
      inputActuel = 0;
    }
    majQuantitePanier();
    inputNumber.value = 1;
  });

  let imageP = document.createElement("img");
  imageP.classList.add("imageDetailP");
  imageP.src = product.image;
  imageP.alt = product.description;

  let ingredientP = document.createElement("h2");
  ingredientP.classList.add("text-style7");
  ingredientP.textContent = "Ingrédients : ";

  let listeIngredients = document.createElement("p");
  listeIngredients.classList.add("text-style3");
  listeIngredients.textContent = product.ingredients;

  let titlePriceDescription = document.createElement("div");
  titlePriceDescription.classList.add("titlePriceDescription");

  let inputButton = document.createElement("div");
  inputButton.classList.add("inputButton");

  let ingredientListe = document.createElement("div");
  ingredientListe.classList.add("ingredientListe");

  let titlePriceDescriptionInputButton = document.createElement("div");
  titlePriceDescriptionInputButton.classList.add(
    "titlePriceDescriptionInputButton"
  );

  let inputDiv = document.createElement("div");
  inputDiv.classList.add("inputDiv");

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  let titlePriceDescriptionInputButtonImg = document.createElement("div");
  titlePriceDescriptionInputButtonImg.classList.add(
    "titlePriceDescriptionInputButtonImg"
  );

  let imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  let divTotal = document.createElement("div");
  divTotal.classList.add("divTotal");

  imgDiv.appendChild(imageP);

  inputDiv.appendChild(inputNumber);
  buttonDiv.appendChild(buttonP);

  titlePriceDescription.appendChild(titleP);
  titlePriceDescription.appendChild(priceP);
  titlePriceDescription.appendChild(descriptionP);

  inputButton.appendChild(inputDiv);
  inputButton.appendChild(buttonDiv);

  titlePriceDescriptionInputButton.appendChild(titlePriceDescription);
  titlePriceDescriptionInputButton.appendChild(inputButton);

  titlePriceDescriptionInputButtonImg.appendChild(
    titlePriceDescriptionInputButton
  );
  titlePriceDescriptionInputButtonImg.appendChild(imgDiv);

  ingredientListe.appendChild(ingredientP);
  ingredientListe.appendChild(listeIngredients);

  divTotal.appendChild(titlePriceDescriptionInputButtonImg);
  divTotal.appendChild(ingredientListe);

  let divDetailP = document.createElement("div");
  divDetailP.classList.add("divdetailP");

  divDetailP.appendChild(id);
  divDetailP.appendChild(imageClose);
  divDetailP.appendChild(divTotal);

  displayInfoProduct.appendChild(divDetailP);
}

function openCloseCart() {
  var panier = document.getElementById("affichagePanier");
  var panierMobile = document.getElementById("panierMobile");
  let titreH1 = document.getElementById("titreBoutique");

  panierMobile.addEventListener("click", function () {
    panier.classList.remove("closed");
    panier.classList.add("opened");
    titreH1.style.display = "none";
    headerMobile.style.display = "none";
    affichageProduit.style.display = "none";
    filter.style.display = "none";
  });
  var imageCroix = document.querySelector(".imageCroix");
  imageCroix.addEventListener("click", function () {
    if ((affichageProduit.style.width = "50%")) {
      affichageProduit.style.width = "100%";
    }
    panier.classList.add("closed");
    panier.classList.remove("opened");
    titreH1.style.display = "flex";
    affichageProduit.style.display = "flex";
    filter.style.display = "block";
    footer.style.marginTop = 0;
  });
  window.addEventListener("resize", function () {
    let largeur = window.innerWidth;
    if (largeur) {
      panier.classList.add("closed");
      panier.classList.remove("opened");
      affichageProduit.style.display = "flex";
      if ((affichageProduit.style.width = "50%")) {
        affichageProduit.style.width = "100%";
      }
      filter.style.display = "block";
      footer.style.marginTop = 0;
    }
  });

  /*Gestion de l'ouverture et fermeture du panier desktop */
  var panier = document.getElementById("affichagePanier");
  var panierDesktop = document.getElementById("panierDesktop");

  panierDesktop.addEventListener("click", function () {
    panier.classList.remove("closed");
    panier.classList.add("opened");
    affichageProduit.style.width = "60%";
    titreH1.style.display = "flex";
  });
}
