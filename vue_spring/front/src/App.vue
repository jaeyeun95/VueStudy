<template>
	<div id="app">
		<router-view />
	</div>
</template>
<style>
/* transition style */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
