<template>
    <div>
        <button class="list-group-item text-left" @click="clickButton">
            {{ label }}
        </button>
    </div>
</template>
<script>
export default {
    props:['label'],
    methods:{
        clickButton(){
            this.$emit('componentClick');
        }
    }
}
</script>
<style>
    
</style>