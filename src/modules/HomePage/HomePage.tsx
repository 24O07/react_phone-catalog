import React from 'react';
import styles from './HomePage.module.scss';
import { PicturesSlider } from '../../components/PicturesSlider/PicturesSlider';
import { ProductCard } from '../../components/ProductCard';
// 1. Імпортуємо твій кастомний хук для завантаження даних
import { useFetch } from '../../hooks/useFetch';
// 2. Імпортуємо ТІЛЬКИ правильну константу адреси у фігурних дужках
import { PRODUCTS_URL } from '../../api/productsApi';
import { Product } from '../../types/Product';

export const HomePage: React.FC = () => {
  // 3. Викликаємо хук, передаючи йому адресу. Він сам завантажить масив продуктів.
  const { data: products, loading, error } = useFetch<Product[]>(PRODUCTS_URL);

  // 4. Якщо продукти вже завантажилися, безпечно беремо найперший для нашого тесту
  const firstProduct = products ? products[10] : null;

  return (
    <div className={styles.home}>
      <h1 className={styles['visually-hidden']}>Product Catalog</h1>

      <div className={styles.container}>
        <h2 className={styles.title}>Welcome to Nice Gadgets store!</h2>
      </div>

      <PicturesSlider />

      {/* Контейнер для нашої однієї картки */}
      <div className={styles.container} style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        {/* Показуємо статус завантаження, поки чекаємо дані від сервера */}
        {loading && <p>Loading product...</p>}

        {/* Повідомлення, якщо щось зламалося */}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {/* Коли дані прийшли успішно — малюємо нашу картку товару */}
        {firstProduct && <ProductCard product={firstProduct} />}
      </div>
    </div>
  );
};
