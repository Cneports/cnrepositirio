function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function changeImage() {
  var input = document.getElementById("uploadInput");
  var image = document.getElementById("userImage");
  
  var file = input.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
      image.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

    // Fecha o overlay e volta para a tela anterior quando o botão é clicado
    Fechar.addEventListener('click', function () {
      window.history.back();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const photoInput = document.getElementById('photoInput');
      const photoFile = photoInput.files[0];

      if (photoFile) {
          // Convert the image to base64 for simplicity (you might want to upload it to a server)
          const reader = new FileReader();
          reader.onload = function(e) {
              const base64Image = e.target.result;
              
              // Save the base64Image to a cookie or local storage
              document.cookie = `userPhoto=${base64Image}; expires=${new Date(2025, 0, 1).toUTCString()}`;
              
              // Redirect to a logged-in page or perform further actions
              window.location.href = '/logged-in-page.html';
          };
          reader.readAsDataURL(photoFile);
      }
  });
function suport() {
  window.alert("Em desevolvimento, mas caso tenha um problema entre em contato pelo e-mail. -> cnideias2024@gmail.com")
}
