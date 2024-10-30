import c1 from './candle1.png'
import c2 from './p1.png'
import c3 from './p2.png'
import c4 from './p3.png'
import bm1 from './bm1.png'
import bm2 from './bm2.png'
import bm3 from './bm3.png'
import bm4 from './bm4.png'
import bm5 from './bm5.png'
import bb1 from './bb1.jpg'
import bb2 from './bb2.jpg'
import bb3 from './bb3.jpg'
import bb4 from './bb4.jpg'
import bs1 from './bs1.png'
import bs2 from './bs2.png'
import bs3 from './bs3.png'
import bs4 from './bs4.png'
import ss1 from './ss1.jpg'
import ss2 from './ss2.jpg'
import ss3 from './ss3.jpg'
import ss4 from './ss4.jpg'
import ss5 from './ss5.jpg'

let products = [
  // Candles
  {
    id: 1,
    category: 'Candles',
    name: 'Oh Jackie',
    description: 'Rose flavored Candle',
    price: 5.99,
    image: [c1, c1, c1, c1],
  },
  {
    id: 2,
    category: 'Candles',
    name: 'Fairytale Garden',
    description: 'Nature flavored Candle',
    price: 6.99,
    image: [c2, c2, c2, c2],
  },
  {
    id: 3,
    category: 'Candles',
    name: 'Ocean Mist',
    description: 'Refreshing Ocean Scent Candle',
    price: 4.99,
    image: [c3, c3, c3, c3],
  },
  {
    id: 4,
    category: 'Candles',
    name: 'Vanilla Sky',
    description: 'Sweet Vanilla Scent Candle',
    price: 7.49,
    image: [c4, c4, c4, c4],
  },
  {
    id: 5,
    category: 'Candles',
    name: 'Citrus Delight',
    description: 'Zesty Citrus Scent Candle',
    price: 5.49,
    image: [c3, c3, c3, c3],
  },
  {
    id: 6,
    category: 'Candles',
    name: 'Midnight Jasmine',
    description: 'Sensual Jasmine Scent Candle',
    price: 6.49,
    image: [c4, c4, c4, c4],
  },
  {
    id: 7,
    category: 'Candles',
    name: 'Cinnamon Spice',
    description: 'Warm Cinnamon Scent Candle',
    price: 5.99,
    image: [c2, c2, c2, c2],
  },
  {
    id: 8,
    category: 'Candles',
    name: 'Vanilla Bean',
    description: 'Classic Vanilla Scent Candle',
    price: 7.99,
    image: [c1, c1, c1, c1],
  },
  {
    id: 9,
    category: 'Candles',
    name: 'Sweet Pea',
    description: 'Floral Sweet Pea Candle',
    price: 5.49,
    image: [c1, c1, c1, c1],
  },
  {
    id: 10,
    category: 'Candles',
    name: 'Autumn Leaves',
    description: 'Warm Autumn Scent Candle',
    price: 6.49,
    image: [c3, c3, c3, c3],
  },

  // Bath Milks
  {
    id: 11,
    category: 'Bath Milks',
    name: 'Roseberry Bliss',
    description: 'Rose and Berry infused Bath Milk',
    price: 4.99,
    image: [bm1, bm1, bm1, bm1],
  },
  {
    id: 12,
    category: 'Bath Milks',
    name: 'Coconut Cream',
    description: 'Rich Coconut Bath Milk for silky skin',
    price: 5.99,
    image: [bm2, bm2, bm2, bm2],
  },
  {
    id: 13,
    category: 'Bath Milks',
    name: 'Oatmeal Comfort',
    description: 'Soothing Oatmeal Bath Milk',
    price: 6.49,
    image: [bm3, bm3, bm3, bm3],
  },
  {
    id: 14,
    category: 'Bath Milks',
    name: 'Honey & Almond',
    description: 'Moisturizing Honey and Almond Bath Milk',
    price: 6.99,
    image: [bm4, bm4, bm4, bm4],
  },
  {
    id: 15,
    category: 'Bath Milks',
    name: 'Lavender Dream',
    description: 'Calming Lavender Bath Milk',
    price: 5.49,
    image: [bm5, bm5, bm5, bm5],
  },
  {
    id: 16,
    category: 'Bath Milks',
    name: 'Milk & Honey',
    description: 'Nourishing Milk and Honey Bath Milk',
    price: 6.99,
    image: [bm1, bm1, bm1, bm1],
  },
  {
    id: 17,
    category: 'Bath Milks',
    name: 'Coconut & Vanilla',
    description: 'Exotic Coconut and Vanilla Bath Milk',
    price: 5.99,
    image: [bm2, bm2, bm2, bm2],
  },
  {
    id: 18,
    category: 'Bath Milks',
    name: 'Almond & Milk',
    description: 'Hydrating Almond and Milk Bath Milk',
    price: 6.49,
    image: [bm3, bm3, bm3, bm3],
  },
  {
    id: 19,
    category: 'Bath Milks',
    name: 'Cocoa Bliss',
    description: 'Rich Cocoa Bath Milk',
    price: 5.99,
    image: [bm4, bm4, bm4, bm4],
  },
  {
    id: 20,
    category: 'Bath Milks',
    name: 'Vanilla Bean',
    description: 'Creamy Vanilla Bath Milk',
    price: 5.99,
    image: [bm5, bm5, bm5, bm5],
  },

  // Bath Bombs
  {
    id: 21,
    category: 'Bath Bombs',
    name: 'Lemon Fizz',
    description: 'Citrus Scent Bath Bomb',
    price: 3.99,
    image: [bb1, bb1, bb1, bb1],
  },
  {
    id: 22,
    category: 'Bath Bombs',
    name: 'Lavender Calm',
    description: 'Relaxing Lavender Bath Bomb',
    price: 4.49,
    image: [bb2, bb2, bb2, bb2],
  },
  {
    id: 23,
    category: 'Bath Bombs',
    name: 'Tropical Escape',
    description: 'Exotic Tropical Scent Bath Bomb',
    price: 4.99,
    image: [bb3, bb3, bb3, bb3],
  },
  {
    id: 24,
    category: 'Bath Bombs',
    name: 'Peppermint Burst',
    description: 'Refreshing Mint Bath Bomb',
    price: 3.49,
    image: [bb4, bb4, bb4, bb4],
  },
  {
    id: 25,
    category: 'Bath Bombs',
    name: 'Rose Garden',
    description: 'Floral Rose Scent Bath Bomb',
    price: 4.99,
    image: [bb1, bb1, bb1, bb1],
  },
  {
    id: 26,
    category: 'Bath Bombs',
    name: 'Cherry Blossom',
    description: 'Delicate Cherry Blossom Bath Bomb',
    price: 4.49,
    image: [bb2, bb2, bb2, bb2],
  },
  {
    id: 27,
    category: 'Bath Bombs',
    name: 'Citrus Splash',
    description: 'Refreshing Citrus Scent Bath Bomb',
    price: 3.99,
    image: [bb3, bb3, bb3, bb3],
  },
  {
    id: 28,
    category: 'Bath Bombs',
    name: 'Spicy Cinnamon',
    description: 'Warm Cinnamon Scent Bath Bomb',
    price: 4.49,
    image: [bb4, bb4, bb4, bb4],
  },
  {
    id: 29,
    category: 'Bath Bombs',
    name: 'Vanilla Dream',
    description: 'Sweet Vanilla Scent Bath Bomb',
    price: 4.99,
    image: [bb1, bb1, bb1, bb1],
  },
  {
    id: 30,
    category: 'Bath Bombs',
    name: 'Ocean Breeze',
    description: 'Fresh Ocean Scent Bath Bomb',
    price: 3.49,
    image: [bb2, bb2, bb2, bb2],
  },

  // Bath Salts
  {
    id: 31,
    category: 'Bath Salts',
    name: 'Milk & Honey Bath Salt',
    description: 'Moisturizing Bath Salt with Milk and Honey',
    price: 3.49,
    image: [bs1, bs1, bs1, bs1],
  },
  {
    id: 32,
    category: 'Bath Salts',
    name: 'Lavender Bath Salt',
    description: 'Relaxing Lavender Bath Salt',
    price: 4.49,
    image: [bs2, bs2, bs2, bs2],
  },
  {
    id: 33,
    category: 'Bath Salts',
    name: 'Rose Petal Bath Salt',
    description: 'Delicate Rose Bath Salt',
    price: 4.99,
    image: [bs3, bs3, bs3, bs3],
  },
  {
    id: 34,
    category: 'Bath Salts',
    name: 'Coconut Bath Salt',
    description: 'Hydrating Coconut Bath Salt',
    price: 3.99,
    image: [bs4, bs4, bs4, bs4],
  },
  {
    id: 35,
    category: 'Bath Salts',
    name: 'Orange Zest Bath Salt',
    description: 'Refreshing Orange Bath Salt',
    price: 3.49,
    image: [bs1, bs1, bs1, bs1],
  },
  {
    id: 36,
    category: 'Bath Salts',
    name: 'Cucumber Melon Bath Salt',
    description: 'Refreshing Cucumber and Melon Bath Salt',
    price: 4.49,
    image: [bs2, bs2, bs2, bs2],
  },
  {
    id: 37,
    category: 'Bath Salts',
    name: 'Charcoal Bath Salt',
    description: 'Detoxifying Charcoal Bath Salt',
    price: 5.49,
    image: [bs3, bs3, bs3, bs3],
  },
  {
    id: 38,
    category: 'Bath Salts',
    name: 'Cocoa Butter Bath Salt',
    description: 'Rich Cocoa Butter Bath Salt',
    price: 4.99,
    image: [bs4, bs4, bs4, bs4],
  },
  {
    id: 39,
    category: 'Bath Salts',
    name: 'Aloe Vera Bath Salt',
    description: 'Soothing Aloe Vera Bath Salt',
    price: 3.99,
    image: [bs1, bs1, bs1, bs1],
  },
  {
    id: 40,
    category: 'Bath Salts',
    name: 'Coffee Shower Streamer Bath Salt',
    description: 'Exfoliating Coffee Shower Streamer Bath Salt',
    price: 4.99,
    image: [bs2, bs2, bs2, bs2],
  },

  // Shower Streamers
  {
    id: 41,
    category: 'Shower Streamers',
    name: 'Lavender Shower Streamer',
    description: 'Soothing Lavender Sugar Shower Streamer',
    price: 7.99,
    image: [ss1, ss1, ss1, ss1],
  },
  {
    id: 42,
    category: 'Shower Streamers',
    name: 'Coconut Shower Streamer',
    description: 'Nourishing Coconut Sugar Shower Streamer',
    price: 8.99,
    image: [ss2, ss2, ss2, ss2],
  },
  {
    id: 43,
    category: 'Shower Streamers',
    name: 'Coffee Shower Streamer',
    description: 'Exfoliating Coffee Sugar Shower Streamer',
    price: 7.49,
    image: [ss3, ss3, ss3, ss3],
  },
  {
    id: 44,
    category: 'Shower Streamers',
    name: 'Vanilla Shower Streamer',
    description: 'Sweet Vanilla Sugar Shower Streamer',
    price: 8.49,
    image: [ss4, ss4, ss4, ss4],
  },
  {
    id: 45,
    category: 'Shower Streamers',
    name: 'Berry Bliss Shower Streamer',
    description: 'Fruity Berry Sugar Shower Streamer',
    price: 7.99,
    image: [ss5, ss5, ss5, ss5],
  },
  {
    id: 46,
    category: 'Shower Streamers',
    name: 'Chocolate Shower Streamer',
    description: 'Indulgent Chocolate Sugar Shower Streamer',
    price: 8.99,
    image: [ss1, ss1, ss1, ss1],
  },
  {
    id: 47,
    category: 'Shower Streamers',
    name: 'Sea Salt Shower Streamer',
    description: 'Refreshing Sea Salt Shower Streamer',
    price: 7.49,
    image: [ss2, ss2, ss2, ss2],
  },
  {
    id: 48,
    category: 'Shower Streamers',
    name: 'Peppermint Shower Streamer',
    description: 'Refreshing Peppermint Sugar Shower Streamer',
    price: 8.49,
    image: [ss3, ss3, ss3, ss3],
  },
  {
    id: 49,
    category: 'Shower Streamers',
    name: 'Cinnamon Shower Streamer',
    description: 'Warm Cinnamon Sugar Shower Streamer',
    price: 7.99,
    image: [ss4, ss4, ss4, ss4],
  },
  {
    id: 50,
    category: 'Shower Streamers',
    name: 'Orange Shower Streamer',
    description: 'Citrus Orange Sugar Shower Streamer',
    price: 8.99,
    image: [ss5, ss5, ss5, ss5],
  },
]

export default products

// import c1 from './candle1.png'
// import c2 from './p1.png'
// import c3 from './p2.png'
// import c4 from './p3.png'
// import bm1 from './bm1.png'
// import bm2 from './bm2.png'
// import bm3 from './bm3.png'
// import bm4 from './bm4.png'
// import bm5 from './bm5.png'
// import bb1 from './bb1.jpg'
// import bb2 from './bb2.jpg'
// import bb3 from './bb3.jpg'
// import bb4 from './bb4.jpg'
// import bs1 from './bs1.png'
// import bs2 from './bs2.png'
// import bs3 from './bs3.png'
// import bs4 from './bs4.png'
// import ss1 from './ss1.jpg'
// import ss2 from './ss2.jpg'
// import ss3 from './ss3.jpg'
// import ss4 from './ss4.jpg'
// import ss5 from './ss5.jpg'

// let products = [
//   // Candles
//   {
//     id: 1,
//     category: 'Candles',
//     name: 'Oh Jackie',
//     description: 'Rose flavored Candle',
//     price: 5.99,
//     image: c1,
//   },
//   {
//     id: 2,
//     category: 'Candles',
//     name: 'Fairytale Garden',
//     description: 'Nature flavored Candle',
//     price: 6.99,
//     image: c2,
//   },
//   {
//     id: 3,
//     category: 'Candles',
//     name: 'Ocean Mist',
//     description: 'Refreshing Ocean Scent Candle',
//     price: 4.99,
//     image: c3,
//   },
//   {
//     id: 4,
//     category: 'Candles',
//     name: 'Vanilla Sky',
//     description: 'Sweet Vanilla Scent Candle',
//     price: 7.49,
//     image: c4,
//   },
//   {
//     id: 5,
//     category: 'Candles',
//     name: 'Citrus Delight',
//     description: 'Zesty Citrus Scent Candle',
//     price: 5.49,
//     image: c3,
//   },
//   {
//     id: 6,
//     category: 'Candles',
//     name: 'Midnight Jasmine',
//     description: 'Sensual Jasmine Scent Candle',
//     price: 6.49,
//     image: c4,
//   },
//   {
//     id: 7,
//     category: 'Candles',
//     name: 'Cinnamon Spice',
//     description: 'Warm Cinnamon Scent Candle',
//     price: 5.99,
//     image: c2,
//   },
//   {
//     id: 8,
//     category: 'Candles',
//     name: 'Vanilla Bean',
//     description: 'Classic Vanilla Scent Candle',
//     price: 7.99,
//     image: c1,
//   },
//   {
//     id: 9,
//     category: 'Candles',
//     name: 'Sweet Pea',
//     description: 'Floral Sweet Pea Candle',
//     price: 5.49,
//     image: c1,
//   },
//   {
//     id: 10,
//     category: 'Candles',
//     name: 'Autumn Leaves',
//     description: 'Warm Autumn Scent Candle',
//     price: 6.49,
//     image: c3,
//   },
//   {
//     id: 46,
//     category: 'Candles',
//     name: 'new',
//     description: 'Soothing Vanilla Shower Steamer',
//     price: 4.99,
//     image: c4,
//   },

//   // Bath Milks
//   {
//     id: 11,
//     category: 'Bath Milks',
//     name: 'Roseberry Bliss',
//     description: 'Rose and Berry infused Bath Milk',
//     price: 4.99,
//     image: bm1,
//   },
//   {
//     id: 12,
//     category: 'Bath Milks',
//     name: 'Coconut Cream',
//     description: 'Rich Coconut Bath Milk for silky skin',
//     price: 5.99,
//     image: bm2,
//   },
//   {
//     id: 13,
//     category: 'Bath Milks',
//     name: 'Oatmeal Comfort',
//     description: 'Soothing Oatmeal Bath Milk',
//     price: 6.49,
//     image: bm3,
//   },
//   {
//     id: 14,
//     category: 'Bath Milks',
//     name: 'Honey & Almond',
//     description: 'Moisturizing Honey and Almond Bath Milk',
//     price: 6.99,
//     image: bm4,
//   },
//   {
//     id: 15,
//     category: 'Bath Milks',
//     name: 'Lavender Dream',
//     description: 'Calming Lavender Bath Milk',
//     price: 5.49,
//     image: bm5,
//   },
//   {
//     id: 16,
//     category: 'Bath Milks',
//     name: 'Milk & Honey',
//     description: 'Nourishing Milk and Honey Bath Milk',
//     price: 6.99,
//     image: bm1,
//   },
//   {
//     id: 17,
//     category: 'Bath Milks',
//     name: 'Coconut & Vanilla',
//     description: 'Exotic Coconut and Vanilla Bath Milk',
//     price: 5.99,
//     image: bm2,
//   },
//   {
//     id: 18,
//     category: 'Bath Milks',
//     name: 'Almond & Milk',
//     description: 'Hydrating Almond and Milk Bath Milk',
//     price: 6.49,
//     image: bm3,
//   },
//   {
//     id: 19,
//     category: 'Bath Milks',
//     name: 'Cocoa Bliss',
//     description: 'Rich Cocoa Bath Milk',
//     price: 5.99,
//     image: bm4,
//   },

//   // Bath Bombs
//   {
//     id: 20,
//     category: 'Bath Bombs',
//     name: 'Lemon Fizz',
//     description: 'Citrus Scent Bath Bomb',
//     price: 3.99,
//     image: bb1,
//   },
//   {
//     id: 21,
//     category: 'Bath Bombs',
//     name: 'Lavender Calm',
//     description: 'Relaxing Lavender Bath Bomb',
//     price: 4.49,
//     image: bb3,
//   },
//   {
//     id: 22,
//     category: 'Bath Bombs',
//     name: 'Tropical Escape',
//     description: 'Exotic Tropical Scent Bath Bomb',
//     price: 4.99,
//     image: bb2,
//   },
//   {
//     id: 23,
//     category: 'Bath Bombs',
//     name: 'Peppermint Burst',
//     description: 'Refreshing Mint Bath Bomb',
//     price: 3.49,
//     image: bb4,
//   },
//   {
//     id: 24,
//     category: 'Bath Bombs',
//     name: 'Rose Garden',
//     description: 'Floral Rose Scent Bath Bomb',
//     price: 4.99,
//     image: bb1,
//   },
//   {
//     id: 25,
//     category: 'Bath Bombs',
//     name: 'Cherry Blossom',
//     description: 'Delicate Cherry Blossom Bath Bomb',
//     price: 4.49,
//     image: bb3,
//   },
//   {
//     id: 26,
//     category: 'Bath Bombs',
//     name: 'Citrus Splash',
//     description: 'Refreshing Citrus Scent Bath Bomb',
//     price: 3.99,
//     image: bb2,
//   },
//   {
//     id: 27,
//     category: 'Bath Bombs',
//     name: 'Spicy Cinnamon',
//     description: 'Warm Cinnamon Scent Bath Bomb',
//     price: 4.49,
//     image: bb4,
//   },
//   {
//     id: 28,
//     category: 'Bath Bombs',
//     name: 'Vanilla Dream',
//     description: 'Sweet Vanilla Scent Bath Bomb',
//     price: 4.99,
//     image: bb1,
//   },

//   // Bath Salts
//   {
//     id: 29,
//     category: 'Bath Salts',
//     name: 'Ocean Breeze',
//     description: 'Revitalizing Sea Salt Bath',
//     price: 5.99,
//     image: bs1,
//   },
//   {
//     id: 30,
//     category: 'Bath Salts',
//     name: 'Lavender Fields',
//     description: 'Relaxing Lavender Bath Salt',
//     price: 6.49,
//     image: bs2,
//   },
//   {
//     id: 31,
//     category: 'Bath Salts',
//     name: 'Rose Petal Salt',
//     description: 'Romantic Rose Bath Salt',
//     price: 6.99,
//     image: bs3,
//   },
//   {
//     id: 32,
//     category: 'Bath Salts',
//     name: 'Citrus Burst',
//     description: 'Zesty Citrus Scented Bath Salt',
//     price: 5.49,
//     image: bs4,
//   },
//   {
//     id: 33,
//     category: 'Bath Salts',
//     name: 'Herbal Bliss',
//     description: 'Aromatic Herbal Bath Salt',
//     price: 5.99,
//     image: bs1,
//   },
//   {
//     id: 34,
//     category: 'Bath Salts',
//     name: 'Dead Sea Salt',
//     description: 'Mineral-rich Dead Sea Bath Salt',
//     price: 7.49,
//     image: bs2,
//   },
//   {
//     id: 35,
//     category: 'Bath Salts',
//     name: 'Green Tea Infusion',
//     description: 'Revitalizing Green Tea Bath Salt',
//     price: 6.99,
//     image: bs3,
//   },
//   {
//     id: 36,
//     category: 'Bath Salts',
//     name: 'Sandalwood Serenity',
//     description: 'Relaxing Sandalwood Bath Salt',
//     price: 6.49,
//     image: bs4,
//   },
//   {
//     id: 37,
//     category: 'Bath Salts',
//     name: 'Vanilla Sugar',
//     description: 'Sweet Vanilla Bath Salt',
//     price: 5.99,
//     image: bs1,
//   },

//   // Shower Streamers
//   {
//     id: 38,
//     category: 'Shower Streamers',
//     name: 'Eucalyptus Dream',
//     description: 'Refreshing Eucalyptus Shower Steamer',
//     price: 4.99,
//     image: ss1,
//   },
//   {
//     id: 39,
//     category: 'Shower Streamers',
//     name: 'Lemon Zest',
//     description: 'Zesty Lemon Shower Steamer',
//     price: 4.49,
//     image: ss2,
//   },
//   {
//     id: 40,
//     category: 'Shower Streamers',
//     name: 'Peppermint Burst',
//     description: 'Invigorating Peppermint Shower Steamer',
//     price: 3.99,
//     image: ss3,
//   },
//   {
//     id: 41,
//     category: 'Shower Streamers',
//     name: 'Lavender Calm',
//     description: 'Calming Lavender Shower Steamer',
//     price: 4.99,
//     image: ss4,
//   },
//   {
//     id: 42,
//     category: 'Shower Streamers',
//     name: 'Rosemary Mint',
//     description: 'Revitalizing Rosemary and Mint Steamer',
//     price: 4.49,
//     image: ss5,
//   },
//   {
//     id: 43,
//     category: 'Shower Streamers',
//     name: 'Citrus Splash',
//     description: 'Refreshing Citrus Shower Steamer',
//     price: 3.99,
//     image: ss1,
//   },
//   {
//     id: 44,
//     category: 'Shower Streamers',
//     name: 'Tea Tree Energize',
//     description: 'Energizing Tea Tree Shower Steamer',
//     price: 4.49,
//     image: ss2,
//   },
//   {
//     id: 45,
//     category: 'Shower Streamers',
//     name: 'Vanilla Comfort',
//     description: 'Soothing Vanilla Shower Steamer',
//     price: 4.99,
//     image: ss3,
//   },
// ]

// export default products
