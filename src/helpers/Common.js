
export function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

export function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
}