<template>
  <div>
    <!-- 原生 -->
    <!-- 使用state的数据
    <p>{{ $store.state.username }}</p>
    使用getters的数据
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.getters['newName'] }}</p>
    调用mutations方法
    <button @click="mutationsFn">调用mutations方法</button>
    调用actions方法
    <button @click="actionsFn">调用actions方法</button> -->
    <!-- 模块 -->
    模块A
    <p>state：{{ $store.state.moduleA.username }}</p>
    <p>getters：{{ $store.getters.newName }}</p>
    <p>state需要模块名字,其他则不需要，除非开启了命名空间</p>
    模块B
    <p>{{ $store.state.moduleB.username }}</p>
    <p>state：{{ $store.state.moduleB.username }}</p>
    <p>下面开启了命名空间</p>
    <p>getters：{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="mutationsFn">mutationsFn改变</button>
    <button @click="actionsFn">actionsFn改变</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
// 原生
const store = useStore()
// // 使用state的数据
// console.log(store.state.username)
// // 使用getters的数据
// console.log(store.getters.newName)
// // 调用mutations方法
// const mutationsFn = () => {
//   store.commit('updateName')
// }
// const actionsFn = () => {
//   store.dispatch('updateName')
// }
// 模块
const mutationsFn = () => {
  store.commit('moduleB/updateName')
}
const actionsFn = () => {
  store.dispatch('moduleB/updateName')
}
</script>
