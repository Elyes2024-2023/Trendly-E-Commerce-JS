import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@trendly.com' },
    update: {},
    create: {
      email: 'admin@trendly.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create test user
  const userPassword = await hash('user123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'user@trendly.com' },
    update: {},
    create: {
      email: 'user@trendly.com',
      name: 'Test User',
      password: userPassword,
      role: 'USER',
    },
  });

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Electronics' },
      update: {},
      create: {
        name: 'Electronics',
        description: 'Electronic devices and accessories',
        image: '/categories/electronics.jpg',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Clothing' },
      update: {},
      create: {
        name: 'Clothing',
        description: 'Fashion and apparel',
        image: '/categories/clothing.jpg',
      },
    }),
    prisma.category.upsert({
      where: { name: 'Books' },
      update: {},
      create: {
        name: 'Books',
        description: 'Books and literature',
        image: '/categories/books.jpg',
      },
    }),
  ]);

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Smartphone X',
        description: 'Latest smartphone with advanced features',
        price: 999.99,
        images: ['/products/smartphone-1.jpg', '/products/smartphone-2.jpg'],
        categoryId: categories[0].id,
        stock: 50,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Laptop Pro',
        description: 'Professional laptop for developers',
        price: 1499.99,
        images: ['/products/laptop-1.jpg', '/products/laptop-2.jpg'],
        categoryId: categories[0].id,
        stock: 30,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Classic T-Shirt',
        description: 'Comfortable cotton t-shirt',
        price: 29.99,
        images: ['/products/tshirt-1.jpg', '/products/tshirt-2.jpg'],
        categoryId: categories[1].id,
        stock: 100,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Programming Guide',
        description: 'Comprehensive guide to programming',
        price: 49.99,
        images: ['/products/book-1.jpg', '/products/book-2.jpg'],
        categoryId: categories[2].id,
        stock: 75,
      },
    }),
  ]);

  // Create reviews
  await Promise.all([
    prisma.review.create({
      data: {
        userId: user.id,
        productId: products[0].id,
        rating: 5,
        comment: 'Great smartphone, highly recommended!',
      },
    }),
    prisma.review.create({
      data: {
        userId: user.id,
        productId: products[1].id,
        rating: 4,
        comment: 'Powerful laptop, but a bit expensive.',
      },
    }),
  ]);

  // Create addresses
  const address = await prisma.address.create({
    data: {
      userId: user.id,
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001',
      isDefault: true,
    },
  });

  // Create cart
  const cart = await prisma.cart.create({
    data: {
      userId: user.id,
      items: {
        create: [
          {
            productId: products[0].id,
            quantity: 1,
          },
          {
            productId: products[2].id,
            quantity: 2,
          },
        ],
      },
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 