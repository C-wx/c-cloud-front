<!--
 * @Desc: 
 * @Author: cbuc
 * @Date: 2021-08-08 19:38:37
-->
<template>
  <div class="header-wrapper">

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item
        index="File"
        :route="{ name: 'File', query: { fileType: 0, filePath: '/' } }"
        >网盘</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      logoUrl: require('@/assets/images/common/logo_header.png'),
    }
  },
  computed: {
    ...mapGetters(['isLogin', 'username']),
    // 当前激活菜单的 index
    activeIndex() {
      return this.$route.name || 'File' //  获取当前路由名称
    },
    isProductEnv() {
      return (
        process.env.NODE_ENV !== 'development' &&
        location.origin === 'https://pan.qiwenshare.com'
      )
    },
  },
  methods: {
    /**
     * 退出登录
     * @description 清除 cookie 存放的 token 和 viewDomain 并跳转到登录页面
     */
    exitButton() {
      this.$message.success('退出登录成功！')
      this.$store.dispatch('getUserInfo').then(() => {
        this.removeCookies('viewDomain')
        this.removeCookies('token')
        this.$router.push({ path: '/login' })
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header-wrapper {
  width: 100%;
  box-shadow: $tabBoxShadow;
  display: flex;

  >>> .el-menu--horizontal {
    .el-menu-item:not(.is-disabled):hover {
      border-bottom-color: $Primary !important;
      background: $tabBackColor;
    }

    .external-link {
      padding: 0;
      a {
        display: block;
        padding: 0 20px;
      }
    }
  }

  .el-menu-title{
    background-color: rgb(84, 92, 100);
     display block;
     color : red;
     text-align center;
     width: 220px;
     font-size: 26px;
     font-family :'Courier New', 600, monospace;
     padding-top : 15px
  }

  .el-menu-demo {
    flex: 1;

    .headerLogo {
      color: $Primary;
      font-size: 60px;
      opacity: 1;
      cursor: default;

      a {
        display: block;
      }
    }

    .login, .register, .username, .exit {
      float: right;
    }
  }
}
</style>
