import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue'
import ChiSiamo from '../pages/ChiSiamo.vue'
import Blog from '../pages/Blog.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/contatti',
        name: 'contact-us',
        component: ContactUs,
    },
    {
        path: '/chi-siamo',
        name: 'about-us',
        component: ChiSiamo,
    },
    {
        path: '/blog',
        name: 'posts.index',
        component: Blog,
    }
];

export default routes