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
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-table>
  </div>
</template> 

<script>
import axios from 'axios'
export default {
    name: "system",
    data() {
        return {
            form: {
                name: "",
                code: ""
            },
            tableData: []
        };
    },
    created: {

    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        handleClick(row) {
            console.log(row);
        },
        pageOnchange(page) {
            this.currentPage = page;
            this.getList();
        },
        async getList() {
            // let res = await GameApi.getGameList({
            //     pn: this.currentPage,
            //     rn: this.numPage
            // });
            // this.productList = res.data.list;
            // if (res.data.pageInfo) {
            //     let { pn, rn, total } = res.data.pageInfo;
            //     this.currentPage = pn; // 当前页码
            //     this.numPage = rn; // 每页的条数
            //     this.countData = total; //总数据
            // }
            axios
                .get(
                    `/api/system/list?sysCode=${this.form.code}&sysName=${this.form.name}`
                )
                .then(res => {
                    this.tableData = res.data
                })
        }
    }
};
</script>
