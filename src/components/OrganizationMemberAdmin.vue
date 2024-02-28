<template>
  <div style="padding: 5px 20px;">
    <br>
    <el-form :inline="true" :model="listQuery" class="demo-form-inline">
      <el-form-item label="组织成员ID">
        <el-input v-model="listQuery.unit_name" placeholder="成员ID"></el-input>
      </el-form-item>
      <el-form-item>

        <el-button type="primary" @click="onSubmitSelect" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="TJCollectionForm" icon="el-icon-edit">添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格-->
    <el-table :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="50" type="index">
      </el-table-column>
      <el-table-column label="成员ID" prop="unit_account">
      </el-table-column>
      <el-table-column label="企业ID" prop="unit_enterpriseID">
      </el-table-column>
      <el-table-column label="所属组织的ID" prop="unit_organizationID">
      </el-table-column>
      <el-table-column label="角色" prop="unit_role">
      </el-table-column>
      <el-table-column label="权限" prop="unit_power">
      </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>&nbsp;
          <span style="margin-left: 5px" v-text="(scope.row.create_time).substring(-1,19).replace('T',' ')"></span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteVisible(scope)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
                   :page-sizes="[10]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"
                   :background="true">
    </el-pagination>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="collectionform" :rules="rules" :model="ruleForm" label-width="120px" label-position="left">
        <el-form-item label="成员ID" prop="unit_account" v-if="dialogStatus=='create'">
          <el-input placeholder="成员ID" v-model="ruleForm.unit_account"></el-input>
        </el-form-item>
        <el-form-item label="企业ID" prop="unit_enterpriseID" v-if="dialogStatus=='create'">
          <el-input placeholder="企业ID" v-model="ruleForm.unit_enterpriseID"></el-input>
        </el-form-item>
        <el-form-item label="所属组织的ID" prop="unit_organizationID" v-if="dialogStatus=='create'">
          <el-input placeholder="所属组织的ID" v-model="ruleForm.unit_organizationID"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="unit_role">
          <el-input placeholder="角色" v-model="ruleForm.unit_role"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="unit_power">
          <el-input placeholder="权限" v-model="ruleForm.unit_power"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" v-if="dialogStatus=='create'" @click="submitCollectionForm('collectionform')">添 加</el-button>
        <el-button type="warning" v-else @click="updateCollectionForm('collectionform')">修 改</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>

export default {
  name: 'department',
  data() {
    return {
      /* typecode:this.$route.query.typecode,
       typetitle:this.$route.query.typetitle */
      listLoading: true,
      list: null,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        unit_name: ''
      },
      dialogFormVisible: false,
      dialogStatus: 'create',
      textMap: {
        update: '修改代收单位',
        create: '添加代收单位'
      },

      ruleForm: {
        id: '',
        unit_code: '',
        unit_account: '',
        unit_enterpriseID:'',
        unit_organizationID:'',
        unit_role:'',
        unit_power:'',
        create_time: '',
        create_author: '',
      },

      rules: {
        unit_account: [{
          required: true,
          message: '请输入成员ID',
          trigger: 'blur'
        }],
        unit_enterpriseID: [{
          required: true,
          message: '请输入企业ID',
          trigger: 'blur'
        }],
        unit_organizationID: [{
          required: true,
          message: '请输入所属组织ID',
          trigger: 'blur'
        }],
        unit_role: [{
          required: true,
          message: '请输入相应角色',
          trigger: 'blur'
        }],
        unit_power: [{
          required: true,
          message: '请选择权限',
          trigger: 'blur'
        }]
      }
    }
  },
  created() {
    this.axiosdata()
  },
  methods: {
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.axiosdata();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.axiosdata();
    },
    onSubmitSelect() {
      this.axiosdata()
    },
    axiosdata() {
      this.listLoading = true;
      this.$axios({
        method: 'post',
        url: '/page/getHs_collection_unit',
        headers: {
          'token': this.$store.getters.token
        },
        data: this.listQuery
      }).then((response) => {
        this.listLoading = false;
        this.list = response.data.result.list;
        this.total = response.data.result.total;
      })
    },

    /* 添加表单*/
    TJCollectionForm() {
      /* 表单重置*/
      Object.assign(this.$data.ruleForm, this.$options.data().ruleForm);

      this.dialogStatus = "create"
      this.dialogFormVisible = true
    },
    /* 编辑表单*/
    BJCollectionForm($index) {
      //显示修改对话框
      this.ruleForm = JSON.parse(JSON.stringify(this.list[$index]))
      //以下效果和上面的不一样
      //this.ruleForm=this.list[$index]

      this.dialogStatus = "update"
      this.dialogFormVisible = true

    },

    /* 添加按钮*/
    submitCollectionForm(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/inserths_collection_unit',
            data: this.ruleForm
          }).then((response) => {
            if (response.data.resStatus.resCode == 0) {
              this.axiosdata();
              this.dialogFormVisible = false;
              this.$message.success('添加数据成功！');
            } else {
              this.$message.error('添加数据失败！');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 删除按钮*/
    deleteVisible(scope) {
      this.$confirm('确定要删除【' + scope.row.unit_name + '】吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'post',
          url: '/deletehs_collection_unit',
          data: scope.row
        }).then((response) => {
          if (response.data.resStatus.resCode == 0) {
            this.axiosdata();
            this.dialogFormVisible = false;
            this.$message.error('删除完毕')
          } else {
            this.$message.error('删除数据失败！');
          }
        })
      });

    },
  },
}
</script>

<style>
</style>