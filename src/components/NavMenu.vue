<!-- 左侧导航栏 -->
<template>
    <el-row class="tac">
    <el-col>
        <el-menu
        router
          default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item :index="'/EnterpriseAdmin'">
                <i class="el-icon-menu"></i>
                <span slot="title">企业用户管理</span>
            </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">组织架构管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">应用管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">区块链管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      </el-row>

</template>

<script>
export default {
    methods: {

    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>