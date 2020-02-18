import {Product} from './product';

export class Category {
  id: number;
  name: string;
  products: Product[];

  constructor(id: number, name: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}

export const categories: Category[] = [
  new Category(1, 'Clothes', [
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
    ,
    new Product('Новинка 2015, надувной Забавный сексуальный женский костюм, барменка' +
      ', сексуальная официантка, сексуальное платье для ночного клуба, праздника, надувной сексуальный костюм',
      9570.79,
      'https://aliexpress.ru/item/1855570429.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
      4.6,
      'https://ae01.alicdn.com/kf/HTB12LEneL5G3KVjSZPxq6zI3XXaj/2015.jpg')
  ]),

  new Category(2, 'Accessories', [
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
      'https://ae01.alicdn.com/kf/HTB1AbVUcEuF3KVjSZK9q6zVtXXat/Nicholas.jpg')
  ]),

  new Category(3, 'KOSMETIKA', [
    new Product('60 шт./бутылка, паста для пупка, прикрепленная к Южному дивизиону, палочки для прижигания,' +
      ' Longan Ai Ye Pepper Ai Paste, теплая паста для дворца',
      4160.23,
      'https://aliexpress.ru/item/32878250492.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
      5,
      'https://ae01.alicdn.com/kf/HTB1bBbtsN9YBuNjy0Ffq6xIsVXaH/60.jpg'),
    new Product('Белые пигменты диоксида титана в косметическом сорте, косметические материалы порошок для ' +
      'губ, косметика краситель окрашивания',
      9419.74,
      'https://aliexpress.ru/item/32844973553.html?spm=a2g0o.productlist.0.0.464a68e9EEQcug&algo_pvid=14b34191-fd2f-' +
      '4b97-b838-5d01889ee9f8&algo_expid=14b34191-fd2f-4b9' +
      '7-b838-5d01889ee9f8-5&btsid=0ab6f82415820248837391039e633b&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      4.3,
      'https://ae01.alicdn.com/kf/HTB1Yxl0i_TI8KJjSsphq6AFppXa4/-.jpg')
  ]),

  new Category(4, 'Furniture', [
    new Product('Бытовая Роскошная сухой пар и влажная Паровая душевая комната Интегральная ванная комната бревна стекло для сауны',
      4242064.76,
      'https://aliexpress.ru/item/4000167007727.html?spm=a2g0s.8937460.0.0.19cf2e0eu88w5a',
      0,
      'https://ae01.alicdn.com/kf/Hfed3457b54794e1ea00e48af79d6c261d/-.jpg'),
    new Product('Карнавал пространство-время туннель огромный город подземный проект ЖК видеостена',
      37678563,
      'https://aliexpress.ru/item/4000527428292.html?spm=a2g0o.productlist.0.0.d701887a6qHpvZ&algo' +
      '_pvid=59e94f49-a051-405e-9901-3bd01dd1b24d&algo_expid=59e94f49-a051-405e-9901-3bd01dd1b24d-0&btsid=0ab' +
      '6f82415820242789821886e633b&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
      0,
      'https://ae01.alicdn.com/kf/H24fe4211ac9a4f6d90c6cd13f3e137b7Y/-.jpg')
  ]),

  new Category(6, 'Party Hard', [
    new Product('Ручная Кепка Пикачу, мягкая Кепка для косплея амигуруми, плюшевые игрушки, коллекция ' +
      'Пикачу, плюшевые куклы, игрушки для детей, рождественский подарок',
      6021,
      'https://aliexpress.ru/item/33003218383.html?spm=a2g0s.8937460.0.0.58722e0e3KXGrt',
      0,
      'https://ae01.alicdn.com/kf/HTB108lKRkvoK1RjSZPfq6xPKFXaq/-.jpg'),
    new Product('Бесплатная доставка элегантные женские костюмы Спрей огонь ' +
      'бюстгальтер/костюм для ночного клуба/платье Диско/платье для ночного клуба',
      98944,
      'https://aliexpress.ru/item/33054182132.html?spm=a2g0s.8937460.0.0.58722e0e3KXGrt',
      0,
      'https://ae01.alicdn.com/kf/UTB8OKs3wdnJXKJkSaiyq6AhwXXa5/-.jpg'),
    new Product('Диско зеркало мяч шлем маска зеркальный костюм для DJ ночной клуб ' +
      'музыкальный фестиваль танец зеркало для вечеринки мужчины шоу зеркало девушки',
      25998,
      'https://aliexpress.ru/item/4000135254809.html?spm=a2g0s.8937460.0.0.58722e0e3KXGrt',
      5,
      'https://ae01.alicdn.com/kf/H4990a16197d343d08ecfd44a43d70b35q/DJ.jpg'),
    new Product('Напольная гигантская надувная резиновая модель утки желтая плавающая утка' +
      ' для бассейна озеро рекламы воды игрушки ПВХ 6 м/8 м/10 м Высокое для продажи',
      413714,
      'https://aliexpress.ru/item/4000161038914.html?spm=a2g0s.8937460.0.0.58722e0eDBMIVK',
      0,
      'https://ae01.alicdn.com/kf/H42bcc7c15be84e2182e850cf15dbb51dm/-.jpg'),

  ]),

  new Category(7, '?', [
    new Product('Мужские ноги манекена носок дисплей/гибкий мягкий силиконовый материал',
      51150.30,
      'https://aliexpress.ru/item/32346932695.html?spm=a2g0s.8937460.0.0.1f3b2e0eiMwuPP',
      0,
      'https://ae01.alicdn.com/kf/HTB1SVRlHVXXXXarXFXXq6xXFXXXy/-.jpg')
  ])
];
