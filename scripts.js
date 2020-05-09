let time = 2000,
// Tempo de rotação.
  currentImageIndex = 0
    // A primeira imagem e 0
  images = document
    .querySelectorAll('#slider img')
  max = images.length;
  // São o maximo de imagens que eu tenho.
  
function nextImage() {
  // Ele vai puxar a proxima imagem
  // console.log(images)
  // console.log(images[1])
  images[currentImageIndex] // Primeira imagem.
    .classList.remove('selected')
  // Já vai começar a aplicação removendo a class selected.

  currentImageIndex++
  // Ele vai adcionar mais 1 no currentImageIndex.

  if (currentImageIndex >= max) {
    // Se o currentImageIndex for maior ou igual ao maximo de images, ele volta a ser 0.
    currentImageIndex = 0
  }

  images[currentImageIndex] // Primeira imagem.
    .classList.add('selected')
}

function start() {
  // console.log('window loaded')
  setInterval(() => {
    // A cada 2s esse função vai ser rodada.
    // Troca de imagem:
    // console.log('função rodada...');
    nextImage();
  }, time)
}

window.addEventListener('load', start);
  // Ele so vai iniciar essa função quando a tela estiver carregada.

