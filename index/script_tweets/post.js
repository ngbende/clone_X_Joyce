const input_tweets = document.getElementById("tweets");
const btn_post = document.querySelector(".btn_post");

// btn_post.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const tweetContent = input_tweets.value;

//   if (!tweetContent.trim()) {
//     alert(" !");
//     return;
//   }

//   const user = {
//     id: Date.now(), // ou un ID généré autrement
//     userId: 1, // Simulé (à changer selon ta logique)
//     content: tweetContent,
//   };

//   // On stocke dans le localStorage
//   localStorage.setItem("content", tweetContent);

//   //  On envoie au backend JSON Server
//   await fetch("http://localhost:3000/tweets", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   //  On l’affiche
// });

// const media = JSON.parse(localStorage.getItem("media") || "null");

btn_post.addEventListener("click", async (e) => {
  e.preventDefault();
  const nom = localStorage.getItem("name");
  const tweetContent = input_tweets.value.trim();

  const user = {
    id: Date.now(),
    userId: 1,
    name: nom,
    content: tweetContent,
    media: imageDataUrl
      ? [
          {
            type: "image",
            url: imageDataUrl,
          },
        ]
      : [], // ✅ utilise directement l'objet récupéré
  };

  if (!tweetContent) {
    alert("Tweet vide !");
  }

  //Stocker en localStorage
  const anciensTweets = JSON.parse(localStorage.getItem("tweets") || "[]");
  anciensTweets.push(user);
  localStorage.setItem("tweets", JSON.stringify(anciensTweets));

  // 2. Envoi vers JSON Server
  await fetch("http://localhost:3000/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  // if (typeof afficherUnTweet === "function") {
  //   afficherUnTweet(user);
  // }

  input_tweets.value = "";
});
window.addEventListener("DOMContentLoaded", affichage);

//  Stocker nom et email
// localStorage.setItem("nom", nom.value);
// localStorage.setItem("email", email.value);

// Rediriger vers la page du mot de passe
