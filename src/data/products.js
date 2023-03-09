const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['blue', 'red', 'green'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 5 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 8 }
    ]
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['white', 'black', 'red'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 2 },
      { name: 'L', additionalPrice: 3 },
      { name: 'XL', additionalPrice: 4 }
    ]
  },
  {
    id: 3,
    name: 'new',
    title: 'New shirt',
    basePrice: 32,
    colors: ['yellow', 'pink', 'purple'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 3 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 9 }
    ]
  }
];

export default productsData;