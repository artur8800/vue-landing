<template>
  <div class="form__positions">
    <p class="form__positions__heading">Select your position</p>
    <label
      v-for="(position, i) in positions"
      :key="position.id"
      :for="position.id"
      class="checkbox__label"
    >
      <input
        :value="position.id"
        ref="checkbox"
        @click="checkBoxClick(i)"
        :checked="i === checked"
        type="checkbox"
      />
      {{ position.name }}
    </label>
  </div>
</template>

<script>
import { getPositionsList } from "../utils/api";
export default {
  name: "FormPositions",
  data: () => ({
    checked: 0,
    positionName: "",
    positions: [],
  }),
  methods: {
    checkBoxClick(i) {
      this.checked = this.checked === i ? null : i;
      this.positionName = this.positions[i]["name"];

      if (this.positionName) {
        this.$emit("getPosition", { position: this.positionName });
      }
    },
  },
  async mounted() {
    this.positions = await getPositionsList(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
  },
};
</script>
