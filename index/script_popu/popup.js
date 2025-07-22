const triggerZones = document.querySelectorAll(".user_div");
const popups = document.querySelectorAll(".popup");
const popup2s = document.querySelectorAll(".popup2");
const btn_deconexs = document.querySelectorAll(".btn_deconex");
const cancel_btns = document.querySelectorAll(".cancel_btn");

// Affiche la première popup
triggerZones.forEach((trigger, index) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    popups[index]?.classList.remove("hidden");
  });
});

// Affiche la popup de confirmation (popup2)
btn_deconexs.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    popup2s[index]?.classList.remove("hidden");
  });
});

// Ferme les popups si on clique ailleurs
document.addEventListener("click", (e) => {
  popups.forEach((popup) => {
    // On ferme seulement si on n’a cliqué ni sur le popup ni sur un déclencheur
    if (
      ![...triggerZones].some((zone) => zone.contains(e.target)) &&
      !popup.contains(e.target)
    ) {
      popup.classList.add("hidden");
    }
  });

  popup2s.forEach((popup2) => {
    if (
      ![...btn_deconexs].some((btn) => btn.contains(e.target)) &&
      !popup2.contains(e.target)
    ) {
      popup2.classList.add("hidden");
    }
  });
});

// Bouton Annuler (ferme la popup2 correspondante)
cancel_btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup2s[index]?.classList.add("hidden");
  });
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
