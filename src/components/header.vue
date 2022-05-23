<template>
  <div class="header">
    <el-menu
      :default-active="menuIndex"
      class="header-menu"
      mode="horizontal"
      background-color="#000000"
      text-color="#ffffff"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <el-menu-item index="main" class="menu-item">MAIN PAGE</el-menu-item>
      <el-menu-item index="products" class="menu-item">PRODUCTS</el-menu-item>
      <!-- <el-menu-item index="3" class="menu-item">DOWNLOADS</el-menu-item> -->
      <!-- <el-menu-item index="4" class="menu-item">PORTFOLIO</el-menu-item> -->
      <el-menu-item index="about" class="menu-item">ABOUT US</el-menu-item>
      <el-menu-item index="contact" class="menu-item">CONTACT</el-menu-item>
      <!-- <el-menu-item index="7" class="menu-item">ARTICLES</el-menu-item> -->
    </el-menu>

    <el-dialog
      title="Contact Us"
      :visible.sync="showContact"
      width="40%"
      top="25vh"
      :modal-append-to-body="false"
      class="contact-box"
    >
      <p class="text">
        <span>Phone:</span>
        +44 7859 015 873
      </p>
      <p class="text">
        <span>Email:</span>
        info@dondio.co.uk
      </p>
      <p class="text">
        <span>Live Chat:</span>
        When our live chat is active you see it in the lower right corner of the
        screen.
      </p>
      <p class="text">
        When you reach out via email we try to reply to you within two business
        days. We speak the following languages Chinese, English and Dutch. 
      </p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuIndex: "main",
      showContact: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == "contact") {
        this.showContact = !this.showContact;
      } else {
        this.$router.push({
          path: key,
        });
      }
    },
  },
};
</script>

<style scoped="scoped">
.header {
  position: fixed;
  z-index: 99;
  width: 100%;
}
.header-menu {
  display: flex;
  justify-content: space-around;
  font-weight: 500;
}
.menu-item {
  height: 110px;
  line-height: 110px;
  font-size: 18px;
}
.contact-box {
  text-align: left;
}
.contact-box .text {
  font-size: 18px;
}
.text span {
  font-weight: 700;
}
</style>
