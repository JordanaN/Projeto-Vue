import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

Vue.use(VueResource) //iniciando o vue-resource
Vue.use(VueRouter) // iniciando o vue-router

// active dos lincks do menu
const router = new VueRouter({
	linkActiveClass: 'active'	
})

// mapeando as rotas
router.map({
	'/foo':{
		component: HelloWorldRouter
	},
	'/card':{
	// criando uma rota para card http://localhost:8080/#!/card, funciona como route.php
		component: Card,
		auth: true
	},
	'/buttons':{
		component: Buttons
	}
});

// startando o router
router.start(App, 'App')

// verificando se o user esta logado para acessar o conteudo interno do app
router.beforeEach(function (transition){
	//let declara variavel visivel apenas no bloco 
	let authenticated = false;
		console.log(transition);
	if (transition.to.auth && !authenticated){
		transition.redirect('/login')
	}else{
		transition.next()
	}
})


