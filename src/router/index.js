import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/HomeView',
	},
	{
		path: '/HomeView',
		name: 'HomeView',
		meta: {title: 'ChatGPT'},
		component: () => import('@/views/HomeView.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
// 路由拦截
router.beforeEach((to, from, next) => { 
	document.title = to.meta.title
	next()
})
export default router
