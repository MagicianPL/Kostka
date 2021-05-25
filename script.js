const walls = ['<img src="img/one.jpg">', '<img src="img/two.png">', '<img src="img/three.png">', '<img src="img/four.png">', '<img src="img/five.png">', '<img src="img/six.png">'];
const ciekawostki = ['Ziemia jest jedyną planetą w naszym układzie słonecznym, której nazwa nie pochodzi od imienia boga', 'Ludzkie oczy nie zmieniają swojego rozmiaru od urodzenia', 'W Singapurze zabronione jest żucie gumy', 'Woda kokosowa może być stosowana jako osocze krwi', 'Przeciętny czterolatek zadaje średnio 400 pytań dziennie', 'George Washington w swoim ogrodzie hodował konopie', 'Dzieci mając jeszcze 4- 6 miesięcy potrafią pływać – ten naturalny instynkt zanika później i trzeba się uczyć od nowa', 'Namib to najstarsza pustynia na świecie, ponieważ ma ona aż 80 milionów lat. Rozciąga się na obszarze 1300 kilometrów', 'Kiedy w roku 1911 doszło do kradzieży „Mona Lizy” z Luwru, wśród podejrzanych znalazł się Pablo Picasso', 'W ciągu całego życia, przeciętny człowiek spędza przed telewizorem aż dziewięć lat', 'W ciągu swojego życia człowiek przebywa dystans odpowiadający dwukrotnemu okrążeniu całej planety', 'Tylko w 4% przypadków, dzieci rodzą się w wyznaczonym przez lekarza terminie', 'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni', 'Gdyby Big Ben powstał współcześnie, to kosztowałoby to 222 tysiące dolarów', 'Statua Wolności przez niemal 16 lat pełniła funkcję latarni morskiej', 'Wynajęcie na Titanicu najdroższej kajuty to koszt 870 funtów, czyli 75 tysięcy funtów według obecnego kursu', 'Muchy posiadają umiejętność widzenia w zwolnionym tempie, dlatego też tak trudno na nie „polować”', 'Ślimak, który straci oko jest w stanie wytworzyć na jego miejsce nowe oko'];

let dice = document.getElementById("dice"); //chwytam diva z obrazkiem
let ciekawostka = document.getElementById("ciekawostka"); //chwytam diva z tekstem ciekawostki

function rollingDice() {

	let randomNumberWalls = Math.floor(Math.random() * walls.length);
	let randomNumberciekawostki = Math.floor(Math.random() * ciekawostki.length);

	dice.innerHTML = walls[randomNumberWalls];
	
		if(randomNumberWalls == 5) {
		ciekawostka.innerHTML = ciekawostki[randomNumberciekawostki];
		}
		
		else
			ciekawostka.innerHTML = '<span>Tu pojawi się Twoja ciekawostka</span>';
		}
	
	
	
