<template>
  <div class="paging">
    <div class="block hidden-xs">
      <el-pagination @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     background
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 20, 30]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="totalList">
      </el-pagination>
    </div>
    <div class="block visible-xs">
      <el-pagination @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 20, 30]"
                     :page-size="pageSize"
                     layout="sizes, prev, pager, next"
                     :total="totalList">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      totalPages: { // 总页数
        type: Number,
        default: 1
      },
      totalList: { // 总数据
        type: Number,
        default: 1
      },
      initPages: { // 初始页码
        type: Number,
        default: 1
      },
      pageSize: { // 默认pageSize
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        currentPage: 1
      }
    },
    created () {
      this.currentPage = this.initPages
    },
    methods: {
      handleCurrentChange (val) {
        //console.log(`当前页: ${val}`)
        this.$emit('go-page', {page: val})
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
        this.$emit('size-change', {pageSize: val})
      },
    }
  }
</script>

<style lang="less">
  .paging {
    text-align: center;
    margin-top: 15px;
    padding-bottom: 20px;
  }
  .pc-paging {display: block}
  .phone-paging {display: none}
  @media (max-width: 420px) {
    .paging {
      text-align: center;
      margin-top: 0;
    }
    .pc-paging {display: none}
    .phone-paging {display: block}
  }
  .block {
    span {
      font-size: 14px;
    }
    li {
      font-size: 14px;
    }
  }
</style>
