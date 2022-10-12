<template>
  <div class="header-container">
    <!-- 头部部分 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="请输入任务名称" autofocus v-model.trim="name" @keyup.enter="add" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    add() {
      this.$emit('setName', this.name)
      this.name = ''
    },
  },
}
</script>

<style></style>
