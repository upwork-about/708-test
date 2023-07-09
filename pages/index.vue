<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
const router = useRouter()
onMounted(() => { })

const { testToken } = useRuntimeConfig();
</script>
<template>
  <div class='wrap'>
    <h1>{{ testToken }}</h1>
    <button @click="router.push('/news')">go to news</button>
  </div>
</template>
<style scoped lang='less'></style>