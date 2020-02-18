export class Product {
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
