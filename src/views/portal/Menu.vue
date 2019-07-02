<template>
    <div>
        <el-button class="btn-creat" type="success" icon="el-icon-plus" @click="handleCreate">创建</el-button>
        <div class="el-tree-default">
            <el-tree
                :data="menuData"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
            >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <span>
                        <el-button type="primary" icon="el-icon-edit" circle size="mini" @click="() => edit(data)"></el-button>
                        <el-button
                            type="danger" icon="el-icon-delete" circle
                            size="mini"
                            @click="() => remove(node, data)"
                        ></el-button>
                    </span>
                </span>
            </el-tree>
        </div>
        <el-dialog :title="titleName" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="dialogForm">
                <el-input v-model="dialogForm.id" type="hidden"></el-input>
                <el-form-item label="菜单编码" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.menuCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="菜单名称" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.menuName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父级菜单" :label-width="formLabelWidth">
                    <el-cascader
                        v-model="value"
                        :options="menuData"
                        :props="{ expandTrigger: 'hover', checkStrictly: true }"
                        @change="handleChange"
                        clearable
                    ></el-cascader>
                </el-form-item>
                <el-form-item label="菜单URL" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.menuUrl" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="排序码" :label-width="formLabelWidth">
                    <el-input v-model="dialogForm.rank" autocomplete="off"></el-input>
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
import * as Menu from "@/api/components/portal/menu.js";
export default {
    data() {
        return {
            value: [],
            menuData: [],
            dialogForm: {
                id: 0,
                menuCode: "",
                menuName: "",
                pMenuCode: "",
                menuUrl: "",
                rank: "",
                sysCode: "",
                level: ""
            },
            dialogFormVisible: false,
            formLabelWidth: "100px",
            titleName: "创建菜单",
            buttonName: "创建"
        };
    },
    methods: {
        async getMenuData() {
            try {
                const res = await Menu.getMenuDataSubmit({});
                console.log(res);
                this.menuData = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        handleNodeClick(data) {
            console.log(data);
        },
        handleChange(value) {
            console.log(value);
        },
        async handleDialogSubmit() {
            this.dialogFormVisible = false;
            this.dialogForm.sysCode = this.value[0];
            this.dialogForm.level = this.value.length;
            this.dialogForm.pMenuCode = this.value[this.value.length - 1];
            try {
                const res = await Menu.dialogSubmit({
                    id: this.dialogForm.id,
                    code: this.dialogForm.menuCode,
                    name: this.dialogForm.menuName,
                    pCode: this.dialogForm.pMenuCode,
                    menuUrl: this.dialogForm.menuUrl,
                    rank: this.dialogForm.rank,
                    sysCode: this.dialogForm.sysCode,
                    level: this.dialogForm.level
                });
                if (res.data != 0) {
                    this.$message({
                        message: "恭喜您，" + this.buttonName + "成功",
                        type: "success"
                    });
                }
                this.getMenuData();
            } catch (error) {
                console.log(error);
            }
        },
        handleCreate() {
            this.dialogFormVisible = true;
            this.titleName = "创建菜单";
            this.buttonName = "创建";
            this.dialogForm.id = 0;
            this.dialogForm.userCode = "";
            this.dialogForm.username = "";
        },
        edit(data) {
            // const newChild = { id: id++, label: 'testtest', children: [] };
            // if (!data.children) {
            //   this.$set(data, 'children', []);
            // }
            // data.children.push(newChild);
            console.log(data);
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        }
    },
    created() {
        this.getMenuData();
    }
};
</script>
<style lang="scss" scoped>
.btn-creat {
    margin-bottom: 20px;
}
.el-tree-default{
  width: 400px;
}
</style>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: auto;
    justify-content: space-between;
    /* font-size: 14px; */
    /* padding-left: 10px; */
}
</style>
