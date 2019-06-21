<template>
    <div>
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="用户编码">
                <el-input v-model="form.userCode" placeholder="用户编码"></el-input>
            </el-form-item>
            <el-form-item label="用户名称">
                <el-input v-model="form.username" placeholder="用户名称"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.mobile" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" placeholder="email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-button class="btn-creat" type="success" @click="dialogFormVisible = true">创建</el-button>
        <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="userCode" label="用户编码" width="200"></el-table-column>
        <el-table-column prop="username" label="用户名称" width="180"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
            <el-button
                @click="handleUpdate(scope.row)"
                type="info"
                size="medium"
                icon="el-icon-setting"
            >编辑</el-button>
            <el-button type="danger" size="medium" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
            <el-button type="warn" size="medium" icon="el-icon-setting" @click="handleRole(scope.row)">配置角色</el-button>
            <el-button type="warn" size="medium" icon="el-icon-setting" @click="handlePerm(scope.row)">查看权限</el-button>
            </template>
        </el-table-column>
        </el-table>
        <p class="page-box">
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page.currentPage"
        :page-sizes="[2, 10, 50, 100]"
        :page-size="page.pageSize"
        layout="sizes, prev, pager, next"
        :total="page.totalSize">
        </el-pagination>
        </p>
    </div>
</template>
<script>
import * as User from '@/api/components/portal/user.js'
export default {
    name: "user",
    data() {
        return {
            page: {
              currentPage : 1,
              pageSize : 2,
              totalSize: 0
            },
            form: {
                userCode: '',
                username: '',
                mobile: '',
                email: ''
            },
            tableData: []
        }
    },
    methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`)
          this.pageSize = val
          this.getList()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`)
          this.currentPage = val
          this.getList()
        },
        onSubmit() {
            console.log('submit!');
        },
        async handleDelete(row) {
            console.log(row);
        },
        async handleUpdate(row) {
            console.log(row);
        },
        async handleRole(row) {
            console.log(row);
        },
        async handlePerm(row) {
            console.log(row);
        },
        async getList() {
            try {
                const res = await User.listSubmit({
                    userCode: this.form.userCode, 
                    username: this.form.username,
                    mobile: this.form.mobile,
                    email: this.form.email,
                    currentPage: this.page.currentPage,
                    pageSize: this.page.pageSize
                })
                this.tableData = res.data.list
                this.page.currentPage = res.data.currentPage
                this.page.pageSize = res.data.pageSize
                this.page.totalSize = res.data.totalSize
            }catch (error) {
                console.log(error);
            }
        }
    },
    created () {
        this.getList()
    }
}
</script>
