const authetification = document.getElementById("authetification");
const nom = document.getElementById("noms");
const btnInscription = document.getElementById("btnInscription");
const email = document.getElementById("email");
const myPassword = document.getElementById("password");
const motDePasse = document.getElementById("motDePasse");
const submit1 = document.getElementById("submit1");

// @ts-ignore

function validateNom() {
  const nomDirect = nom.value.trim();

  // Optionnel : tu peux tester que le champ n’est pas vide ou trop court
  if (nomDirect.length < 3) {
    alert("Le nom doit contenir au moins 3 caractères.");
    return;
  }

  checkNomExists(nomDirect);
}
function checkNomExists(nom) {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((users) => {
      const existe = users.find((u) => u.name === nom);
      if (existe) {
        alert("Nom déjà utilisé !");
      } else {
        console.log("Nom disponible.");
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la vérification du nom :", err);
      alert("Une erreur est survenue.");
    });
}
// nom.addEventListener("blur", () => {
//   validateNom();
// });

function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    // Pas de validation si vide, on attend que l'utilisateur tape quelque chose
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Format d’email invalide.");
    return;
  }

  // Si le format est bon, on vérifie s’il existe dans la base
  checkEmailExists(email);
}

// email.addEventListener("blur", () => {
//   validateEmail(); // Vérifie le format + l'existence
// });

document.addEventListener("DOMContentLoaded", () => {
  const nom = document.getElementById("noms");
  const email = document.getElementById("email");

  nom.addEventListener("blur", validateNom);
  email.addEventListener("blur", validateEmail);
});

function checkEmailExists(email) {
  const url = "http://localhost:3000/users";

  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      const emailTrouvé = users.find((user) => user.email === email);
      if (emailTrouvé) {
        alert("Email déjà enregistré");
      } else {
        console.log("Email disponible, on peut continuer l’inscription");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la vérification de l’email :", error);
      alert("Une erreur est survenue pendant la vérification.");
    });
}

myPassword.addEventListener("blur", () => {
  validatePassword();
});

function validatePassword() {
  const pwd = myPassword.value.trim();

  if (pwd === "") return; 

  if (pwd.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    return;
  }

 
  checkPasswordExists(motDePasse);
}

function checkPasswordExists(password) {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((users) => {
      const existe = users.find((u) => u.password === password);
      if (existe) {
        alert("Ce mot de passe est déjà utilisé, choisis-en un autre !");
        myPassword.style.border = "2px solid red";
      } else {
        console.log("Mot de passe disponible.");
        myPassword.style.border = "2px solid green";
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la vérification du mot de passe :", err);
      alert("Une erreur est survenue.");
    });
}

btnInscription.addEventListener("click", (e) => {
  e.preventDefault();

  let user = {
    name: nom.value.trim(),
    email: email.value.trim(),
    myPassword: myPassword.value.trim(),
  };

  if (user.name.length < 3 || user.email === "" || user.myPassword.length < 6) {
    alert("Tous les champs doivent être remplis correctement.");
    return;
  }

  localStorage.setItem("name", user.name);
  localStorage.setItem("first-email", user.email);
  localStorage.setItem("password", user.myPassword);
  const endPoiints = "http://localhost:3000/users";
  fetch(
    endPoiints,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
    // @ts-ignore
  );
  // 1. Stocker nom et email
  // localStorage.setItem("nom", nom.value);
  // localStorage.setItem("email", email.value);

  // 2. Rediriger vers la page du mot de passe
  window.location.href = "key.html";
});

// login.js
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");

//   // @ts-ignore
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const nom = localStorage.getItem("nom");
//     const email = localStorage.getItem("email");
//     // @ts-ignore
//     const password = document.getElementById("password").value;

//     const user = {
//       id: Date.now(),
//       name: nom,
//       // @ts-ignore
//       username: nom.replace(/\s+/g, "").toLowerCase(),
//       email,
//       password,
//       createdAt: new Date().toISOString(),
//     };

//     try {
//       const res = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       if (res.ok) {
//         alert("Inscription réussie !");
//         localStorage.setItem("user", JSON.stringify(user));
//         window.location.href = "accueil.html";
//       } else {
//         alert("Erreur à l’inscription.");
//       }
//     } catch (err) {
//       console.error("Erreur:", err);
//     }
//   });
// });
