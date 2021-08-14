const title = document.querySelector('h2');
const speakers = document.querySelectorAll('.speaker');
const audio = document.querySelector('audio');
const prev = document.querySelector('.prev');
const playBtn = document.querySelector('.play');
const next = document.querySelector('.next');

// 曲目リスト
const songList = [
	{
		path: 'audio/Cloud_9.mp3',
		songName: 'Cloud 9',
	},
	{
		path: 'audio/Highway_Right_Into_My_Soul.mp3',
		songName: 'Highway Right Into My Soul',
	},
	{
		path: 'audio/Hope.mp3',
		songName: 'Hope',
	},
	{
		path: 'audio/Make_Me_Move.mp3',
		songName: 'Make Me Move',
	},
	{
		path: 'audio/My_Heart.mp3',
		songName: 'My Heart',
	},
	{
		path: 'audio/Savage.mp3',
		songName: 'Savage',
	},
	{
		path: 'audio/Euphoria.mp3',
		songName: 'Euphoria',
	},
];

// 曲名窓の文字数を取得
function titleMove() {
	let titleStr = title.textContent.length;

	if (titleStr >= 9) {
    title.classList.add('active');
	}else{
    title.classList.remove('active');
  }
}

// 再生トリガー
let songPlaying = false;

// 曲を再生する
function playSong() {
	songPlaying = true;
	audio.play();
	// ボタンの見た目を変えるためにactiveクラスを追加
	playBtn.classList.add('active');

	// すべてのスピーカーにactiveクラスを追加
	speakers.forEach(function (speaker) {
		speaker.classList.add('active');
	});

	// アイコンを変更する
	playBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';

	// タイトル窓から曲名が飛び出す場合に曲名をスライド
	titleMove();
}

function pauseSong() {
	songPlaying = false;
	audio.pause();
	// activeクラス解除
	playBtn.classList.remove('active');

	// すべてのスピーカーにactiveクラスを追加
	speakers.forEach(function (speaker) {
		speaker.classList.remove('active');
	});

	playBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// 再生ボタンクリックで再生、再度押すと一時停止
playBtn.addEventListener('click', () => (songPlaying ? pauseSong() : playSong()));

// 曲を読み込む
function loadSong(songList) {
	title.textContent = songList.songName;
	audio.src = songList.path;
}

// 再生する曲の制御
let i = 0;
loadSong(songList[i]);

// 前の曲へ
function prevSong() {
	i--;
	if (i < 0) {
		i = songList.length - 1;
	}
	loadSong(songList[i]);
	playSong();
}
prev.addEventListener('click', function () {
	titleMove();
	prevSong();
});

// 次の曲へ
function nextSong() {
	i++;
	if (i > songList.length - 1) {
		i = 0;
	}
	loadSong(songList[i]);
	playSong();
}

next.addEventListener('click', function () {
	titleMove();
	nextSong();
});
