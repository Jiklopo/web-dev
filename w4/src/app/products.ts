class Product {
  name: string;
  price: number;
  link: string;
  rating: number;
  imagesLinks: string;
  constructor(name: string, price: number, link: string, rating: number, imagesLink: string) {
    this.price = price;
    this.imagesLinks = imagesLink;
    this.link = link;
    this.name = name;
    this.rating = rating;
  }
}

export const products = [
  new Product('Футболка с Путиным, футболка с коротким рукавом для верховой езды, ' +
    'Милая футболка с принтом, летняя Хлопковая мужская футболка больших размеров',
    3387.29, 'https://aliexpress.ru/item/4000039801840.html?spm=a2g0s.8937460.0.0.19cf2e0eJIA2VZ',
    4.9,
    'https://ae01.alicdn.com/kf/H7babd37d4e194a728bea1943152bb8133/-.jpg'),
  new Product('Путина с пикантные козырь на столе забавные Анти-Трамп в виде майки-футболки брендовая модная футболка',
    3220.58,
    'https://aliexpress.ru/item/4000147944616.html?spm=a2g0s.8937460.0.0.19cf2e0eJIA2VZ',
    3.6,
    'https://ae01.alicdn.com/kf/H57f03344306d459a87df85bbe44462a83/-.jpg'),
  new Product('Трансформеры Мегатрон Косплей Костюм экран детальный носимый Косплей Костюм',
    966172.31,
    'https://aliexpress.ru/item/33059189086.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    5,
    'https://ae01.alicdn.com/kf/HTB1YKbGX7L0gK0jSZFxq6xWHVXaV/-.jpg'),
  new Product('100x137 см/шт. 0,1 мм/0,3 мм ТПУ дизайнерская ткань ультра ' +
    'перспективный плащ для одежды водоистончение кристальная пластиковая ткань',
    4175.38,
    'https://aliexpress.ru/item/32861397385.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    4,
    'https://ae01.alicdn.com/kf/HTB1b6g9khWYBuNjy1zkq6xGGpXao/100x137-0-1-0-3.jpg'),
  new Product('Бытовая Роскошная сухой пар и влажная Паровая душевая комната Интегральная ванная комната бревна стекло для сауны',
    4242064.76,
    'https://aliexpress.ru/item/4000167007727.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    0,
    'https://ae01.alicdn.com/kf/Hfed3457b54794e1ea00e48af79d6c261d/-.jpg'),
  new Product('60 шт./бутылка, паста для пупка, прикрепленная к Южному дивизиону, палочки для прижигания,' +
    ' Longan Ai Ye Pepper Ai Paste, теплая паста для дворца',
    4160.23,
    'https://aliexpress.ru/item/32878250492.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    5,
    'https://ae01.alicdn.com/kf/HTB1bBbtsN9YBuNjy0Ffq6xIsVXaH/60.jpg'),
  new Product('Забавный графический принт сумки на плечо для женщин Николя клетка кролик' +
    ' одного плеча рюкзак путешествия для мужчин спортивная сумка',
    2489.32,
    'https://aliexpress.ru/item/33040666789.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    4,
    'https://ae01.alicdn.com/kf/HTB1LQYJcQWE3KVjSZSyq6xocXXaw/-.jpg'),
  new Product('Забавные Наплечные сумки с графическим принтом для женщин Nicholas Cage с рисунком лица (2)' +
    ' рюкзак на одно плечо для путешествий для мужчин спортивная сумка',
    2489.32,
    'https://aliexpress.ru/item/33039959961.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    4.8,
    'https://ae01.alicdn.com/kf/HTB1AbVUcEuF3KVjSZK9q6zVtXXat/Nicholas.jpg'),
  new Product('Новинка 2015, надувной Забавный сексуальный женский костюм, барменка' +
    ', сексуальная официантка, сексуальное платье для ночного клуба, праздника, надувной сексуальный костюм',
    9570.79,
    'https://aliexpress.ru/item/1855570429.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
    4.6,
    'https://ae01.alicdn.com/kf/HTB12LEneL5G3KVjSZPxq6zI3XXaj/2015.jpg'),
  new Product('Мужские ноги манекена носок дисплей/гибкий мягкий силиконовый материал',
    51150.30,
    'https://aliexpress.ru/item/32346932695.html?spm=a2g0s.8937460.0.0.1f3b2e0eiMwuPP',
    0,
    'https://ae01.alicdn.com/kf/HTB1SVRlHVXXXXarXFXXq6xXFXXXy/-.jpg')
];
