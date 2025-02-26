import { home } from '../pages/home/index.html';
import { inventory } from '../pages/inventory/index.html';
import { login } from '../pages/login/index.html';
import { addProduct } from '../pages/add-product/index.html';

const pages = {
    '/home': home,
    '/inventory': inventory,
    '/login': login,
    '/add-product': addProduct,
};

export default pages;

// um arquivo para fazer o roteamento
// concentrador de rotas