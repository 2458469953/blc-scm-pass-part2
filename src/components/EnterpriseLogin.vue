<template>
    <div>
        <h3>企业账号登录</h3>
        <el-input v-model="account" placeholder="请输入账号(邮箱)"></el-input>
        <el-input placeholder="请输入密码" v-model="passwd" show-password></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: '',
            passwd: '',
        }
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>
