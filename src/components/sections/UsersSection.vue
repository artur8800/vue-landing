<template>
  <section class="user__section">
    <div class="container">
      <ul v-if="users" class="user__list row">
        <li
          v-for="(user, index) in users"
          :key="user.id"
          class="user__item col s12 m4"
        >
          <div class="user__card">
            <img
              src="../../assets/img/users/Ellipse 2.jpg"
              alt="user image"
              class="user__image"
            />
            <span
              class="user__name tooltipped"
              @mouseover="hoverHandler(index, 'over')"
              @mouseout="hoverHandler(index, 'out')"
              data-position="bottom"
              :data-tooltip="user.name"
              >{{ shortCut(user.name, 49) }}</span
            >
            <span class="user__position">{{ user.position }}</span>
            <span class="user__mail">{{ shortCut(user.email, 28) }}</span>
            <span class="user__phone"> {{ user.phone }} </span>
          </div>
        </li>
      </ul>
      <a
        class="btn tooltipped"
        data-position="bottom"
        data-tooltip="I am a tooltip"
        >Hover me!</a
      >
    </div>
  </section>
</template>

<script>
import * as M from "materialize-css";
import { getUsers } from "../../utils/api";

export default {
  name: "UsersSection",
  data: () => ({
    users: [],
    hover: false,
    elems: [],
    tooltip: null,
  }),
  methods: {
    hoverHandler(index, type) {
      if (type == "over") {
        M.Tooltip.getInstance(this.elems[index]).open();
      } else {
        M.Tooltip.getInstance(this.elems[index]).close();
      }
    },
    shortCut(data, pos) {
      return data.length > pos ? data.slice(0, pos - 3) + "..." : data;
    },
  },
  async mounted() {
    this.users = await getUsers(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      { page: 1, count: 9 }
    );

    this.$nextTick(() => {
      this.elems = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(this.elems, {});
    });
  },
};
</script>
