const images = document.querySelectorAll(".image");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const word = document.getElementById("word");

// Mot et images correspondantes
const words = ["cacawette", "cafe", "Cerise", "Raisin"];
const imagePaths = ["CACAWETTE.jfif", "CAFFEE.jfif", "cerise.jfif", "resain.jfif"];
let correctImageIndex = 0; // Index de l'image correcte
let attempts = 0; // Nombre de tentatives

// Initialisation des images et du mot
function initializeGame() {
  attempts = 0;
  correctImageIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[correctImageIndex];

  images.forEach((img, index) => {
    img.src = imagePaths[(index + correctImageIndex) % words.length];
    img.alt = words[(index + correctImageIndex) % words.length];
    img.classList.add("hidden"); // Masquer les images au départ
  });
}

// Vérification du clic sur une image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Vérifie si l'image est encore masquée
    if (!img.classList.contains("hidden")) return;

    if (index === correctImageIndex) {
      revealImages();
      message.textContent = "Correct! Les images sont dévoilées.";
    } else {
      attempts++;
      if (attempts >= 3) {
        revealImages();
        message.textContent =
          "Vous avez échoué deux fois. Les images sont dévoilées.";
      } else {
        message.textContent = `Incorrect, essayez encore! (${
          3- attempts
        } tentatives restantes)`;
      }
    }
  });
});

// Fonction pour dévoiler les images
function revealImages() {
  images.forEach((img) => {
    img.classList.remove("hidden");
  });
}

// Réinitialisation du jeu
resetButton.addEventListener("click", () => {
  initializeGame();
  message.textContent = "";
});

// Initialisation au chargement de la page
initializeGame();
