<template>
  <div class="login">
    <el-row class="row-box">
      <el-col :span="8" class="content">
        <h1>LADNING PAGE</h1>
        <p>
          LOREM IPSUM DOLOR SIT<br />
          AMET CONSECTETUR<br />
          ADIPISICING ELIT SED DO<br />
          EIUSMOD TEMPOR<br />
          INCIDIDUNT UT LABORE ET<br />
          DOLORE MAGNA ALIQUA
        </p>
      </el-col> 
      <!-- <el-col :span="8"></el-col> -->
      <el-col :span="4" :offset="10" class="login-box">
        <el-form label-position="left" :model="loginModel">
          <el-form-item label="YOUR NAME" class="login-item">
            <el-input v-model="loginModel.name"></el-input>
          </el-form-item>
          <el-form-item label="EMAIL ADDRESS" class="login-item">
            <el-input v-model="loginModel.region"></el-input>
          </el-form-item>
          <el-form-item label="PHONE NUMBER" class="login-item">
            <el-input v-model="loginModel.type"></el-input>
          </el-form-item>
          <el-button class="login-btn">GET  FREE  SESSION</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      loginModel: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  created() {
    this.$emit("switchHeader", false);
    this.$emit("switchFooter", false);
  },
};
</script>

<style scoped>
.login {
  position: fixed;
  padding-top: 110px;
  height: 100%;
  width: 100%;
  background: url(../assets/image/login-bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  letter-spacing: 3px;
}
.row-box {
  height: 100%;
  width: 100%;
}
.content {
  height: 80%;
  padding-left: 8%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
h1 {
  font-size: 36px;
  line-height: 60px;
}
p {
  text-align: left;
  line-height: 46px;
  font-size: 18px;
}
.login-box {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-btn {
  font-size: 18px;
  font-weight: 600;
  padding: 30px;
  width: 100%;
  margin-top: 80px;
  white-space: pre;
}
</style>
