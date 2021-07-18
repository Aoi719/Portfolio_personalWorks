//ヘッダーハンバーガーメニュー
let hamburger = document.getElementById('hamburger');
let headerMenu = document.getElementById('headerMenu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
headerMenu.addEventListener('click', function(){
  hamburger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});

// bubble
function createBubble(){
  const bubble = document.getElementById('bubble');
  const createElm = document.createElement('span');
  let size = Math.random() * 60;

  createElm.classList.add('bubble');
  createElm.style.width = 20+ size + 'px';
  createElm.style.height = 20+ size + 'px';
  createElm.style.left = Math.random() * innerWidth + 'px';
  bubble.appendChild(createElm);

  setTimeout(() => {
    createElm.remove()
  }, 15000);
}

  setInterval(createBubble, 1200);
//高さ調節
// let windowHeight = window.innerHeight;
// let header = document.getElementById('header');
// let mainVisual = document.getElementById('mainVisual');
// let video = document.querySelector('video');
// let movieBox = document.getElementById('movieBox');
// let mvBottom = document.getElementById('mvBottom');

// let headerHeight = header.offsetHeight;//ヘッダーの高さ
// let mainVisualHeight = mainVisual.offsetHeight;//メインビジュアルの高さ
// let movieBoxHeight = movieBox.offsetHeight;
// let videoHeight = video.offsetHeight;
// let mvBottomHeight = mvBottom.offsetHeight;//メインビジュアル下のインフォメーションの高さ

// // メインビジュアルの高さ変更
// mainVisualHeight = mainVisual.style.height = windowHeight - (headerHeight + mvBottomHeight) + 'px';
// movieBoxHeight = movieBox.style.height = mainVisualHeight + 'px';
// mvBottomHeight = mvBottom.style.height = windowHeight - (headerHeight + mainVisualHeight) + 'px';

// console.log(windowHeight - (headerHeight + mainVisualHeight) + 'px');
// console.log(mvBottomHeight);
// console.log('ブラウザの高さ'+ ' ' + windowHeight);
// console.log('ヘッダーの高さ'+ ' ' + headerHeight);
// console.log('メインビジュアルの高さ'+ ' ' + mainVisualHeight);
// console.log('インフォの高さ'+ ' ' + mvBottomHeight);
// console.log('ヘッダーの高さ+インフォの高さ'+ ' ' + (headerHeight + mvBottomHeight))
// console.log('ブラウザの高さ-（ヘッダーの高さ+インフォの高さ）'+ ' ' + (windowHeight - (headerHeight + mvBottomHeight)))

// mvBottom.style.height = windowHeight - (mainVisualHeight + headerHeight);

// let mvBottomHeight = mvBottom.offsetHeight;
// console.log(mvBottomHeight);

// mvBottom.style.height = mainVisualHeight;