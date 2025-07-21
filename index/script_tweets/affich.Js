// const case_tweets = document.getElementById("case_tweets");
// const case_tweets = document.querySelector(".case_tweets");
// const leTweets = localStorage.getItem("content");

// affichage.js

const postTweetsSection = document.querySelectorAll(".post_tweets");
const deleteTweet = document.querySelectorAll(".deleteTweet");

// deleteTweet.forEach((btn) => {
// 🛠️ on dit à TS que c'est un bouton HTML
// deleteTweet.addEventListener("click", async (e) => {
//   const id = button.dataset.id; // ✅ plus d'erreur ici
//   await deleteTweets(Number(id)); // on convertit en nombre et on supprime
// });
// // });
// script_tweets/affichage.js ou autre fichier JS

// 🔁 Fonction pour récupérer l'image depuis le localStorage

function afficherUnTweet(tweet) {
  const user = localStorage.getItem("name");
  const image_tweet = localStorage.getItem("media");

  const tweetDiv = document.createElement("div");

  tweetDiv.classList.add("p-4", "border-b", "border-gray-700", "w-full");
  let imageHTML = "";
  if (
    tweet.media &&
    tweet.media.length > 0 &&
    tweet.media[0].type === "image"
  ) {
    imageHTML = `<img src="${tweet.media[0].url}" alt="tweet image" class="mt-2 rounded-lg max-w-xs" />`;
  }

  tweetDiv.innerHTML = `
    <div class="flex flex-col gap-4">
      <img
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        alt="avatar"
        class="profil-picture w-10 h-10 rounded-full"
      />
      <div class="text-white">
       <span class="font-bold">${tweet.name}</span>
      
        
        <p class="mt-1">${tweet.content}</p>
        <p class="mt-1">${tweet.id}</p>
          ${imageHTML}
        
      </div>
       <div class="flex justify-between text-gray-400 mt-3 max-w-[250px] text-xl">
        <button title="Commentaire" class="hover:text-blue-400">💬</button>
        <button title="Retweet" class="hover:text-green-400">🔁</button>
        <button title="Like" class="hover:text-pink-400">❤️</button>
        <button title="Partager" class="hover:text-blue-300">📤</button>
      <button 
   title="Supprimer" 
   class="hover:text-red-400 delete-tweet" 
    
    data-id="${tweet.id}"
   >
  supprimer
</button>
  </div>
    </div>
 

  `;

  postTweetsSection.forEach((section) => {
    section.prepend(tweetDiv.cloneNode(true));
  });
  // postTweetsSection.textConte(tweetDiv);
  affichage();
}

function affichage() {
  const anciensTweets = JSON.parse(localStorage.getItem("tweets") || "[]");

  if (anciensTweets.length > 0) {
    anciensTweets.forEach((tweet) => {
      afficherUnTweet(tweet);
    });
  } else {
    console.log("Aucun tweet enregistré.");
  }
}

postTweetsSection.forEach((element) => {
  element.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-tweet")) {
      const tweetId = e.target.dataset.id;
      alert("tu veux supprimer?");

      console.log("Tu veux supprimer le tweet avec ID :", tweetId);
      // ici on supprimera plus tard le tweet avec fetch()
    }

    if (e.target.classList.contains("delete-tweet")) {
      const tweetId = e.target.dataset.id;
      if (!tweetId) return;

      // 1. Suppression côté localStorage
      let anciensTweets = JSON.parse(localStorage.getItem("tweets") || "[]");
      anciensTweets = anciensTweets.filter(
        (tweet) => tweet.id !== Number(tweetId)
      );
      localStorage.setItem("tweets", JSON.stringify(anciensTweets));

      // 2. Suppression côté JSON Server
      try {
        await fetch(`http://localhost:3000/tweets/${tweetId}`, {
          method: "DELETE",
        });

        location.reload();
        alert("Tweet supprimé !");
        // Recharge pour mettre à jour l'affichage
      } catch (err) {
        console.error("Erreur lors de la suppression :", err);
        alert("Échec de la suppression.");
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", affichage);

// leTweet.classList.add("tweet");
// tweetDiv.innerHTML = `
//       <div style="display:flex; gap:10px; align-items: flex-start; padding: 10px; border-bottom: 1px solid #333;">
//         <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="avatar" style="width:40px; height:40px; border-radius:50%;">
//         <div>
//           <strong style="color:white;">Utilisateur</strong>
//           <p style="margin: 4px 0; color:white;">${leTweets}</p>
//         </div>
//       </div>
//     `;
// const username1 = document.querySelectorAll(".username1");
// const username2 = document.querySelectorAll(".username2");

// const user = localStorage.getItem("name");

// case_tweets.forEach((el) => {
//   el.textContent = leTweets;
// });

// username2.forEach((el) => {
//   el.textContent = "@" + user;
// });

// leTweets.textContent(case_tweets);
