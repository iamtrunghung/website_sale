export interface product {
    name: string,
    price: number,
    category: string,
    image: string,
    description: string,
    id: number,
    quantity: undefined | number,
    productId: undefined | number
}
export interface Product {
    product: [];
}
export const products = [
    {
        id: 1,
        category: 'Postcards',
        name: 'Postcard V1',
        price: 23,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-1000x1000.jpg'
    },
    {
        id: 2,
        category: 'Postcards',
        name: 'Postcard V2',
        price: 17,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg'
    },
    {
        id: 3,
        category: 'Postcards',
        name: 'Postcard V3',
        price: 14,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-1000x1000.jpg'
    },
    {
        id: 4,
        category: 'Poster',
        name: 'Poster V1',
        price: 23,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg'
    },
    {
        id: 5,
        category: 'Poster',
        name: 'Poster V2',
        price: 17,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg'
    },
    {
        id: 6,
        category: 'Poster',
        name: 'Poster V3',
        price: 14,
        unit: 'ppi',
        description: 'Sending a travel postcard to a loved one is truly a thoughtful gesture that can bring joy and inspiration. Inspiration can come in the form of taking a break from the normal routine, while being reminded of the more adventurous and exotic destinations around the world.',
        image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg'
    }
];
export interface User {
    account: {
        name: string;
        email: string;
        password: string;
        id: string;
        createdAt: string;
    },
    token: {
        authorization: string;
    }
}