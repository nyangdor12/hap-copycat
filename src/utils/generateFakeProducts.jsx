import { faker } from "@faker-js/faker";

const generateFakeProduct = () => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        desc: faker.commerce.productDescription(),
        depart: faker.commerce.department(),
        price: faker.commerce.price(),
        thumb: faker.image.urlLoremFlickr({ category: 'fashion' }),
        qty: 1
    };
}

export const generateFakeProducts = length =>{
    const products = [];

    Array.from({ length: length}).forEach(() => {
        products.push(generateFakeProduct());
    })

    return products;

}
