<template>
  <div class="container">
    <el-row class="row-box">
      <el-col :span="8" :xs="{span:20,offset:2}" :offset="4" class="content">
        <p v-html="$t('public.slogan')"></p>
      </el-col>
      <el-col :span="5" :xs="{span:20,offset:2}" :offset="4" class="sign-box">
        <el-form
          label-position="left"
          :model="loginModel"
          :rules="loginRule"
          ref="loginModel"
        >
          <el-form-item :label="$t('public.email')" class="sign-item" prop="email">
            <el-input v-model="loginModel.email" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item :label="$t('public.psw')" class="sign-item" prop="password">
            <el-input
              v-model="loginModel.password"
              class="sign-input"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            class="sign-btn"
            @click="login"
            type="primary"
            v-loading.fullscreen.lock="loading"
            >{{$t('public.signin')}}</el-button
          >
          <p class="sign_up">
            {{$t('public.noAccount')}}<strong @click="toggleForm">{{$t('public.signup')}}</strong>{{$t('public.now')}}
          </p>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { encrypt } from "../components/encryption.js";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      loginModel: {
        email: "",
        password: "",
      },
      loginRule: {
        email: [{ required: true, message: this.$t('warning.needEmail'), trigger: "blur" }],
        password: [{ required: true, message: this.$t('warning.needPsw'), trigger: "blur" }],
      },
    };
  },
  created() {
    this.$emit("switchHeader", false);
    this.$emit("switchFooter", false);
  },
  methods: {
    login() {
      this.loading = true;
      let param = {
        email: this.loginModel.email,
        password: encrypt(this.loginModel.password).toString(),
      };
      this.$refs.loginModel.validate((valid) => {
        if (valid) {
          this.$axios
            .post("sign-in", param)
            .then((res) => {
              this.loading = false;
              localStorage.setItem("ifLogin", true);
              this.$router.push({
                path: '/main'
              })
            })
            .catch((err) => {
              this.loading = false;
              this.$message.error(err);
            });
        } else {
          this.loading = false;
          this.$message.error("error");
          return false;
        }
      });
    },
    getCode() {
      // const email = this.signupData.email.replace(/\%40/, "@");
      const email = window.btoa(this.signupData.email);
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
    toggleForm() {
      this.$router.push({
        path: "/signup",
      });
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  /* padding-top: 110px; */
  height: 100%;
  width: 100%;
  background: url(../assets/image/login-bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* letter-spacing: 3px; */
}
.row-box {
  height: 100%;
  width: 100%;
}
.content {
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.content p {
  font-size: 1rem;
  line-height: 1.5rem;
}
p {
  font-size: .3rem;
}
.sign-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sign-btn {
  font-size: .4rem;
  font-weight: 600;
  padding: .4rem;
  /* width: 55%; */
  margin-top: .4rem;
  white-space: pre;
}
.sign-input {
  height: 1rem;
}
.code_input {
  width: 70%;
}
.code_btn {
  height: 1rem;
}
.sign-item {
  margin-bottom: .4rem;
}
.sign_up {
  text-align: right;
  margin-top: 1rem;
  letter-spacing: 2px;
}
.sign_up strong {
  color: #409eff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .content {
    height: 30%;
  }
  .content p {
    width: 100%;
    text-align: center;
    font-size: .5rem;
  }
  .sign-box {
    height: 70%;
  }
}
</style>
