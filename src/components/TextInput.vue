<template>
  <input
    :type="type"
    :name="type"
    :placeholder="placeholder"
    @input="inputChangeHandler"
    v-model="text"
    class="form__input text-input"
  />
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    value: String,
  },
  name: "TextInput",
  data: () => ({
    text: "",
  }),
  methods: {
    inputChangeHandler() {
      this.$emit("inputChnage", { text: this.text });
    },
  },
};
</script>
