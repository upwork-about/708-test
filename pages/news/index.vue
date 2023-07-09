<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
const router = useRouter()
onMounted(() => { })
const list = [1, 2, 3, 4, 5, 6]
const goToDetail = (item) => {
  router.push(`/news/${item}`)
}
</script>
<template>
  <div class='wrap'>
    <h5>I am News-Son-component</h5>
    <button v-for="item in list" :key="item" @click="goToDetail(item)">go to detail</button>
  </div>
</template>
<style scoped lang='less'></style>