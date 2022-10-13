<template>
  <div>
    <h1>usname值{{ value123}}</h1>
    用户名:<input type="text" :value="value123" @input="setValue" />
  </div>
</template>

<script>
export default {
  props: {
    value123: {
      type: String,
      required: true,
    },
  },
  methods: {
    setValue(e) {
        this.$emit('input456',e.target.value)
    },
  },
//   如果你不想使用语法糖提供的固定的 value 和input的话可以配置 model
model:{
    prop:'value123',
    event:'input456'
}
}
</script>

<style></style>
