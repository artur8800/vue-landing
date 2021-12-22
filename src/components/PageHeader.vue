<template>
  <h1 :className="className">{{ content }}</h1>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["content", "className"],
};
</script>
