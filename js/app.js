function blobAnimate() {
  const blobBtn = document.querySelector('.blob-btn');
  const blobBtnImage = blobBtn.querySelector('img');
  const blobImage = document.querySelector('.blob-img');

  blobBtn.addEventListener('click', function() {
    if (blobBtnImage.classList.contains('pause')) {
      blobImage.src = 'img/blob.svg';
      blobBtnImage.src = 'img/play-solid.svg';
      blobBtnImage.alt = 'Wznów animację.';
      blobBtnImage.classList.add('padding-left');
      blobBtnImage.classList.remove('pause');
    } else {
      blobImage.src = 'img/blob-animate.svg';
      blobBtnImage.src = 'img/pause-solid.svg';
      blobBtnImage.alt = 'Zatrzymaj animację.';
      blobBtnImage.classList.remove('padding-left');
      blobBtnImage.classList.add('pause');
    }
  })
};

const init = function () {
  blobAnimate();
};

document.addEventListener('DOMContentLoaded', init);