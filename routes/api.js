var express = require('express');
var router = express.Router();


// 使用 npm start開啟伺服器
// 預設網址: http://localhost:3000/

// 每次更新，都要重啟伺服器，畫面才會做更新。(跟使用Vue Cli不一樣)
// 也可使用VS Code的 執行與偵錯 來做更新 (不過要先把伺服器給關掉)


// 模擬簡易資料庫
const data = [
  {
    id: 'A2021B07C22',
    title: '煒皓好棒棒',
  }
]

// GET方法
// 自定義API路徑: http://localhost:3000/api/products
router.get('/products', function(req, res, next) {

  // 自定義Http狀態碼
  res.status(200);
  
  // 將資料送回去客戶端
  res.send({
    success: true,
    data,
  });

  // 結束請求
  res.end();

});

// POST方法
// 自定義API路徑: http://localhost:3000/api/product
router.post('/product', function(req, res) {

  // 接收資料
  const product = req.body;

  // 存入資料
  data.push({
    ...product,
    id: new Date().getTime(),
  })

  // 將資料送回去客戶端
  res.send({
    success: true,
    data,
  });

  // 結束請求
  res.end();

});



// Delete方法
// 自定義API路徑: http://localhost:3000/api/product/:id
// :做開頭加上id，屬於動態型式
router.delete('/product/:id', function(req, res) {

  // 取得商品id
  const id = req.params.id;
  console.log(id);

  // 刪除該品項商品
  data.forEach((item, key) => {
    if (item.id == id) { // 型別需轉換
      data.splice(key, 1);
    }
  })

  // 將資料送回去客戶端
  res.send({
    success: true,
    data,
  });

  // 結束請求
  res.end();

});

module.exports = router;
