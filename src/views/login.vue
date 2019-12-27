<template>
  <el-form :model="model" :rules="rules">
    <div class="login">
      <h1 align="center" class="el-bottom">Login</h1>

      <el-form-item label="Username" prop="username">
        <el-input
          prefix-icon="el-icon-user-solid"
          type="text"
          name="username"
          v-model="model.username"
          placeholder="Username"
        />
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input
          prefix-icon="el-icon-key"
          type="password"
          name="password"
          v-model="model.password"
          placeholder="Password"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="login-button" type="primary" v-on:click="login()">Login</el-button>
      </el-form-item>

      <el-form-item>
        <el-button class="reg-button" type="success" v-on:click="register()">Register</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import router from "../router/router.js"
export default {
  name: "login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 5,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          }
        ],

        password: [
          { message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      var params = new URLSearchParams();
      params.append("userName", this.model.username);
      params.append("passWord", this.model.password);

      // post with axios
      this.$axios({
        method: "post",
        url: "http://localhost:8088/api/login",
        data: params
      })
      .then(function(response) {

        console.log(response);
        
        if (response.data.code == '200') {

          router.push({ name: "space" })
          
        } else {
          alert("Invalid username or password");
        }

      })

    },
    register() {
      this.$router.push({ name: "register" });
    },
    onBackListener() {}
  },
  mounted() {
    document.addEventListener("backbutton", this.onBackListener, false);
  },
  beforeDestroy() {
    document.removeEventListener("backbutton", this.onBackListener);
  }
};
</script>

<style scoped>
.login {
  width: 300px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
}

.el-bottom {
  margin-bottom: 10px;
}

.bg-purple-light {
  background: #e5e9f2;
}

.reg-button {
  width: 100%;
}

.login-button {
  width: 100%;
  margin-top: 20px;
}
</style>

<style lang = "scss">
.login .el-form-item {
  margin-bottom: 10px;
}
</style>