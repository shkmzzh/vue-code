<template>
  <!-- <div class="main-container"> -->
  <!-- 主体部分 -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isCheckAll" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
      <li :class="{ completed: item.isDone }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.isDone" @change="setChange(item.id)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
  <!-- </div> -->
</template>

<script>
export default {
    name:'TodoMain',
    props:{
    //  init:{
    //   // 如果外界使用Count组件时没有传递 init 属性，则默认值生效，优先级低
    //   default:0,
    //   // init 的值类型必须是Number 数字,也可以设置是其他类型
    //   type:Number,
    //   // 是否必填项校检
    //   required:true
    // }
    list:{
        type:Array,
        required:true
    },
    },
    computed:{
        // computed属性默认情况想是不可以修改的所以不能作为v-model的参数,但是它的完整写法可以
        isCheckAll:{
            get(){
                return this.list.every(item=>item.isDone)
            },
            set(value){
                console.log(value)
                // 但是这里 list 的是通过 props获取得到的,而props的值是只读的不能直接修改
                // this.list.farEach(item.isDone=value)
                // 所以需要将得到的结果给父元素，由父元素来操作数据
                this.$emit('checkAll',value)
            }

        }
    },
    methods:{
        //删除功能，子传父根据id删除
        del(id){
            this.$emit('setDelete',id)
        },
        //任务状态栏修改功能
        setChange(id){
            this.$emit('setChange',id)
        }
    }

}
</script>

<style></style>
