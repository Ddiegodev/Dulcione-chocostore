import { hashSync } from 'bcrypt-ts-edge'

const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
  products: [
    {
      name: 'CHOCOLATE DE LECHE Y FRUCTOSA',
      slug: 'leche-fructosa',
      category: 'Barras',
      images: [
        '/assets/images/FRUCTOSA-pt1.jpg',
        '/assets/images/FRUCTOSA-pt2.jpg',
      ],
      price: '5.00',
      brand: 'Dulcione',
      rating: '5.0',
      numReviews: 10,
      stock: 80,
      description: 'Chocolate de leche y fructosa, sin azúcares añadidos.',
      isFeatured: true,
      banner: '/assets/images/FRUCTOSA-pt1.jpg',
    },
    {
      name: 'CHOCOLATE CON LICOR DE CACAO',
      slug: 'chocolate-licor',
      category: 'Barras',
      images: ['/assets/images/LICOR-pt1.jpg', '/assets/images/LICOR-pt2.jpg'],
      price: '5.00',
      brand: 'Dulcione',
      rating: '5.0',
      numReviews: 8,
      stock: 80,
      description: 'Chocolate con 72% de cacao, sin azúcares añadidos',
      isFeatured: true,
      banner: '/assets/images/LICOR-BANNER.jpg',
    },
    {
      name: 'CEREAL RECUBIERTO CON COLORES',
      slug: 'cereal-colores',
      category: 'Recubiertos',
      images: [
        '/assets/images/CRICKSCOLORES.jpg',
        '/assets/images/CEREAL-BG.jpg',
      ],

      price: '5.00',
      brand: 'Dulcione',
      rating: '5.0',
      numReviews: 3,
      stock: 70,
      description: 'Cereal recubierto con chocolate y coloreado.',
    },
    {
      name: 'ALMENDRAS RECUBIERTAS CON CHOCOLATE',
      slug: 'almendras-recubiertas',
      category: 'Recubiertos',
      images: [
        '/assets/images/CRICKS-CHOCO.jpg',
        '/assets/images/CEREAL-BG.jpg',
      ],
      price: '5.00',
      brand: 'Dulcione',
      rating: '5.0',
      numReviews: 5,
      stock: 70,
      description: 'Almendras recubiertas con chocolate.',
    },
  ],
}

export default sampleData
