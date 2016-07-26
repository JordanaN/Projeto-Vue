<template>
	<nav>
		<div class="nav-wrapper">
			<a href="#" class="brand-logo">Logo</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li v-link-active><a v-link="{ path: '/' }">Home</a></li>
				<li v-link-active><a v-link="{ path: '/card' }">Card</a></li>
				<li v-link-active><a v-link="{ path: '/buttons' }">Buttons</a></li>
				<!--<li> <a v-link="{ path: '/user/edit', params: { userId: 123 }}">Edit User</a></li> passando um parametro com o vue-router-->
			</ul>
		</div>
	</nav>
</template>
<script>
	export default{
	}
</script>
