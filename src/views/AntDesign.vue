<template>
  <div class="antDesign">
    <h1>This is an Ant-Design Page</h1>
    <div class="timeLine">
      <a-timeline>
        <a-timeline-item
          v-for="item in data"
          :key="item.id"
          :color="item.dot === true ? 'red' : 'green'"
        >
          <template #dot v-if="!item.dot">
            <CheckCircleTwoTone two-tone-color="#52c41a" />
          </template>
          {{ item.content }}
        </a-timeline-item>
        <a-timeline-item>
          <template #dot>
            <SmileOutlined />
          </template>
          未完待续...
        </a-timeline-item>
      </a-timeline>
    </div>
    <footer>你也可以往上面的时间线组件里添加一些东西~</footer>
    <a-input
      class="ipt"
      placeholder="请输入添加内容~"
      v-model:value="addText"
    ></a-input>
    <a-button type="primary" @click="add">添加</a-button>
  </div>
</template>

<script setup>
import { SmileOutlined, CheckCircleTwoTone } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref } from "vue";

let data = ref([
  { id: 1, content: "B站开始学习CLI工具开发 2023-07-11", dot: true },
  { id: 2, content: "完成基本配置 2023-07-12", dot: false },
  { id: 3, content: "完成编写命令可选项 2023-07-12", dot: false },
  { id: 4, content: "开始编写终端自定义命令 2023-07-13", dot: true },
  { id: 5, content: "完成创建项目命令功能 2023-07-13", dot: false },
  { id: 6, content: "完成创建vue组件命令功能 2023-07-13", dot: false },
  { id: 7, content: "开始Axios的二次封装 2023-07-13", dot: true },
  { id: 8, content: "完成模板的克隆功能 2023-07-13", dot: false },
  { id: 9, content: "完成Ant-Design的导入使用 2023-07-13", dot: false },
  { id: 10, content: "解决了组件无法缓存的问题 2023-07-14", dot: false },
  { id: 11, content: "完成文档的编写 2023-07-15", dot: false },
  { id: 12, content: "完成文档的发布 2023-07-16", dot: false },
  { id: 13, content: "完成seb-cli的npm包的发布 2023-07-18", dot: false },
]);

let addText = ref("");

const add = function () {
  let id = data.value.length + 1;
  let obj = {};
  obj.id = id;
  obj.content = addText.value;
  console.log("test: ", addText.value);
  let date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  let now = `${year}-${month}-${day}`;
  obj.content = addText.value + " " + now;
  obj.dot = false;
  data.value.push(obj);
  message.success("添加成功~");
};
</script>

<style scoped>
.timeLine {
  width: 25%;
  margin: 20px auto;
  padding: 10px;
  max-height: 450px;
  overflow-y: scroll;
}

.timeLine :deep(.ant-timeline-item-content) {
  text-align: left;
}
.ipt {
  margin-top: 20px;
  width: 250px;
}
</style>
