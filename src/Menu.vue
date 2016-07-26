<template>
	<h4>{{title}}</h4>
	<button @click="onButtonClick">click me</button>
	<div>
		<slot></slot>
	</div>
	<hr>
	<slot name="footer"></slot>
</template>
<script>
	export default{
		props: ['title'],
		methods:{
			onButtonClick : function(){
			this.$dispatch('button-click', "dispatch event from menu");
			}
		}

		//Validações de Propriedades

		//tipo númerico
		// propA: Number,

		//String ou numero (1.0.21+)
		// propM: [String, Number],

		//Uma propriedade obrigatória
		// propB: {
		// 	type: String,
		// 	required: true
		// },

		//um número com valor padrão
		// propC: {
		// 	type: Number,
		// 	default: 100
		// },

		//Uma validação customizada
		// propF: {
		// 	validator: function(value){
		// 		return value > 10
		// 	}
		// },

		//Retorna o JSON da propriedade
		// propH: {
		// 	coerce: function(val){
		// 		return JSON.parse(val) //cast the value to Object
		// 	}
		// }
	}
</script>
<style>
	
</style>