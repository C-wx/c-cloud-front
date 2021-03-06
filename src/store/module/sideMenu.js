/*
 * @Desc:
 * @Author: cbuc
 * @Date: 2021-08-08 20:31:56
 */
// import { getStorage } from '@/request/file.js'

export default {
  state: {
    storageValue: 0, //  文件已占用的存储空间大小
    totalStorageValue: 0,
  },
  mutations: {
    /**
     * 保存文件已占用的存储空间大小
     * @param {object} state Vuex 的 state 对象
     * @param {number} data 存储大小
     */
    setStorageValue(state, data) {
      state.storageValue = data
    },
    setTotalStorageValue(state, data) {
      state.totalStorageValue = data
    },
  },
  actions: {
    /**
     * 获取文件已占用的存储空间
     */
    showStorage(context) {
      console.log("获取存储容量", context)
      // TODO 获取存储容量
      return "123";
      // return getStorage().then((res) => {
      //   if (res.success) {
      //     context.commit(
      //       'setStorageValue',
      //       res.data ? Number(res.data.storageSize) : 0
      //     )
      //     context.commit(
      //       'setTotalStorageValue',
      //       res.data ? Number(res.data.totalStorageSize) : 0
      //     )
      //   } else {
      //     this.$message.error(res.message)
      //   }
      // })
    },
  },
}
