
export class Color{

    colorId : number;
    colorName : string;

}

export class Accessory{

    accessoryId : number;
    accessoryName : string;

}

export class OrderBean{

    orderId : string;
    series : string ;
    model : string ;
    accessory : Accessory[] ;
    color : Color[] ;
    totalPrice : number;


}