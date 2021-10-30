<!--
 * @Author: 七画一只妖
 * @Date: 2021-10-28 21:45:12
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-10-28 22:17:33
 * @Description: file content
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> <span>已完成0</span> / 全部2 </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>