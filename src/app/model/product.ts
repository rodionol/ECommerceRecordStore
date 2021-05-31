export class Product {

    constructor(
        public id: number,
        public productImageUrl : string,
        public recordTitle: string,
        public artist: string, 
        public year: string,
        public price: number,
        public genre: string
    ) {}

}