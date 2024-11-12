const Facturapi = require('facturapi').default;
const facturapi = new Facturapi('sk_test_Qo9ANzd7bqnwjEJPeR4kQYdYNVgv3pyYB60M4Da2Vm');

//Productos
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

//Usuarios
async function createUser(user) {
    const facturapiUser = {
        legal_name: user.name,
        tax_id: user.rfc,
        tax_system: '608',
        email: user.email,
        address: {
            zip: String(user.zip),
        }
    };
    return await facturapi.customers.create(facturapiUser);
}

async function deleteUser(facturapiId) {
    return await facturapi.customers.del(facturapiId);
}

async function updateUser(facturapiId, updatedUser) {
    const facturapiUser = {
        legal_name: updatedUser.name,
        tax_id: updatedUser.rfc,
        email: updatedUser.email,
        address: {
            zip: updatedUser.zip,
        }
    };
    return await facturapi.customers.update(facturapiId, facturapiUser);
}

module.exports = { 
    createProduct, deleteProduct, updateProduct,
    createUser, deleteUser, updateUser
};