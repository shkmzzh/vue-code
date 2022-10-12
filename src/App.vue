<template>
  <div class="app-container">
    <section class="todoapp">
      <TodoHeader @setName="getName"></TodoHeader>
      <TodoMain :list="showList" @setDelete="getDelete" @setChange="getChange" @checkAll="getCheckAll"></TodoMain>
      <TodoFooter :list='showList' @setClear="getClear" :current="current" @setCurrent="getCurrent"></TodoFooter>
    </section>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoMain from '@/components/TodoMain.vue'
import TodoFooter from '@/components/TodoFooter.vue'
export default {
  name:'app',
  //局部注册组件
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      // 开始的时候本地没有数据时 getItem 为 undefind 所以开始list的值为一个空数组
      list:JSON.parse(localStorage.getItem('todoList'))|| [],
      current: 'all',
    }
  },
  watch:{
    // 本地存储实现,将list里的数据存储到本地
    list:{
      handler(newVal){
        // 这里监听了 监听了 list的值,一开始todolist这个键 得到的键值是一个空数组，
        // 之后这个键里的值 就是我们输入的对象啦，数组值是不会被 setItem覆盖的哦，会往todolist数组中添加数据
        localStorage.setItem('todoList',JSON.stringify(newVal))
      }
    }
  },
  computed:{
    // 筛选数据功能实现
    showList(){
      if (this.current === 'completed')  // 显示已完成
      return this.list.filter(item => item.isDone === true)
      if (this.current === 'active')  // 显示未完成
      return this.list.filter(item => item.isDone === false)
      else 
      return this.list // 全部显示
    }
  },
  methods: {
    // 删除功能实现
    getDelete(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    //复选框按钮功能实现
    getChange(id){
      // 通过 find 方法找到子组件传递过来的id相同的id，然后进行修改
      //注意find返回的值是会影响到原数组的
      const result =this.list.find(item=>item.id ===id)
      result.isDone=!result.isDone


      // 当id是按照顺序排列的可以实现,一旦id值是乱序的就实现不了，这里写出来是为了避免自己再次踩坑
      // this.list[id-1].isDone=!this.list[id-1].isDone
      
    },
    // 添加任务功能
    getName(name){
      this.list.unshift({
        id:Date.now(),
        name:name,
        isDone:false
      })
    },
    //删除已完成任务功能
    getClear(){
      this.list=this.list.filter(item=>item.isDone===false)
    },
    //实现按钮高亮功能
    getCurrent(current){
      this.current=current
    },
    //全选按钮功能实现
    getCheckAll(value){
      this.list.forEach(item=>item.isDone=value)
    }
  },
}
</script>

<style></style>
