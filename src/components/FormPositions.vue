<template>
  <div class="form__positions">
    <p class="form__positions__heading">Select your position</p>
    <label
      v-for="position in positions"
      :key="position.id"
      :for="position.id"
      class="radio__label"
    >
      <input
        v-model="picked"
        :value="position.id"
        @change="onChange"
        type="radio"
      />
      <span>{{ position.name }}</span>
    </label>
  </div>
</template>

<script>
import { getPositionsList } from "../utils/api";
export default {
  name: "FormPositions",
  data: () => ({
    picked: 1,
    positions: [],
  }),
  computed: {
    positionId: function () {
      return this.positions[this.picked - 1]["id"];
    },
  },
  methods: {
    onChange() {
      this.$emit("getPosition", { position: this.positionId });
    },
  },
  async mounted() {
    this.positions = await getPositionsList(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
  },
  updated() {
    this.$emit("getPosition", { position: this.positionId });
  },
};
</script>
