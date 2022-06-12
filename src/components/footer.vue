<template>
  <div class="container">
    <el-container class="box">
      <el-aside class="aside" width="30%">
        <div>
          <p>SEARCH</p>
          <el-input class="input"></el-input>
        </div>
      </el-aside>
      <el-main class="main">
        <el-link v-for="item of listData" :key="item.name" class="item" :underline="false" @click="routerChange(item.route)">
          {{ item.name }}
        </el-link>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      listData: this.$t('footer.list')
    };
  },
  mounted() {
    this.listData = this.$t('footer.list')
  },
  methods: {
    routerChange(route) {
      this.$router.push({
        path: route
      })
    }
  },
};
</script>

<style scoped="scoped">
.container {
  position: absolute;
  bottom: 0%;
  height: 3rem;
  z-index: 99;
  width: 100%;
}
.box {
  height: 100%;
}
.aside {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
}
.aside>div {
  width: 50%;
}
.aside p {
  margin-bottom: 0.4rem;
  margin-top: 0;
  font-size: 0.5rem;
  font-weight: 600;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 30%;
  font-size: 0.3rem;
  line-height: 0.3rem;
  font-weight: 600;
}
@media (max-width: 768px) {
  .container {
    height: 2rem;
  }
  .aside p {
    font-size: 0.2rem;
  }
  .item {
    font-size: 0.2rem;
  }
}
</style>
