<template>
  <div class="footer-container">
    <!-- 底部部分 -->
    <footer class="footer">
      <span class="todo-count"
        ><strong>{{ leftCount }}</strong
        >剩余</span
      >
      <ul class="filters">
        <li>
          <a href="#/" @click.prevent="btnFilter('all')" :class="{ selected: 'all' === current }">全部</a>
        </li>
        <li>
          <a href="#/active" @click.prevent="btnFilter('active')" :class="{ selected: 'active' === current }">进行中</a>
        </li>
        <li>
          <a href="#/completed" @click.prevent="btnFilter('completed')" :class="{ selected: 'completed' === current }">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" v-show="isShowClear" @click="clear">清除已完成</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  data() {
    return {
      
    }
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
  },
  computed: {
    leftCount() {
      return this.list.filter((item) => item.isDone === false).length
    },
    isShowClear() {
      // 如果有一个完成了的任务就让 清除已完成按钮显示
      return this.list.some((item) => item.isDone)
    },
  },
  methods: {
    clear() {
      //这里不需要传数据,这里使用这个方法是 为了当子组件触发事件函数时父组件也会触发相应的事件函数
      // 当clear函数触发时,对应挂载在 @setCleat事件上的方法也会触发
      this.$emit('setClear')
    },
    // 实现按钮高亮
    // 这里的切换数据功能实现会同时影响到 footer 和 mian 两个组件所以我们应该将type的值传给 App 在这个中组件来完成切换数据功能
    btnFilter(current) {
    //   this.current = current
    // 由于子组件不能直接修改父组件传递过来的props  props是只读的 所以我们要让父组件来修改这个值
    
    this.$emit('setCurrent',current)
    },
  },
}
</script>

<style></style>
