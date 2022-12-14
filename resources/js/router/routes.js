import Home from '../pages/Home.vue';
import ContactUs from '../pages/ContactUs.vue';
import ChiSiamo from '../pages/ChiSiamo.vue';
import Blog from '../pages/Blog.vue';
import BlogShow from '../pages/Blog.show.vue'
import Page404 from "../pages/404.vue";

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
    },
    {
        path: '/blog/:slug',
        name: 'posts.show',
        component: BlogShow,
    },
    {
        path: "/*",
        name: "404",
        component: Page404,
    }
];

export default routes