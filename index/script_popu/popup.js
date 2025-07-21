const triggerZone = document.getElementById("user_div");
const popup = document.getElementById("popup");
const popup2 = document.getElementById("popup2");
const btn_deconex = document.getElementById("btn_deconex");
const cancel_btn = document.getElementById("cancel_btn");

// Affiche la première popup (le petit menu)
triggerZone.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  popup.classList.remove("hidden");
});

// Affiche la popup de confirmation (popup2)
btn_deconex.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  popup2.classList.remove("hidden");
});

// Ferme popup1 et popup2 si on clique en dehors
document.addEventListener("click", (e) => {
  if (!triggerZone.contains(e.target) && !popup.contains(e.target)) {
    popup.classList.add("hidden");
  }

  if (!popup2.contains(e.target) && !btn_deconex.contains(e.target)) {
    popup2.classList.add("hidden");
  }
});

// Bouton Annuler (ferme popup2)
cancel_btn.addEventListener("click", (e) => {
  e.preventDefault();
  popup2.classList.add("hidden");
});

const btnModifier = document.getElementById("btn-modifier");
const popup_profil = document.getElementById("popup-modifier");
const btnAnnuler = document.getElementById("btn-annuler");

// Ouvre la popup
btnModifier.addEventListener("click", () => {
  popup_profil.classList.remove("hidden");
});

// Ferme la popup
btnAnnuler.addEventListener("click", () => {
  popup_profil.classList.add("hidden");
});

const iconProfil = document.getElementById("icon-profil");
const iconCouverture = document.getElementById("icon-couverture");

const inputProfil = document.getElementById("input-profil");
const inputCouverture = document.getElementById("input-couverture");

// 📸 Clique sur l'icône → clique sur input
iconProfil.addEventListener("click", () => {
  inputProfil.click();
});

iconCouverture.addEventListener("click", () => {
  inputCouverture.click();
});
