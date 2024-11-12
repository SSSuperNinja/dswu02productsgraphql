const facturapi = require('../apis/facturapi');
const Product = require('../models/productModel');

const productService = {
    getProducts: async () => await Product.find(),
    createProduct: async (args) => {
        const product = new Product(args);
        const facturapiproduct = await facturapi.createProduct(product);
        product.facturapiid = facturapiproduct.id;
        return await product.save();
    },
    updateProduct: async ({ _id, ...rest }) => {
      const product = await Product.findById(_id);
      if (product && product.facturapiid) {
          await facturapi.updateProduct(product.facturapiid, rest);
      }
      return await Product.findByIdAndUpdate(_id, rest, { new: true });
  },
    deleteProduct: async (_id) => {
        const product = await Product.findById(_id);
        if (product && product.facturapiid) {
            await facturapi.deleteProduct(product.facturapiid);
        }
        return await Product.findByIdAndDelete(_id);
    }
};

module.exports = productService;
