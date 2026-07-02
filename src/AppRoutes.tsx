import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage/HomePage';
import { FavoritesPage } from './modules/FavoritesPage';
import { CartPage } from './modules/CartPage/CartPage';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Сторінки категорій каталогу */}
      <Route path="/phones" element={<h1>Phones Catalog Placeholder</h1>} />
      <Route path="/tablets" element={<h1>Tablets Catalog Placeholder</h1>} />
      <Route
        path="/accessories"
        element={<h1>Accessories Catalog Placeholder</h1>}
      />

      {/* Сторінки деталей товарів для кожної категорії окремо */}
      <Route
        path="/phones/:productId"
        element={<h1>Product Details Placeholder</h1>}
      />
      <Route
        path="/tablets/:productId"
        element={<h1>Product Details Placeholder</h1>}
      />
      <Route
        path="/accessories/:productId"
        element={<h1>Product Details Placeholder</h1>}
      />

      {/* Інші сторінки */}
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
