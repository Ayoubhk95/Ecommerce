import Viewarticles from './components/Viewarticles.vue';
import Viewcategorie from './components/Viewcategorie.vue';
import Accueil from './components/accueil.vue';
import Addarticle from './components/Addarticle.vue';
import Editarticle from './components/articles/Editarticle.vue';
import HomeCart from './components/cart/HomeCart.vue';
import Cart from './components/cart/Cart.vue';
import Payment from './components/cart/Payment.vue';

export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
        },

        {
            name : "Viewarticles" ,
            path : "/listart" ,
            component: Viewarticles
        

        },
    


    {
        name:"Viewcategorie",
        path:"/listcat",
        component:Viewcategorie
        },
        {
            name:"Addarticle",
            path:"/addarticle",
            component:Addarticle
            },
            {
                path:'/shopping',
                name:'HomeCart',
                component:HomeCart
                },


           { name:"editarticle",
path:"/editarticle/:id",
component:Editarticle
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart
            },

            {
                path:'/payment',
                name:'Payment',
                component:Payment
                },
];


