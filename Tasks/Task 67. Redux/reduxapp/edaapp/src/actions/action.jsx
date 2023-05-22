const addProduct = (product) => {
    return {
        type: "PRODUCT_ADD",
        product
    }
};

const deleteProduct = (productId) => {
    return {
        type: "PRODUCT_DELETE",
        productId
    }
};

const editProduct = (id, product) => {
    return {
        type: "PRODUCT_EDIT",
        id,
        product
    }
};

module.exports = { addProduct, deleteProduct, editProduct };