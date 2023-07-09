<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/store'
const props = defineProps({})
const commonStore = useCommonStore()

const upworkVersion = computed(() => commonStore.upworkVersion)
onMounted(() => { })

const add = () => {
  commonStore.addUpworkVersion()
}
</script>
<template>
  <div class='wrap'>
    <h4>{{ upworkVersion }}</h4>
    <button @click="add">add upworkVersion</button>
  </div>
</template>
<style scoped lang='less'></style>