const imageTweet = document.getElementById("image_tweet");
const imageInput = document.getElementById("imageInput");

const imagePreview = document.getElementById("imagePreview");
const img_section = document.querySelector(".img_section");
let imageDataUrl = ""; // variable globale pour stocker l'image temporairement

// 1. Quand on clique sur l’icône galerie
imageTweet.addEventListener("click", () => {
  imageInput.click(); // simule un clic sur le champ file
});

// 2. Quand l’utilisateur sélectionne une image
imageInput.addEventListener("change", () => {
  if (imageInput.files.length > 0) {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      imageDataUrl = e.target.result;

      // affiche la section et l’image
      img_section.style.display = "flex";
      imagePreview.style.display = "block";
      imagePreview.src = imageDataUrl;
    };
    img_section.style.display = "none";
    reader.readAsDataURL(file);
  }
});

// function posterImageTweet(imageURL) {
//   const postTweetsSection = document.querySelector(".post_tweets");

//   const tweetHTML = `
//     <div class="tweet p-4 border-b border-gray-700 w-full">
//       <div>
//         <img src="${imageURL}" alt="tweet image" class="mt-2 rounded-lg max-w-xs" />
//       </div>
//     </div>
//   `;

//   postTweetsSection.innerHTML += tweetHTML;
// }

// const btnPoster = document.querySelector(".btn_post");

// btnPoster.addEventListener("click", () => {
//   if (imageDataUrl) {
//     posterImageTweet(imageDataUrl);

//     // Réinitialise la prévisualisation
//     document.querySelector(".img_section").style.display = "none";
//     document.getElementById("imagePreview").style.display = "none";
//     imageDataUrl = "";
//   }
// });
