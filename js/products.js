const products = [
  {
    id: 1,
    name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      // '../assets/images/products/img.png',
      // '../assets/images/products/img (1).png',
      '../assets/images/products/3.png',
      // '../assets/images/products/4.png',
    ],
  },
  {
    id: 2,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/img (2).png',
      '../assets/images/products/3.png',
      '../assets/images/products/4.png',
      '../assets/images/products/5.png',
    ],
  },
  {
    id: 3,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/img (2).png',
      '../assets/images/products/4.png',
      '../assets/images/products/5.png',
      '../assets/images/products/6.png',
    ],
  },
  {
    id: 4,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/img (1).png',
      '../assets/images/products/5.png',
      '../assets/images/products/6.png',
      '../assets/images/products/7.png',
    ],
  },
  {
    id: 5,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/image 5.png',
      '../assets/images/products/6.png',
      '../assets/images/products/7.png',
      '../assets/images/products/8.png',
    ],
  },
  {
    id: 6,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/img (2).png',
      '../assets/images/products/7.png',
      '../assets/images/products/8.png',
      '../assets/images/products/9.png',
    ],
  },
  {
    id: 7,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/3.png',
      '../assets/images/products/8.png',
      '../assets/images/products/9.png',
      '../assets/images/products/10.png',
    ],
  },
  {
    id: 8,
   name: '599,99₽',
    description: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
    image: ['../assets/images/products/rating.png'],
    button: 'В корзину',
    images: [
      '../assets/images/products/img (1).png',
      '../assets/images/products/9.png',
      '../assets/images/products/10.png',
      '../assets/images/products/11.png',
    ],
  }
]
const cards = document.querySelector('.cards');

function displayProducts(products) {
  let str = '';
  products.forEach((product) => {
    str += `
      <div class="card">
        <img src="${product.images[0]}" />
        <div class="card-content">
          <h3>${product.name}</h3>
          <img src=${product.image}/>
          <h3>${product.button}$</h3>
        </div>
      </div>
    `;
  });
  cards.innerHTML = str;
}
displayProducts(products);
