function handleMessage (state) {
  switch (state) {
    case 1:
      this.$notify({
        type: 'success',
        title: '成功',
        message: '数据已添加'
      });
      break;
    case 2:
      this.$notify({
        type: 'success',
        title: '成功',
        message: '数据已修改'
      });
      break;
    case 3:
      this.$notify({
        type: 'success',
        title: '成功',
        message: '数据已删除'
      });
      break;
    case -1:
      this.$notify.error({
        title: '错误',
        message: '系统维护中，请稍后再试'
      });
      break;
    case -2:
      this.$notify.info({
        title: '错误',
        message: '暂无数据'
      });
      break;
    case -11:
      this.$notify.error({
        title: '错误',
        message: '该商品编号已存在'
      });
      break;
    case -500:
      this.loading = false;
      this.$notify.error({
        title: '错误',
        message: '服务器未响应'
      });
      break;
    default :
      this.$notify.error({
        title: '错误',
        message: state
      });
      break
  }
}

export default handleMessage
