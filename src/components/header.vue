<template>
  <div class="container">
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
      <el-menu-item index="about" class="menu-item">ABOUT US</el-menu-item>
      <el-menu-item index="contact" class="menu-item">CONTACT</el-menu-item>
    </el-menu>

    <div class="lang-box" @click="changeLang">
      <span>{{ currentLang }}</span>
      <img :src="langIcon" alt="" />
    </div>

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
      currentLang: "EN",
      langIcon: require("@/assets/image/en.png"),
    };
  },
  created() {
    this.menuIndex = this.$route.name;
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem("lang") || "en";
    this.langIcon = require(`@/assets/image/${this.$i18n.locale}.png`);

    switch (this.$i18n.locale) {
      case "en":
        this.currentLang = "EN";
        break;
      case "zh":
        this.currentLang = "ZH";
        break;
      case "de":
        this.currentLang = "DE";
        break;
      default:
        this.currentLang = "EN";
        break;
    }
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
    changeLang() {
      if (this.currentLang == "EN") {
        // this.currentLang = 'ZH'
        // this.langIcon = require('@/assets/image/zh.png')
        localStorage.setItem("lang", "zh");
      } else if (this.currentLang == "ZH") {
        // this.currentLang == 'DE'
        // this.langIcon = require('@/assets/image/de.png')
        localStorage.setItem("lang", "de");
      } else {
        // this.currentLang == 'EN'
        // this.langIcon = require('@/assets/image/en.png')
        localStorage.setItem("lang", "en");
      }
      this.$router.go(0);
    },
  },
};
</script>

<style scoped="scoped">
.container {
  position: fixed;
  z-index: 99;
  width: 100%;
  background-color: #000000;
  display: flex;
}
.header-menu {
  display: flex;
  justify-content: space-around;
  font-weight: 500;
  width: calc(100% - 2rem);
}
.menu-item {
  height: 1.8rem !important;
  line-height: 1.8rem !important;
  font-size: 0.4rem;
}
.lang-box {
  width: 2rem;
  color: #ffffff;
  font-size: 0.4rem;
  line-height: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lang-box:hover {
  color: rgb(64, 158, 255);
}
.lang-box img {
  height: 0.5rem;
  width: 0.6rem;
  margin-left: 0.2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
@media (max-width: 718px) {
  .header-menu {
    width: calc(100% - 1.5rem);
  }
  .menu-item {
    font-size: 0.1rem;
  }
  .lang-box {
    font-size: 0.1rem;
    width: 1.5rem;
  }
  .lang-box span {
    display: none;
  }
}
</style>
