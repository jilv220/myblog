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
        callback(new Error("Please enter username"));
      } else if (value.length < 6 || value.length > 12) {
        callback(new Error("Username should between 6 to 12 characters"));
      } else {
        // query sql to check if exist
        setTimeout(() => {
          var params = {
            userName: value
          };

          this.$axios({
            method: "get",
            url: "http://localhost:8088/api/user/find",
            params: params
          }).then(function(response) {
            if (response.data == true) {
              console.log("works");
              callback(new Error("Username already used"));
            } else {
              callback();
            }
          });
        }, 300);
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter password"));
      } else if (value.length < 6 || value.length > 12) {
        callback(new Error("Password should between 6 to 12 characters"));
      } else {
        setTimeout(() => {

          if (!value.match(/[A-Z]+/)) {
            callback(new Error("Password should contain at least one uppercase"));
          } else if (!value.match(/[0-9]+/)) {
            callback(new Error("Password should contain at least one number"));
          } else {
            callback();
          }

        }, 200);
      }
    };

    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please recheck your password"));
      } else if (value !== this.model.password) {
        callback(new Error("These passwords do not match"));
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
          var params = new URLSearchParams();
          params.append("userName", this.model.username);
          params.append("passWord", this.model.password);

          // post with axios
          this.$axios({
            method: "post",
            url: "http://localhost:8088/api/user/add",
            data: params
          })
            .then(function(response) {
              console.log(response);
            })
            .catch(e => {
              console.log(e);
            });

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