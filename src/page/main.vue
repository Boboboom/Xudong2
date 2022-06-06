<template>
  <div class="main">
    <div class="top">
      <div class="top-bg"></div>
      <el-row class="content">
        <!-- <el-col :span="10" :offset="7" class="text"> -->
        <h1>Dondio. LTD</h1>
        <!-- <h2>{{ $t('test') }}</h2> -->
        <div class="tips">
          <p>Find a new trading way <br />Build your new business life</p>
          <el-button class="more" @click="showDialog">LEARN MORE</el-button>
        </div>
        <!-- <el-col :span="10">test</el-col> -->
        <!-- </el-col> -->
      </el-row>
    </div>
    <div class="mid">
      <div class="desc">
        <!-- <img src="../assets/image/main_1.jpeg" alt="">
        <img src="../assets/image/main_2.jpeg" alt=""> -->
        <!-- <h2>HEADING</h2>
        <p>
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO EIUSMOD
          TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM
          VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA
          COMMODO CONSEQUAT DUIS AUTE IRURE DOLOR
        </p> -->
      </div>
      <div class="box">
        <div class="box-item" v-for="(item, index) of descData" :key="index">
          <img :src="item.img" alt="" />
          <p v-html="item.desc"></p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-bg">
      </div>
      <div class="content"> 
          <!-- <h2>HEADING</h2>
          <p>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO
            EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM
            AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT1
            ALIQUIP EX EA COMMODO CONSEQUAT DUIS AUTE IRURE DOLOR
          </p> -->
        <video
          src="@/assets/image/video_3.mp4"
          muted
          loop
          autoplay
        ></video>
        </div>
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
  name: "Home",
  data() {
    return {
      language: 'zh',
      showContact: false,
      descData: [
        {
          img: require("@/assets/image/mid-1.png"),
          desc: "The way we work<br />We provide a high standards for our customers, and partners. We believed people are the heart of our business.",
        },
        {
          img: require("@/assets/image/mid-2.png"),
          desc: "Careers<br />We encourage multi-culture where people can maximize their potential. ",
        },
        {
          img: require("@/assets/image/mid-3.png"),
          desc: "Markets we serve<br />We are mainly focusing on data asset solutions, and antique buying and selling.",
        },
        {
          img: require("@/assets/image/mid-4.png"),
          desc: "Clients<br />We help our clients with data opportunities bring them forward-thinking.",
        },
        {
          img: require("@/assets/image/mid-5.png"),
          desc: "Risk Management<br />Whether you are merchandising or selling, we will help our clients minimize uncertainty and manage risk with confidence.",
        },
      ],
    };
  },
  created() {
    this.$emit("switchHeader", true);
    this.$emit("switchFooter", true);
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem('lang') || 'en'
  },
  methods: {
    showDialog() {
      this.showContact = !this.showContact
    }
  }
};
</script>

<style scoped>
.top {
  position: relative;
}
.top-bg {
  background-image: url(../assets/image/main-bg-top.png);
  height: 0;
  padding-bottom: calc(80%);
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 110px;
  z-index: 9;
  text-align: center;
  color: #fff;
}
.content h1 {
  margin-top: 15%;
  font-size: 160px;
  letter-spacing: 20px;
}
.content .tips {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  letter-spacing: 5px;
}
.content .tips > p {
  line-height: 60px;
  margin-right: 6%;
  white-space: pre;
}
.content .tips .more {
  height: 100px;
  font-size: 20px;
  padding-left: 60px;
  padding-right: 60px;
}
.mid {
  text-align: center;
}
.desc {
  /* width: 45%; */
  margin: 0 auto;
  /* text-align: left; */
}
.desc img {
  width: 30%;
  margin: 0 15px;
}
.desc h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
}
.desc p {
  font-size: 18px;
  line-height: 50px;
}
.box {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
}
.box-item {
  width: 17%;
  /* max-width: 300px; */
  text-align: center;
}
.box-item img {
  margin-bottom: 30px;
  width: 75%;
}
.box-item p {
  line-height: 45px;
  font-size: 26px;
}
@media (max-width: 500px) {
  .box-item {
    width: 40%;
    text-align: center;
  }
}
.bottom {
  position: relative;
}
.bottom-bg {
  background-image: url(../assets/image/main-bg-bottom.png);
  height: 0;
  padding-bottom: calc(70%);
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.bottom .content {
  /* width: 45%; */
  position: absolute;
  /* left: 15%; */
  top: 20%;
  /* text-align: left; */
}
.bottom .content video {
  width: 50%;
}
.bottom .content h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
}
.bottom .content p {
  font-size: 18px;
  line-height: 50px;
}
</style>
