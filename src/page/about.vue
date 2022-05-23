<template>
  <div class="main">
    <div class="top">
      <div class="top-bg"></div>
      <el-row class="content">
        <!-- <el-col :span="10" :offset="7" class="text"> -->
        <h1>ABOUT US</h1>
        <div class="tips">
          <p>LOREM IPSUM DOLOR SIT AMET <br />CONSECTETUR ADIPISICING ELIT</p>
          <el-button class="more">LEARN MORE</el-button>
        </div>
        <!-- <el-col :span="10">test</el-col> -->
        <!-- </el-col> -->
      </el-row>
    </div>
    <div class="mid">
      <div class="desc">
        <h2>WHAT WE DO</h2>
        <p>
          We have been connecting our customers to the cross-border Online
          business. We grow prosperity by advancing trade.
        </p>
      </div>
      <div class="box">
        <video
          src="@/assets/image/video_1.mp4"
          muted
          loop
          autoplay
          style="margin: 0 auto;width:80%"
        ></video>
        <!-- <div class="box-item" v-for="(item, index) of descData" :key="index">
          <img :src="item.img" alt="" />
          <p>{{ item.desc }}</p>
        </div> -->
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-bg">
        <div class="content">
          <!-- <h2>HEADING</h2> -->
          <p>
            We store, source, and deliver physical commodities efficiently,
            reliably, and responsibly from Euro to China. Strengthening channel
            links between our customers with the commodities they require where
            and when they need them.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      descData: [
        {
          img: require("@/assets/image/mid-1.png"),
          desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO EIUSMOD TEMPOR",
        },
        {
          img: require("@/assets/image/mid-2.png"),
          desc: "ADIPISICING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM QUIS NOSTRUD",
        },
        {
          img: require("@/assets/image/mid-3.png"),
          desc: "SED DO SIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM",
        },
        {
          img: require("@/assets/image/mid-4.png"),
          desc: "TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA",
        },
        {
          img: require("@/assets/image/mid-5.png"),
          desc: "UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM QUIS NOSTRUD",
        },
      ],
    };
  },
  created() {
    this.$emit("switchHeader", true);
    this.$emit("switchFooter", true);
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
  font-size: 20px;
  letter-spacing: 5px;
}
.content .tips > p {
  line-height: 60px;
  margin-right: 6%;
  white-space: pre;
}
.content .tips .more {
  height: 78px;
  font-size: 20px;
  padding-left: 60px;
  padding-right: 60px;
}
.mid {
  text-align: center;
}
.desc {
  width: 45%;
  margin: 0 auto;
  text-align: left;
}
.desc h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
}
.desc p {
  font-size: 20px;
  line-height: 50px;
}
.box {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.box-item {
  width: 17%;
  text-align: center;
}
.box-item img {
  margin-bottom: 30px;
}
.box-item p {
  line-height: 30px;
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
  width: 45%;
  position: absolute;
  left: 15%;
  top: 30%;
  text-align: left;
}
.bottom .content h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
}
.bottom .content p {
  font-size: 20px;
  line-height: 50px;
}
</style>
