<template>
  <div class="container">
    <el-row class="row-box">
      <el-col :span="8" :xs="{span:20,offset:2}" :offset="4" class="content">
        <p v-html="$t('public.slogan')"></p>
      </el-col>
      <el-col :span="5" :xs="{span:20,offset:2}" :offset="4" class="sign-box">
        <el-form
          label-position="left"
          :model="signupData"
          :rules="signRule"
          ref="signupData"
        >
          <el-form-item :label="$t('public.email')" class="sign-item" prop="email">
            <el-input v-model="signupData.email" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item :label="$t('public.psw')" class="sign-item" prop="password">
            <el-input
              v-model="signupData.password"
              class="sign-input"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('public.phone')" class="sign-item" prop="phone">
            <el-input v-model="signupData.phone" class="sign-input"></el-input>
          </el-form-item>
          <el-form-item :label="$t('public.code')" class="sign-item" prop="code">
            <el-input
              v-model="signupData.code"
              class="sign-input code_input"
            ></el-input>
            <el-button
              class="code_btn"
              @click="getCode"
              type="primary"
              v-loading.fullscreen.lock="loading"
              >{{$t('public.get')}}</el-button
            >
            <el-button
              class="code_btn"
              @click="getCode"
              type="info"
              disabled
              v-if="timeout"
              >{{ time }}</el-button
            >
          </el-form-item>
          <el-button
            class="sign-btn"
            @click="signup"
            type="primary"
            v-loading.fullscreen.lock="loading"
            >{{$t('public.signup')}}</el-button
          >
          <p class="sign_up">
            {{$t('public.alreadyAccount')}}
            <strong @click="toggleForm">{{$t('public.signin')}}</strong> !
          </p>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { encrypt } from "../components/encryption.js";

export default {
  name: "Sign",
  data() {
    return {
      time: 60,
      timeout: null,
      loading: false,
      signupData: {
        email: "",
        password: "",
        phone: "",
        code: "",
      },
      signRule: {
        email: [{ required: true, message: this.$t('warning.needEmail'), trigger: "blur" }],
        password: [{ required: true, message: this.$t('warning.needPsw'), trigger: "blur" }],
        phone: [{ required: true, message: this.$t('warning.needPhone'), trigger: "blur" }],
        code: [{ required: true, message: this.$t('warning.needCode'), trigger: "blur" }],
      },
    };
  },
  created() {
    this.$emit("switchHeader", false);
    this.$emit("switchFooter", false);
  },
  methods: {
    getCode() {
      this.loading = true;
      const email = window.btoa(this.signupData.email);
      this.$axios
        .get("code", {
          params: { email },
        })
        .then((res) => {
          this.loading = false;
          this.timeout = setInterval(() => {
            this.time--;
            if (this.time < 1) {
              this.timeout = null;
              this.time = 60;
            }
          }, 1000);
        })
        .catch((err) => {
          this.loading = false;
          if (!email) {
            this.$message.error("no email");
          } else {
            this.$message.error(err);
          }
        });
    },
    signup() {
      this.loading = true;
      const param = {
        email: this.signupData.email,
        code: this.signupData.code,
        mobile: this.signupData.phone,
        password: encrypt(this.signupData.password).toString(),
      };
      this.$refs.signupData.validate((valid) => {
        if (valid) {
          this.$axios
            .post("sign-up", param)
            .then((res) => {
              this.loading = false;
              this.$message({ message: "success", type: "success" });
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
    toggleForm() {
      this.$router.push({
        path: "/",
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
  height: 0.8rem;
}
.code_btn {
  height: 0.8rem;
  position: absolute;
  width: 20%;
  bottom: 1px;
  right: 0;
}
.sign-item {
  margin-bottom: .4rem;
  position: relative;
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
  .code_btn {
    bottom: 3px;
  }
}
</style>
