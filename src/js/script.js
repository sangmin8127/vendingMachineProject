const products = [
  { name: "아이스 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "뜨뜻한 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { name: "돌체라떼", price: 2200, url: "./src/img/imgCoffee06.png"  }
];

const user = [
  { name: "제임스", money: 15000 },
  { name: "벨라", money: 10500 },
  { name: "제이콥", money: 20000 },
  { name: "컬렌", money: 20000 },
  { name: "로잘리", money: 25000 },
  { name: "에드워드", money: 22000 }
];

// 상품 뿌려줌
let productWraps = document.querySelector('.productWrap');
productWraps.innerHTML = "";

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  console.log("제품명 : ", product.name);
  console.log("제품가격 : ", product.price);
  console.log("제품이미지 : ", product.url);
  productWraps.innerHTML +=
    `<div class="product btn--product">
    <img src="` + product.url + `" alt="아메리카노">
    <p class="productName">` + product.name + `</p>
    <div class="productPrice">` + product.price + `원</div>
    </div>`  
};

// 유저이름 & 유저금액 보여줌
let userWraps = document.querySelector('.user');
userWraps.innerHTML = "";
let moneyWraps = document.querySelector('.money');
moneyWraps.innerHTML = "";

for (let i = 0; i < user.length; i++) {
  let users = user[0];
  console.log("이름 :", users.name);
  console.log("금액", users.name);
  userWraps.innerHTML = users.name;
  moneyWraps.innerHTML = users.money;
};