<template>
  <div>
    <button @click="add">+</button>
    <input type="text" :value="value" />
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
      validator: (value) => {
        return value >= 0
      },
    },
  },
  methods:{
    add(){
      this.$emit('input',this.value+1)
    },
    reduce(){
      if(this.value-1<0)return
      this.$emit('input',this.value-1)
    }
  }
}
</script>

<style></style>
