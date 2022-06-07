<template>
  <div class="container">
    <div class="top">
      <div class="top-bg"></div>
      <el-row class="content">
        <h1>Dondio. LTD</h1>
        <div class="tips">
          <p>Find a new trading way <br />Build your new business life</p>
          <el-button class="more" @click="showDialog">LEARN MORE</el-button>
        </div>
      </el-row>
    </div>
    <div class="mid">
      <div class="box">
        <div class="box-item" v-for="(item, index) of descData" :key="index">
          <img :src="item.img" alt="" />
          <strong>{{item.title}}</strong>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-bg"></div>
      <div class="content">
        <video src="@/assets/image/video_3.mp4" muted loop autoplay></video>
      </div>
    </div>
    <el-dialog
      title="Contact Us"
      :visible.sync="showContact"
      width="80%"
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
      language: "zh",
      showContact: false,
      descData: [
        {
          img: require("@/assets/image/mid-1.png"),
          title: 'The way we work',
          desc: "We provide a high standards for our customers, and partners. We believed people are the heart of our business.",
        },
        {
          img: require("@/assets/image/mid-2.png"),
          title: 'Careers',
          desc: "We encourage multi-culture where people can maximize their potential. ",
        },
        {
          img: require("@/assets/image/mid-3.png"),
          title: 'Markets we serve',
          desc: "We are mainly focusing on data asset solutions, and antique buying and selling.",
        },
        {
          img: require("@/assets/image/mid-4.png"),
          title: 'Clients',
          desc: "We help our clients with data opportunities bring them forward-thinking.",
        },
        {
          img: require("@/assets/image/mid-5.png"),
          title: 'Risk Management',
          desc: "Whether you are merchandising or selling, we will help our clients minimize uncertainty and manage risk with confidence.",
        },
      ],
    };
  },
  created() {
    this.$emit("switchHeader", true);
    this.$emit("switchFooter", true);
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem("lang") || "en";
  },
  methods: {
    showDialog() {
      this.showContact = !this.showContact;
    },
  },
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
  padding-top: 1.8rem;
  z-index: 9;
  text-align: center;
  color: #fff;
}
.content h1 {
  margin-top: 15%;
  font-size: 2.8rem;
  letter-spacing: 0.3rem;
}
.content .tips {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  letter-spacing: 0.1rem;
}
.content .tips > p {
  line-height: 1rem;
  margin-right: 6%;
  white-space: pre;
}
.content .tips .more {
  height: 1.5rem;
  font-size: 0.3rem;
  padding: 0 0.8rem;
}
.mid {
  text-align: center;
}
.box {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1.8rem;
}
.box-item {
  width: 17%;
  text-align: center;
}
.box-item img {
  margin-bottom: 0.5rem;
  width: 75%;
}
.box-item strong {
  display: block;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
}
.box-item p {
  line-height: 0.5rem;
  font-size: 0.3rem;
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
  top: 30%;
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
@media (max-width: 718px) {
  .box-item {
    width: 40%;
    text-align: center;
  }
  .content h1 {
    font-size: 0.8rem;
  }
  .content .tips>p {
    font-size: 0.2rem;
    letter-spacing: 1px;
    line-height: 0.6rem;
  }
  .content .tips .more {
    height: .8rem;
    padding: 0 .4rem;
  }
}
</style>
