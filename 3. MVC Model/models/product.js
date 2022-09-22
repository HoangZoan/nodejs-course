const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  //   save() {
  //     const p = path.join(
  //       path.dirname(require.main.filename),
  //       "data",
  //       "product.json"
  //     );
  //     // Phương thức 'readFile' nhận 2 tham số:
  //     // - Tham số 1: Đường dẫn tạo ra từ 'path'
  //     // - Tham số 2: Một hàm có 2 tham số là lỗi và nội dung của file đã được đọc
  //     fs.readFile(p, (err, fileContent) => {
  //       let products = [];
  //       if (!err) {
  //         products = JSON.parse(fileContent);
  //       }

  //       products.push(this);

  //       // Hàm 'writeFile' nhận 3 tham số:
  //       // - Tham số 1: Đường dẫn 'path' đến file
  //       // - Tham số 2: Nội dung sẽ ghi vào trong file
  //       // - Tham số 3: Một hàm nhận tham số là object báo lỗi, hàm được gọi khi có lỗi
  //       // xảy ra trong quá trình viết file.
  //       fs.writeFile(p, JSON.stringify(products), (err) => {
  //         console.log(err);
  //       });
  //     });
  //   }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    });
  }
};
