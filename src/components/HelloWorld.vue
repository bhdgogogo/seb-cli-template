<template>
  <h1>Welcome to seb-cli Tool</h1>
  <br />
  <p>利用这个脚手架可以帮助你快速安装以下的模块~</p>
  <ul>
    <li>
      <a target="_blank" href="https://github.com/vuejs/router">Router</a>
    </li>
    <li><a target="_blank" href="https://github.com/vuejs/vuex">Vuex</a></li>
    <li><a target="_blank" href="https://github.com/axios/axios">Axios</a></li>
    <li>
      <a
        target="_blank"
        href="https://www.antdv.com/docs/vue/getting-started-cn"
        >Ant-Design</a
      >
    </li>
  </ul>
  <br />
  <p>提供了两个模板供你使用~ 👇</p>
  <ul>
    <li>
      <a-tooltip title="Based on vue-cli"> vue3-template </a-tooltip>
    </li>
    <li>
      <a-tooltip title="Based on vuepress"> vuepress-template </a-tooltip>
    </li>
  </ul>
  <p></p>
  <br />
  <p>CLI-Version: <strong>1.0.3</strong></p>
  <p>Date: <strong>2023-07-18</strong></p>
  <p>
    Document:
    <a target="_blank" href="https://www.npmjs.com/package/seb-cli"
      ><strong>使用文档</strong></a
    >
  </p>
  <p>
    Author:
    <a target="_blank" href="https://github.com/bhdgogogo"
      ><strong>Seb</strong></a
    >
  </p>
  <footer>Copyright © 2023 Seb All Rights Reserved.</footer>
</template>

<script setup>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
}
a {
  color: #42b983;
  text-decoration: underline;
}
footer {
  text-align: center;
  font-size: 12px;
  color: #8b7e75;
}
</style>
