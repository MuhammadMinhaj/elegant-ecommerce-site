const productsData = [
  {
    title: 'Apple MacBook Air 13.3-Inch',
    price: 800,
    discount: 15,
    ratings: 3,
    images: ['https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/MGN73/macbook-mgn73Zp-a-228x228.jpg'],
    path: '/',
    statusText: 'New',
    statusType: 'news'
  },
  {
    title: 'Razer Blade 15 Advanced Model i7',
    price: 500,
    discount: 12,
    ratings: 4,
    images: ['https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-advanced-model/blade-15-advanced-model-01-228x228.jpg'],
    path: '/',
    statusText: 'Hot',
    statusType: 'hots'
  },
  {
    title: 'Razer Kraken X Headset and DeathAdder',
    price: 300,
    discount: 10,
    ratings: 5,
    images: ['https://www.startech.com.bd/image/cache/catalog/combo/kraken-x-headset-and-deathadder-essential/kraken-x-headset-and-deathadder-essential-228x228.jpg'],
    path: '/',
    statusText: null,
    statusType: null
  }
];

export default {

  topProducts: [...productsData, ...productsData],
  products: [...productsData, ...productsData, ...productsData.slice(0, 2)]

};
