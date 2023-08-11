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

<script setup>
import { apiExample } from "@/api/index";
import { message } from "ant-design-vue";
import { EditTwoTone, InfoCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

// 数据

let data = ref([]);

const columns = [
  { title: "type", dataIndex: "type", width: 150 },
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
];

let ifLoading = ref(false);
let text = ref("");
let btnText = ref("Send Axios Request");

const getResult = async () => {
  const params = { name: text.value };
  ifLoading.value = true;
  btnText.value = "Requesting...";
  const test = await apiExample(params, callback);
  if (test) {
    data.value.push(test.data);
    message.success("Get results successfully!");
  } else {
    message.error("Failed to get results!");
  }
};

const callback = function () {
  ifLoading.value = false;
  btnText.value = "Send Axios Request";
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
