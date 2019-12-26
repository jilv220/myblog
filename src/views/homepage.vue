<template>
  <el-container class="homepage">
    <el-header>
      <!-- Login/ Reg-->
      <el-row class="login-reg" type="flex" justify="end">
        <el-button class="login-button" type="primary" @click="toLogin()">Login</el-button>
        <el-button class="reg-button" type="success" @click="toRegister()">Register</el-button>

        <el-col span='4'>
        <el-input 
        class="search-bar" 
        prefix-icon="el-icon-search" 
        v-model="search" 
        placeholder="Search">
        </el-input>
        </el-col>

      </el-row>
    </el-header>

    <el-main>
      <!-- Nav Bar -->
      <el-row class="nav-bar" type="flex">
        <el-col>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">Latest Published</el-menu-item>
            <el-submenu index="2">
            <template slot="title">Articles by Category</template>
              <el-menu-item index="2-1">Coding Related</el-menu-item>
              <el-menu-item index="2-2">Chit Chat</el-menu-item>
              <el-menu-item index="2-3">Notes</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>

      <!-- blog content-->
      <v-list class="blog-content" two-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-list-item v-else :key="item.title" avatar>
            <!-- <v-list-item>
            <img :src="item.avatar" />
            </v-list-item>-->

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </el-main>

    <el-footer>
      <el-row type="flex" justify="center">
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      items: [],
      search: '',
    };
  },
  created: function initItems() {
    for (var i = 1; i < 20; i++) {
      if (i % 2 == 1) {
        this.items.push({
          title: "Test",
          subtitle: "test content"
        });
      } else {
        this.items.push({
          divider: true,
          inset: true
        });
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style scoped>
.homepage {
  background-image: url("../assets/bg.jpg");
  background-position: -300px;
  background-color: white;
}
.search-bar {
  margin-left: 10px;
}

.blog-content {
  background-color: white;
}

.login-reg {
  margin-top: 10px;
  margin-right: 10px;
}

.login-button {
  float: right;
  border-radius: 4px;
}

.reg-button {
  float: right;
  border-radius: 4px;
}
</style>