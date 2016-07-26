<template>
	<a @click="callUsers" class="waves-effect waves-light btn">Call Users</a>
	<a @click="countUsers" class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Count Users</a>
	<a href="#" class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
<hr>
	<a class="btn" @click="resourceGet">resource.get</a>
	<a class="btn" @click="resourceQuery">resource.query</a>
	<a class="btn" @click="resourceUpdate">resource.update</a>
	<a class="btn" @click="resourceRemove">resource.remove</a>
	<a class="btn" @click="resourceDelete">resource.delete</a>
	<a class="btn" @click="resourceFoo">resource.foo</a>
	
<pre>
	{{users | json}}
</pre>
</template>

<script>
	export default{
		data() {
			return{
				users: null,
				resourceUser : this.$resource('user{/id}', null, {'foo':{method: 'GET', url:"/user/foo"}}) //coloca o parametro ID na url junto com o methods
			}
		},
		methods: {
			callUsers: function(){ //usado p/ o Vue-Resource fazer a chamada AJAX
				this.$http({url: '/users.json', method: 'GET'}).then(function (response){
					this.users = response.data
				}, function (response){
					Materialize.toast('Erro!', 1000)
				});
			},
			countUsers: function(){
				Materialize.toast(this.users.length, 1000)
			},
			resourceGet: function(){
				this.resourceUser.get({id:1}).then(function(response){
					console.log(response)
				});
			},
			resourceQuery: function(){
				this.resourceUser.query({id:1}).then(function(response){
					console.log(response)
				});
			},
			resourceUpdate: function(){
				this.resourceUser.update({id:1}).then(function(response){
					console.log(response)
				});
			},
			resourceRemove: function(){
				this.resourceUser.remove({id:1}).then(function(response){
					console.log(response)
				});
			},
			resourceDelete: function(){
				this.resourceUser.delete({id:1}).then(function(response){
					console.log(response)
				});
			},
			resourceFoo: function(){			
			 	this.resourceUser.foo({id:1}).then(function(response){
			 		console.log(response)
			 	});	// nesse metodo parametro na url -> url: "/user/foo?id=1"
			}
		}		
	}	
</script>



