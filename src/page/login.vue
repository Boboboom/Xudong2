<template>
  <div class="login">
    <el-row class="row-box">
      <el-col :span="8" :offset="4" class="content">
        <!-- <h1>LADNING PAGE</h1> -->
        <p>Find a new trading way <br />Build your new business life</p>
      </el-col>
      <!-- <el-col :span="8"></el-col> -->
      <el-col :span="5" :offset="4" class="sign-box">
        <el-form label-position="left" :model="loginModel" v-if="!ifSignup">
          <el-form-item label="Email" class="sign-item">
            <el-input v-model="loginModel.region" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item label="Password" class="sign-item">
            <el-input v-model="loginModel.type" class="sign-input"></el-input>
          </el-form-item>
          <el-button class="sign-btn" @click="login" type="primary"
            >Sign in</el-button
          >
          <el-button class="sign-btn" @click="showSignup">Sign up</el-button>
        </el-form>
        <el-form label-position="left" :model="loginModel" v-if="ifSignup">
          <el-form-item label="NAME" class="sign-item">
            <el-input v-model="signupData.name" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item label="EMAIL" class="sign-item">
            <el-input v-model="signupData.email" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item label="PHONE" class="sign-item">
            <el-input v-model="signupData.phone" class="sign-input"></el-input>
          </el-form-item>
          <el-button class="sign-btn" @click="getCode" type="primary"
            >Free Vertify Code</el-button
          >
          <el-button class="sign-btn" @click="login">Sign up</el-button>
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
      ifSignup: false,
      loginModel: {
        name: "",
        region: "",
        type: "",
      },
      signupData: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {
    this.$emit("switchHeader", false);
    this.$emit("switchFooter", false);
  },
  methods: {
    login() {
      let param = {
        email: "jip_peng@126.com",
        password: "Shv0WxLaTj1sU7SgfZMJNg==",
      };
      this.$axios
        .post("sign-in", param)
        .then((res) => {
          console.log("success", res);
        })
        .catch((err) => {
          console.log("err", err);
          console.log(123);
        });
    },
    getCode() {
      // const email = this.signupData.email.replace(/\%40/, "@");
      const email = encodeURI(this.signupData.email);
      console.log(email);
      this.$axios
        .get("code", {
          params: { email },
        })
        .then((res) => {
          console.log("success", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    showSignup() {
      this.ifSignup = true;
    },
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
.content p {
  font-size: 40px;
  line-height: 80px;
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
.sign-box {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sign-btn {
  font-size: 18px;
  font-weight: 600;
  padding: 30px;
  width: 55%;
  margin-top: 30px;
  white-space: pre;
}
.sign-input {
  min-height: 60px;
}
.sign-item {
  margin-bottom: 30px;
}
</style>
