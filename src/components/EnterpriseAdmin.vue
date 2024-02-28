 <template>
    <div class="body">
        <h3>企业用户管理</h3>
        <el-row>
            <el-button type="primary" @click="JumpToLogin">企业登陆</el-button>
            <br>
            <el-button type="primary">企业注册</el-button>
            <br>
            <el-button type="primary">企业信息申报</el-button>
            <br>
            <el-button type="primary">企业信息审核</el-button>
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
        JumpToLogin() {
            console.log("跳转")
            this.$router.push('/EnterpriseLogin')
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