<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="系统名称">
        <el-input v-model="form.name" placeholder="系统名称"></el-input>
      </el-form-item>
      <el-form-item label="系统编码">
        <el-input v-model="form.code" placeholder="系统编码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button type="success" @click="dialogFormVisible = true">创建</el-button>
    <el-table :data="tableData" stripe border>
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="sysName" label="系统名称" width="200"></el-table-column>
      <el-table-column prop="sysCode" label="系统编码" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="info"
            size="medium"
            icon="el-icon-setting"
          >编辑</el-button>
          <el-button type="danger" size="medium" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    <el-dialog :title="titleName" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-input v-model="form.id" type="hidden"></el-input>
        <el-form-item label="系统名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="系统编码" :label-width="formLabelWidth">
           <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">{{buttonName}}</el-button>
      </div>
    </el-dialog>
  </div>
</template> 

<script>
import axios from 'axios';
export default {
    name: "system",
    data() {
        return {
            page: {
              currentPage : 1,
              pageSize : 2,
              totalSize: 0
            },
            form: {
                id: 0,
                name: "",
                code: ""
            },
            tableData: [],
            dialogFormVisible: false,
            formLabelWidth: '100px',
            titleName: "创建系统",
            buttonName: "创建"
        };
    },
    methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize = val;
          this.getList();
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
          this.getList();
        },
        onSubmit() {
            this.getList();
        },
        handleClick(row) {
            console.log(row);
        },
        async getList() {
            await axios
                .get(
                    `/api/system/list?code=${this.form.code}&name=${this.form.name}&currentPage=${this.page.currentPage}&pageSize=${this.page.pageSize}`
                )
                .then(res => {
                    this.tableData = res.data.list
                    this.page.currentPage = res.data.currentPage
                    this.page.pageSize = res.data.pageSize
                    this.page.totalSize = res.data.totalSize
                })
        }
    },
    created() {
      this.getList();
    }
};
</script>
