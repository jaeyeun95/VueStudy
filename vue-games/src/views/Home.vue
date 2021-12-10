<template>
  <div class="home">
    <NumberBaseBall />
  </div>
</template>

<script>
// @ is an alias to /src
import NumberBaseBall from '@/views/NumberBaseBall';
export default {
  name: 'Home',
  components: {
    NumberBaseBall,
  }
}
</script>
