<template>
  <div class="main">
    <div class="top">
      <div class="top-bg"></div>
      <el-row class="content">
        <h1>{{$t('header.about')}}</h1>
        <div class="tips">
          <p v-html="$t('public.slogan')"></p>
          <el-button class="more" @click="showDialog">{{
            $t("public.more")
          }}</el-button>
        </div>
      </el-row>
    </div>
    <div class="mid">
      <div class="desc">
        <h2>{{ $t("about.title_1") }}</h2>
        <p>{{ $t("about.desc_1") }}</p>
      </div>
      <div class="box">
        <video
          src="@/assets/image/video_1.mp4"
          muted
          loop
          :autoplay="autoplay"
          style="margin: 0 auto; width: 80%"
        ></video>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-bg">
        <div class="content">
        <p>{{ $t("about.desc_2") }}</p>
          <img src="../assets/image/about_1.jpeg" alt="" />
        </div>
      </div>
    </div>
    <el-dialog
      title="Contact Us"
      :visible.sync="showContact"
      :width="dialogWidth"
      top="25vh"
      :modal-append-to-body="false"
      class="contact-box"
    >
      <p class="text">
        <span>{{ $t("public.phone") }}:</span>
        +44 7859 015 873
      </p>
      <p class="text">
        <span>{{ $t("public.email") }}:</span>
        info@dondio.co.uk
      </p>
      <p class="text">
        <span>{{ $t("public.liveChat") }}:</span>
        {{ $t("public.liveChatTxt") }}
      </p>
      <p class="text">
        {{ $t("public.mailTxt") }}
      </p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showContact: false,
      dialogWidth: "45%",
      autoplay: true
    };
  },
  created() {
    this.$emit("switchHeader", true);
    this.$emit("switchFooter", true);
    if (document.body.clientWidth < 800) {
      this.dialogWidth = "80%";
      this.autoplay = false
    }
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
  margin-top: 2rem;
}
.content .tips > p {
  line-height: 1rem;
  margin-right: 6%;
  white-space: pre;
}
.content .tips .more {
  height: 1rem;
  font-size: 0.3rem;
  padding: 0 0.6rem;
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
  font-size: 0.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.desc p {
  font-size: 0.4rem;
  line-height: 0.8rem;
}
.box {
  width: 45%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* margin-top: 100px; */
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
  width: 80%;
  position: absolute;
  left: 15%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
}
.bottom .content img {
  width: 50%;
}
.bottom .content h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
}
.bottom .content p {
  width: 40%;
  font-size: 0.4rem;
  line-height: 0.8rem;
}
@media (max-width: 768px) {
  .box-item {
    width: 40%;
    text-align: center;
  }
  .content h1 {
    font-size: 0.8rem;
  }
  .content .tips {
    margin-top: 0.6rem;
  }
  .content .tips > p {
    font-size: 0.2rem;
    letter-spacing: 1px;
    line-height: 0.6rem;
  }
  .content .tips .more {
    height: 0.8rem;
    padding: 0 0.4rem;
  }
  .box {
    width: 80%;
  }
  .bottom .content {
    padding-top: 1.3rem !important;
  }
}
</style>
