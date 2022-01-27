<template>
    <span class="flex items-center text-primary bg-light-cyan--bg rounded-md px-2 mr-2 text-center">
    <slot></slot>
    <button class="ml-1 -mr-1 p-1 pr-0 rounded-tr-md rounded-br-md bg-primary hover:bg-very-dark-cyan" @click="delBtn">
      <img src="../assets/icon/icon-remove.svg">
    </button>
  </span>
</template>

<script>
export default {
  methods:{
    delBtn(){
      this.$emit('delBtn')
    }
  }
}
</script>

<style>

</style>