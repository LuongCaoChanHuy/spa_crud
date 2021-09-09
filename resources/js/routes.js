import ProductIndex from './components/product/index.vue';
import ProductStore from './components/product/store.vue';
import ProductEdit from './components/product/edit.vue';

export const routes = [{
        name: 'home',
        path: '/',
        component: ProductIndex
    },
    {
        name: 'create',
        path: '/create',
        component: ProductStore
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: ProductEdit
    }
]