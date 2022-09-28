const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      // console.log(result);
      res.redirect("/admin/products");
      console.log("Product created");
    })
    .catch((err) => console.log(err));

  // ----
  // Product.create({
  //   title,
  //   price,
  //   imageUrl,
  //   description,
  //   userId: req.user.id,
  // })
  //   .then((result) => {
  //     // console.log(result);
  //     res.redirect("/admin/products");
  //     console.log("Product created");
  //   })
  //   .catch((err) => console.log(err));

  // ----
  // const product = new Product(null, title, imageUrl, description, price);
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect("/");
  //   })
  //   .catch((err) => console.log(err));
  // res.redirect("/");
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   req.user
//     .getProducts({
//       where: {
//         id: prodId,
//       },
//     })
//     // Product.findByPk(prodId)
//     .then((products) => {
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: products[0],
//       });
//     })
//     .catch((err) => console.log(err));
//   // Product.findById(prodId, (product) => {
//   //   if (!product) {
//   //     return res.redirect("/");
//   //   }

//   //   res.render("admin/edit-product", {
//   //     pageTitle: "Edit Product",
//   //     path: "/admin/edit-product",
//   //     editing: editMode,
//   //     product,
//   //   });
//   // });
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDescription = req.body.description;
//   Product.findByPk(prodId)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.imageUrl = updatedImageUrl;
//       product.description = updatedDescription;
//       return product.save();
//     })
//     .then(() => {
//       res.redirect("/admin/products");
//       console.log("UPDATED PRODUCT");
//     })
//     .catch((err) => console.log(err));
//   // const updatedProduct = new Product(
//   //   prodId,
//   //   updatedTitle,
//   //   updatedImageUrl,
//   //   updatedDescription,
//   //   updatedPrice
//   // );
//   // updatedProduct.save();
// };

// exports.getProducts = (req, res, next) => {
//   req.user
//     .getProducts()
//     // Product.findAll()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
//   // Product.fetchAll((products) => {
//   //   res.render("admin/products", {
//   //     prods: products,
//   //     pageTitle: "Admin Products",
//   //     path: "/admin/products",
//   //   });
//   // });
// };

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId)
//     .then((product) => product.destroy())
//     .then(() => {
//       res.redirect("/admin/products");
//       console.log("DESTROYED PRODUCT");
//     })
//     .catch((err) => console.log(err));
// };