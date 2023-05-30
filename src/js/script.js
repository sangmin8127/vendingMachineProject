const products = [
  { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
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
  `<div class="product btn--product" onclick="productBtn(this)">
  <img class="productImg" src="` + product.url + `" alt="상품이미지">
  <p class="productName">` + product.name + `</p>
  <div class="productPrice">` + product.price + `</div>
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

// 상품 클릭시 아래 선택상품에 제품명, 가격 노출.
// 이미 뿌려진 상품들이 클릭되면 onclick="productBtn(this)" 함수 실행됨.
productChioceName.innerHTML = "";
productChiocePrice.innerHTML = "";

function productBtn(element) {
  proImg = element.querySelector('.productImg').src;
  proName = element.querySelector('.productName').innerHTML;
  proPrice = element.querySelector('.productPrice').innerHTML;
  console.log("this :", proImg, proName, proPrice);
  productChioceImg.src = proImg;
  productChioceName.innerHTML = proName;
  productChiocePrice.innerHTML = proPrice;
};

// 투입금액 버튼 클릭 시 금액합산해서 보여줌.
let sum = 0;
let proPrice = productChiocePrice.innerHTML;
let proName = productChioceName.innerHTML;

function calc(button) {
  if(button) {
    sum+= parseInt(button.value);		
  }
	else {
    sum-= button.value;
  }
	if(sum <= proPrice) {
    console.log("proPrice : ", proPrice);
    productInsertPrice.innerHTML = sum;
  } 
  else {
    alert("총합은 상품가격을 넘을 수 없습니다.");
    sum -= parseInt(button.value);
  }
  if(sum == 2200) {
    console.log("2200원입니다.")
  }
  else if(sum == 2200) {
    console.log("2200원입니다.")
  }
  else if(proPrice == "" || proName == "") {
    alert("상품을 먼저 선택해주세요.")
  }
}
//parseInt를 안하면 값이 더하기가 안되고 옆에 붙여넣기가 됨
//this는 이 버튼을 클릭했을 때 참조값
//function()에 들어갈 변수이름은 아무거나

// 초기화 버튼
function reset() {
  sum = 0;
  productInsertPrice.innerHTML = sum + `원`;
}
