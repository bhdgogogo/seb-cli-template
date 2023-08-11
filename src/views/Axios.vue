<template>
  <div class="axios">
    <h1>这是一个 Axios 示例页面</h1>
    <div class="myInput">
      <a-input v-model:value="text" placeholder="在这里输入一个name~">
        <template #prefix>
          <edit-two-tone />
        </template>
        <template #suffix>
          <a-tooltip title="Baidu Search Engine">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
    </div>

    <a-button type="primary" :loading="ifLoading" @click="getResult">
      {{ btnText }}
    </a-button>
    <div class="myTable">
      <a-table
        bordered
        :columns="columns"
        :data-source="data"
        :scroll="{ y: 240 }"
        :row-class-name="
          (_record, index) => (index % 2 === 1 ? 'table-striped' : null)
        "
      />
    </div>
  </div>
</template>

<script>
import { apiExample } from "@/api/index";
import { message } from "ant-design-vue";
import { EditTwoTone, InfoCircleOutlined } from "@ant-design/icons-vue";

export default {
  name: "Axios",
  components: {
    EditTwoTone,
    InfoCircleOutlined,
  },
  data() {
    return {
      data: [],
      columns: [
        {
          title: "type",
          dataIndex: "type",
          width: 150,
        },
        {
          title: "name",
          dataIndex: "name",
          width: 150,
        },
        {
          title: "value",
          dataIndex: "value",
          width: 150,
        },
      ],
      ifLoading: false,
      text: "",
      btnText: "Send Axios Request",
    };
  },
  methods: {
    async getResult() {
      // 输入的内容是wd
      const params = { name: this.text };
      this.ifLoading = true;
      this.btnText = "Requesting...";
      /*       const { data } = await apiExample(params, this.callback);
      if (data) {
        this.data.push(data);
        console.log("data: ", this.data);
      } */
      const test = await apiExample(params, this.callback);
      if (test) {
        this.data.push(test.data);
        message.success("Get results successfully!");
      } else {
        message.error("Failed to get results!");
      }
    },
    callback(status) {
      // status: 成功返回SUCCESS, 失败返回FAIL
      this.ifLoading = false;

      // 按钮上的名字修改回来
      this.btnText = "Send Axios Request";
    },
  },
};
</script>

<style scoped>
.myInput {
  margin: 10px auto;
  width: 50%;
}

.myTable {
  width: 50%;
  margin: 20px auto;
}

.myTable :deep(.ant-table tbody tr.table-striped) {
  background-color: #fafafa;
}
</style>
