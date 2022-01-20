<template>
  <div class="page__heading">
    <h2 class="section__heading">{{ h2 }}</h2>
    <h3 class="section__heading__small">{{ h3 }}</h3>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: ["h2", "h3"],
};
</script>
