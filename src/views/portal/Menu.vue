<template>
    <div>
        <el-button class="btn-creat" type="success" icon="el-icon-plus" @click="handleCreate">创建</el-button>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <el-dialog :title="titleName" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="dialogForm">
                <el-input v-model="dialogForm.id" type="hidden"></el-input>
                <el-form-item label="菜单编码" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.menuCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="菜单名称" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.menuName" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDialogSubmit('dialogForm')">{{buttonName}}</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogForm: {
            id: 0,
            menuCode: "",
            menuName: ""
        },
        dialogFormVisible: false,
        formLabelWidth: '100px',
        titleName: "创建菜单",
        buttonName: "创建",
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleCreate(){
        this.dialogFormVisible = true;
        this.titleName = "创建菜单";
        this.buttonName = "创建";
        this.dialogForm.id = 0;
        this.dialogForm.userCode = "";
        this.dialogForm.username = "";
      }
    }
  };
</script>
<style lang="scss" scoped>
.btn-creat {
    margin-bottom: 20px;
}
</style>
