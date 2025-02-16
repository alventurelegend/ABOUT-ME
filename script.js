document.addEventListener("click", function () {
  let audio = document.getElementById("bgm");
  audio.muted = false; // Menyalakan suara setelah interaksi pengguna
  audio.play();
}, { once: true }); // Hanya dijalankan sekali