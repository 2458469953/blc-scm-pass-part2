<template>
<div id="app">
  <el-container>
    <el-header class="header">供应链管理系统</el-header>
    <el-container>
      <el-aside width=300px>
        <NavMenu/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  data() {
    return {
      tabComponent: 'EnterpriseAdmin',
    }
  },
  name: 'App',
  components: {
    NavMenu,
}
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background-color: #409EFF;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.el-aside {
  display: block;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background:#545c64
}
</style>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navigation.vue'; // 引入导航栏组件

export default {
  components: {
    Navbar // 注册导航栏组件
  },
  // 其他组件的逻辑和代码
}
</script>
