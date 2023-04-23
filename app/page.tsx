import { Heading } from './common/components';
import ArticleList from './components/ArticleList';
import type { Article } from './components/types';

async function getArticles() {
	const res = await fetch('http://localhost:3000/api/articles', { cache: 'no-store' });

	// エラーハンドリングを行うことが推奨されている
	if (!res.ok) {
		throw new Error('Failed to fetch articles');
	}

	const data = await res.json();
	return data.articles as Article[];
}

export default async function Home() {
	const articles = await getArticles();
	// const articles = [
	// 	{
	// 		id: 1,
	// 		title: 'Article 1',
	// 		content:
	// 			'吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を',
	// 		slug: '38a88d63-7960-38f6-89d0-7eba192a53c0',
	// 		createdAt: '2019-01-03T00:00:00.000Z',
	// 		updatedAt: '2019-01-03T00:00:00.000Z',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Article 2',
	// 		content:
	// 			'日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上か',
	// 		slug: '1428cbaa-64fe-d260-e1a2-07e6c6d19e76',
	// 		createdAt: '2019-01-02T00:00:00',
	// 		updatedAt: '2019-01-02T00:00:00',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Article 3',
	// 		content:
	// 			'木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。名高い桟も、蔦のかずらを頼みにしたような危い場処ではなくなって、徳川時代の末にはすでに渡ることのできる橋であった。新規に新規にとできた道はだんだん谷の下の方の位置へと降って来た。道の狭いところには、木を伐って並べ、藤づるでからめ、それで街道の狭いのを補った。長い間にこの木曾路に起こって来た変化は、いくらかずつでも嶮岨な山坂の多いところを歩きよくした。そのかわり、大雨ごとにやって来る河水の氾濫が旅行を困難にする',
	// 		slug: '7760be51-2afa-e855-9254-be3e15359bfb',
	// 		createdAt: '2019-01-01T00:00:00',
	// 		updatedAt: '2019-01-01T00:00:00',
	// 	},
	// ];

	return (
		<>
			<Heading as="h1" mb={4}>
				新着記事
			</Heading>
			<ArticleList articles={articles} />
		</>
	);
}
