export interface product {
    name: string,
    price: number,
    category: string,
    color: string,
    image: string,
    description: string,
    id: number,
    quantity: undefined | number,
    productId: undefined | number
}
export interface Product {
    product: [];
}
export interface User {
    account: {
        name: string;
        email: string;
        password: string;
        id: string;
        createdAt: string;
    }
}