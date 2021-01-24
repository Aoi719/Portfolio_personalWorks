/*-----------------
講師セクション
-----------------*/
let images = [
  {
    "path": "images/teacher_vocal.jpg",
    "teacher":'井上知子',
    "tdata":'宮崎県出身 O型',
    "comment": "ボーカル学科を担当。実力派ボーカリスト・浅沼景子に師事し、歌唱法を学ぶ。その後は有名音楽イベントでのソロ歌唱のほか、有名アーティストのバックコーラスも数多く担当するなど様々な経験を持つ。自身の音楽活動の傍ら、ボーカルコーチとして300名以上に指導を行うなど後進育成にも尽力している。"
  },
  {
    "path": "images/teacher_guitar.jpg",
    "teacher":'毛利清茂',
    "tdata":'山口県出身　A型',
    "comment": "ギター学科を担当。浦田亜久理率いるバンド「エアロミュージック」や金野正次など数々のアーティストのバックバンドにてギターを演奏。<br>ロック、ジャズ、レゲエ、ボサノバ、フュージョンなど多種多様なジャンルの演奏経験を持ち、その幅広い経験から生み出される一流のテクニックを生徒に教えている。"
  },
  {
    "path": "images/teacher_bass.jpg",
    "teacher":'岩崎元',
    "tdata":'兵庫県出身　O型',
    "comment": "ベース学科を担当。栗山結香やバンド「ボルドーズ」などのサポートミュージシャンとして活躍するほか、自身のバンド「グラスシード」でも2枚のアルバムをリリース。また、近年は音楽レッスン教室の講師として後進育成にも尽力している。"
  },
  {
    "path": "images/teacher_drum.jpg",
    "teacher":'川端樹',
    "tdata":'埼玉県出身　B型',
    "comment": "ドラム学科を担当。様々なアーティストのライブや音楽フェスなどでサポートドラムを担当。また、岩崎と同じくバンド「グラスシード」にも所属し、2枚のアルバムをリリースしている。数々の生演奏経験から培われたアンサンブルを重視した授業を行なっている。"
  },
  {
    "path": "images/teacher_dtm_songwriting.jpg",
    "teacher":'三井美菜',
    "tdata":'埼玉県　O型',
    "comment": "DTM学科および作詞・作曲学科を担当。音楽クリエイターの木原利夫氏に師事し作詞作曲・編曲技術を習得。その後は数々の有名アーティストへの楽曲提供を行なう。自身もクリエイターとしてインターネット上に楽曲を公開しており、作品の総再生回数は2万回を越える。"
  }
]

// 画像の枚数だけ繰り返してデータを表示
for (let i = 0; i<images.length; i++){
  // 大きな箱となるdivを取得
  let container = document.getElementById('js-box')

  // img要素を生成
  let img = document.createElement('img');
  img.setAttribute('src', images[i].path);

  // p要素を生成
  let para1 = document.createElement('p');
  para1.className = 'align-center';
  para1.innerHTML = '<span class="f_b fzl t_name">' + images[i].teacher + '</span>' + '<br>' + images[i].tdata + '</span>';

  let para2 = document.createElement('p');
  para2.innerHTML = images[i].comment;

  // imgとpを包むdiv要素を生成
  let box = document.createElement('div');
  box.className = 'box clearfix';

  // 要素の出力
  box.appendChild(img);
  box.appendChild(para1);
  box.appendChild(para2);
  container.appendChild(box);
}