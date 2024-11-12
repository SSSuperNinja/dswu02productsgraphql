// facturapi.js
const Facturapi = require('facturapi').default;
const facturapi = new Facturapi('sk_test_Qo9ANzd7bqnwjEJPeR4kQYdYNVgv3pyYB60M4Da2Vm');

async function createProduct(product) {
    const facturapiProduct = {
        description: product.description,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function deleteProduct(facturapiId) {
    return await facturapi.products.del(facturapiId);
}

async function updateProduct(facturapiId, updatedProduct) {
    const facturapiProduct = {
        description: updatedProduct.description,
        product_key: "50202306", // Puedes modificar este valor si se requiere otro
        price: updatedProduct.price
    };
    return await facturapi.products.update(facturapiId, facturapiProduct);
}

module.exports = { createProduct, deleteProduct, updateProduct };