<template>
  <div class="footer">
    <el-container class="container">
      <el-aside class="aside" width="30%">
        <div>
          <p>SEARCH</p>
          <el-input class="input"></el-input>
        </div>
      </el-aside>
      <el-main class="main">
        <el-link v-for="item of listData" :key="item.route" class="item" :underline="false">
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
      listData: [
        {
          name: 'MAIN PAGE',
          route: 'main'
        },
        {
          name: 'PORTFOLIO',
          route: '1'
        },
        {
          name: 'HOME',
          route: '2'
        },
        {
          name: 'PRODUCTS',
          route: '3'
        },
        {
          name: 'ABOUT US',
          route: '4'
        },
        {
          name: 'MY PROFILE',
          route: '5'
        },
        {
          name: 'DOWNLOADS',
          route: '6'
        },
        {
          name: 'CONTACT',
          route: '7'
        },
        {
          name: 'DASHBOARD',
          route: '8'
        },
        {
          name: 'NEWS',
          route: '9'
        },
        {
          name: 'ARTICLES',
          route: '10'
        },
        {
          name: 'LOG OUT',
          route: '11'
        },
      ]
    };
  },
  methods: {},
};
</script>

<style scoped="scoped">
.footer {
  position: absolute;
  bottom: 0%;
  height: 250px;
  z-index: 99;
  width: 100%;
}
.container {
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
  margin-bottom: 40px;
  margin-top: 0;
  font-size: 22px;
  font-weight: 600;
}
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 30%;
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
}
</style>
