<template>
  <el-form :model="model" :rules="rules" ref="model" status-icon>
    <div class="register">
      <h1 align="center" class="el-bottom">Register</h1>

      <el-form-item label="Username" prop="username" autocomplete="off">
        <el-input
          prefix-icon="el-icon-user-solid"
          type="text"
          name="username"
          v-model="model.username"
          placeholder="Username"
        />
      </el-form-item>

      <el-form-item label="Password" prop="password" autocomplete="off">
        <el-input
          prefix-icon="el-icon-key"
          type="password"
          name="password"
          v-model="model.password"
          placeholder="Password"
        />
      </el-form-item>

      <el-form-item label="Comfirm Password" prop="confirm" autocomplete="off">
        <el-input
          prefix-icon="el-icon-key"
          type="password"
          name="confirm"
          v-model="model.confirm"
          placeholder="Confirm Password"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="reg-button" type="success" @click="register('model')">Register</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "register",
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter Username"));
      } else {
        setTimeout(() => {
          if (this.model.username !== "") {
            this.$refs.model.validateField("username");
          }
          callback();
        }, 300);
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter Password"));
      } else {
        
        setTimeout(() => {
           if (this.model.password !== "") {
          this.$refs.model.validateField("password");
        }
        callback();
        }, 300);
      }
    };

    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please confirm Password"));
      } else if (value !== this.model.password) {
        callback(new Error("Two Passwords are not the same"));
      } else {
        callback();
      }
    };

    return {
      model: {
        username: "",
        password: "",
        confirm: ""
      },
      rules: {
        username: [
          {
            validator: validateUserName,
            trigger: "blur"
          }
        ],

        password: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],

        confirm: [
          {
            validator: checkPass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("Register Success!");
          this.$router.push({ name: "login" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.register {
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
.register .el-form-item {
  margin-bottom: 10px;
}
</style>