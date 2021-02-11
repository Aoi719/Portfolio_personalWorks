const quiz = [
	{
		// 1
		question: '第1問：CSSの適用優先順位が一番高いものはどれ？',
		answers: ['インラインスタイルシート(styleタグ)', '!importantがついた指定', '内部スタイルシート', '外部スタイルシート'],
		correct: '!importantがついた指定',
	},
	{
		// 2
		question: '第2問：リスト表記の頭文字を、白抜きの「〇」にしたい場合、list-style-typeプロパティに設定する値で正しいものは？',
		answers: ['decimal', 'disc', 'circle', 'upper-roman'],
		correct: 'circle',
	},
	{
		// 3
		question: '第3問：text-decoration-lineプロパティで、波線を表示するにはどの値を指定する？',
		answers: ['underline', 'line-through', 'dashed', 'wavy'],
		correct: 'wavy',
	},
	{
		// 4
		question: '第4問：縦方向にテキストを整列させるプロパティはどれ？',
		answers: ['vertical-align', 'text-align', 'margin', 'text-decoration'],
		correct: 'vertical-align',
	},
	{
		// 5
		question: '第5問：ボックスモデルを構成する要素として正しいものを1つ選びなさい。',
		answers: ['height', 'width', 'background', 'padding'],
		correct: 'padding',
	},
	{
		// 6
		question: '第6問：ある要素の横幅に収まらない部分のテキストを非表示にする方法として正しいものを1つ選びなさい。',
		answers: ['visibility: hidden;', 'overflow: hidden;', 'overflow: scroll;', 'overflow: visible;'],
		correct: 'overflow: hidden;',
	},
	{
		// 7
		question: '第7問：セレクタとして誤っているものを1つ選びなさい。',
		answers: ['div > p', 'div + p', 'div p', 'div < p'],
		correct: 'div < p',
	},
	{
		// 8
		question: '第8問：CSSカウンタとして、連番を指定する際に使用できるプロパティは？',
		answers: ['list-style-type', 'counter-increment', 'order', 'text-transform'],
		correct: 'counter-increment',
	},
	{
		// 9
		question: '第9問：Webフォントを指定する際に使用する書式は次のうちどれ？',
		answers: ['@web-font', '@import', '@font-face', '@charset'],
		correct: '@font-face',
	},
	{
		// 10
		question: '第10問：角丸を作るためのプロパティは次のうちどれ？',
		answers: ['border', 'border-radius', 'background', 'transform'],
		correct: 'border-radius',
	}
];