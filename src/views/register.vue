<template>
  <el-form :model="model" :rules="rules">
    <div class="login">

      <h1 align="center" class="el-bottom">Register</h1>

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

      <el-form-item label="Comfirm Password" prop="confirm">
        <el-input
          prefix-icon="el-icon-key"
          type="password"
          name="confirm"
          v-model="model.confirm"
          placeholder="Confirm Password"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="reg-button" type="success" v-on:click="register()">Register</el-button>
      </el-form-item>

    </div>
  </el-form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        username: "",
        password: "",
        confirm: ""
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
        ],
      }
    };
  },
  methods: {
    login() {
      if (this.model.username != "" && this.model.password != "") {
        if (
          this.model.username == this.$parent.mockAccount.username &&
          this.model.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "space" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
    register() {

        if(this.model.username != ""
        && this.model.password != ""
        && this.model.confirm != "") {

            if (this.model.password == this.model.confirm) {
                
                this.$router.push({name: "login"});
                
            } else {
                alert("Two passwords are not the same");
                console.log("Two passwords are not the same");
            }
        } else {
            alert("please fill in all items in the form");
        }

    }
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
  margin-top: 20px;
}
</style>

<style lang = "scss">
.login .el-form-item {
    margin-bottom: 10px;
}
</style>