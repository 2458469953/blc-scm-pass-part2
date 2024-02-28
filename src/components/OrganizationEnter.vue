<template>
  <div class="body">
    <h3>组织架构管理</h3>
    <el-row>
      <el-button type="primary" @click="JumpToOrganization">组织管理</el-button>
      <br>
      <el-button type="primary" @click="JumpToMember">组织成员管理</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    JumpToOrganization() {
      console.log("跳转")
      this.$router.push('OrganizationAdmin')
    },
    JumpToMember() {
      console.log("跳转")
      this.$router.push('OrganizationMemberAdmin')
    }
  },
  setup() {

  },
}
</script>

<style scoped>
.body{
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
}
.el-button{
  margin-top: 20px;
  margin-left: 0px;
}
</style>