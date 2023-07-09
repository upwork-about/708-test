<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })

</script>
<template>
  <div class='wrap'>
    <h3>I am News-Father-component</h3>
    <NuxtPage />
  </div>
</template>
<style scoped lang='less'></style>