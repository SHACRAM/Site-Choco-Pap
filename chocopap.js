// Carrousel
$(function () {
  $(".carrousel").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true,
  });
});

/* Menu burger déroulant */
$(function () {
  $("#menuBurger").on("click", function () {
    let isMenuOpen = $("#headerMobile").is(":visible");
    $("#headerMobile").stop(true, true).slideToggle();
    lienBoutique.style.top = isMenuOpen ? "40%" : "80%";
  });
});

/* Fermeture du menu burger si changement de taille d'écran*/
$(window).on("resize", function () {
  $("#headerMobile").hide();
});

/*Page produits*/

/*Importation du fichier products.json */
async function getJson() {
  const response = await fetch("../json/products.json");
  if (!response.ok) {
    throw new error(`Erreur HTTP : ${response.status}`);
  }

  const data = await response.json();
  allProduct = data;
}
document.addEventListener("DOMContentLoaded", async function () {
  await getJson();

  majQuantitePanier();
  allProduct.forEach((product) => {
    createHtmlProduct(product);
  });

  var prixMin = document.getElementById("prixMin");
  var prixMax = document.getElementById("prixMax");
  var prixAll = document.querySelectorAll('input[name="prix"]');
  prixMin.value = 1;
  prixMax.value = 30;

  /*filtre prix */
  prixAll.forEach((input) => {
    input.addEventListener("input", function () {
      majDisplay();
    });
  });

  /*Filtre Note */
  var notes = document.querySelectorAll("#noteMin, #noteMax");
  notes.forEach((note) => {
    note.addEventListener("change", function () {
      majDisplay();
    });
  });

  /*Gestion de l'ouverture et fermeture du panier mobile*/
  openCloseCart();
  let savedCart = getStorage();

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

  /*filtre deroulant catégories*/
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

/*filtre "tous les produits" au chargement de la page */

var allProduct = [];
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
  localStorage.setItem("cartContent", JSON.stringify(cartLocalStorage));
}

function getStorage() {
  let savedCart = JSON.parse(localStorage.getItem("cartContent"));
  return savedCart;
}

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
        nomP.addEventListener("click", function () {
          createHtmlDetail(product);
          displayIndex.style.display = "none";
        });

        let prixP = document.createElement("p");
        prixP.classList.add("prixProduitPanier");
        prixP.textContent = `${product.price} €`;

        let inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputNumber.name = "quantitePanier";
        inputNumber.value = produitAjoute.filter(
          (id) => id.textContent === product.id
        ).length;
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
  let titreH2 = document.getElementById("titreBoutique");
  let displayIndex = document.getElementById("displayIndex");

  panierMobile.addEventListener("click", function () {
    panier.classList.remove("closed");
    panier.classList.add("opened");
    titreH2.style.display = "none";
    headerMobile.style.display = "none";
    affichageProduit.style.display = "none";
    filter.style.display = "none";
    displayIndex.style.display = "none";
  });
  var imageCroix = document.querySelector(".imageCroix");
  imageCroix.addEventListener("click", function () {
    if ((affichageProduit.style.width = "50%")) {
      affichageProduit.style.width = "100%";
    }
    panier.classList.add("closed");
    panier.classList.remove("opened");
    titreH2.style.display = "flex";
    filter.style.display = "block";
    footer.style.marginTop = 0;
    affichageProduit.style.display = "flex";
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
    affichageProduit.style.width = "50%";
    titreH2.style.display = "flex";
  });
}

// liens vers acceuil et boutique desktop
let lienVersAccueil = document.querySelector("#lienVersAccueil");
lienVersAccueil.addEventListener("click", function () {
  affichageBoutique.style.display = "none";
  displayInfoProduct.style.display = "none";
  displayIndex.style.display = "block";
});

let lienVersBoutique = document.querySelector("#lienVersBoutique");
let displayIndex = document.getElementById("displayIndex");
lienVersBoutique.addEventListener("click", function () {
  displayIndex.style.display = "none";
  affichageBoutique.style.display = "block";
});

let lienBoutique = document.querySelector("#lienBoutique");
lienBoutique.addEventListener("click", function () {
  displayIndex.style.display = "none";
  affichageBoutique.style.display = "block";
});

// liens vers accueil et boutique mobile
let lienVersAccueilMobile = document.querySelector("#lienVersAccueilMobile");
lienVersAccueilMobile.addEventListener("click", function () {
  affichageBoutique.style.display = "none";
  displayInfoProduct.style.display = "none";
  displayIndex.style.display = "block";
});

let lienVersBoutiqueMobile = document.querySelector("#lienVersBoutiqueMobile");
lienVersBoutiqueMobile.addEventListener("click", function () {
  displayIndex.style.display = "none";
  affichageBoutique.style.display = "block";
});
