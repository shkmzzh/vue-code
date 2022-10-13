<template>
  <div>
    <h3>{{num}}</h3>
    <!-- v-model:
    父子组件传值的语法糖
     子组件标签 :value="父组件属性" @input="父组件属性=$event"
    子组件标签 v-model=父组件标签
    子组件内:props:[value] this.$emit('input',实参值)
   
    用于原生标签，在表单元素上是值的双向绑定
    用于组件标签，也是值的双向绑定，它只不过是props与emit的语法糖 -->

     <!-- 注意：要使用v-model语法糖，必须要报证传给 父组件传给子组件的props参数为 value  子组件传给父组件的事假名为input -->
     <!-- 但如果不想固定这样的语法方式，可以在子组件中配置, vue中配置一个model项
     model:{ prop:'value',event:'input'   }
    prop:v-model时的传入属性名
    event:v-model时绑定的方法名 -->
   <!-- <HmModel :value="num" @input="getNum"></HmModel> -->
   <!-- 语法糖实现 -->
    <HmModel v-model="num"></HmModel>
    <hr>
    <HmProps :count="count" :arrs="arrs"></HmProps>
    <hr>
    <HmInput v-model="username"></HmInput>

  </div>
</template>
 
<script>
import HmModel from '@/components/HmModel.vue'
import HmProps from '@/components/HmProps.vue'
import HmInput from '@/components/HmInput.vue'
export default {
   components:{
        HmModel,
        HmProps,
        HmInput
    },
  data() {
    return {
      num:0,
      count:1,
      arrs:['success', 'warning', 'danger'],
      username:'admin'
    }
  },
  methods:{
    getNum(val){
      console.log(val)
      this.num=val
    }
  }

}
</script>

<style>

</style>