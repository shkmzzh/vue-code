<template>
  <div>
    <h1>count:{{ count }}</h1>
    <h1>arrs:{{ arrs }}</h1>
  </div>
</template>

<script>
export default {
  /*  type:可以限制传入数据的数据类型 Number,String,Function,Array,Object,undefined,null,
            [Number,String]
        validator:(value)=>{   // 对传入的值进一步验证
            return boolean
                true:通过验证
                false:不通过验证
        },
        required:是否必传  true:必传，false（默认值）:传和不传都可以
        default:不传入时的默认值
            基本数据类型：直接定义默认值
            复杂数据类型(对象，function,Array)：()=>{return 复杂数据类型} */
  props: {
    count: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 0
      },
      default: 0,
    },
    arrs: {
      type: Array,
      required: true,
    //   validator: (value) => {
    //    return ['success', 'warning', 'danger'].indexOf(value) !== -1
    //   },
    default: () => {
        return []
      }
    },
  },
}
</script>

<style></style>
