import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import practice1 from '@/components/practice1.vue'
import practice2 from '@/components/practice2.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'practice2',
			component: practice2
		},
		{
			path: '/',
			name: 'practice1',
			component: practice1
		},
		{
		  path: '/',
		  name: 'HelloWorld',
		  component: HelloWorld
		}
  ]
})
