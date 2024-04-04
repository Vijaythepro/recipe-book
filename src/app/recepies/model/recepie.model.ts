import { Ingredients } from './../../shared/ingredients.model';

export class Recepie {
    name: string;
    description: string;
    imgPath: string;
    ingredients?: Ingredients[];

    constructor(n:string, desc:string, img:string, ingredient:Ingredients[]){
        this.name = n;
        this.description = desc;
        this.imgPath = img;
        this.ingredients = ingredient;
    }
}