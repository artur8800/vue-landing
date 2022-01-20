<template>
  <section class="user__section">
    <div class="container">
      <page-heading
      class="center-text"
      h2="Our cheerful users"
      h3="The best specialists are shown below"
    >
    </page-heading>
    </div>
    <div class="container">
      <ul v-if="users" class="user__list row">
        <li
          v-for="(user, index) in users"
          :key="user.id"
          class="user__item col s12 m6 l4 xl4"
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
              >{{ shortCut(user.name, 38) }}</span
            >
            <span class="user__position">{{ user.position }}</span>
            <span class="user__mail">{{ shortCut(user.email, 28) }}</span>
            <span class="user__phone"> {{ phoneFormat(user.phone) }} </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="container align-center">
      <button
        class="btn"
        :class="isLastPage ? 'disabled' : ''"
        @click="loadMoreUsers"
      >
        Load more
      </button>
    </div>
  </section>
</template>

<script>
import * as M from "materialize-css";
import { getUsers } from "../../utils/api";
import PageHeading from "../PageHeading.vue";

export default {
  props: {
    needToUpdate: Boolean,
  },
  name: "UsersSection",
  components: {
    PageHeading,
  },
  data: () => ({
    users: [],
    hover: false,
    elems: [],
    tooltip: null,
    isLastPage: false,
    currentPage: 1,
    loadCount: 9,
  }),
  watch: {
    users: function () {
      this.$nextTick(() => {
        this.elems = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(this.elems, {});
      });
    },
    needToUpdate: async function (update) {
      if (update) {
        this.users = [];
        this.currentPage = 0;
        await this.loadMoreUsers();
      }
    },
  },
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
    phoneFormat(data) {
      return data.replace(
        /^(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "$1 ($2) $3 $4 $5"
      );
    },
    checkLastPage(current, total) {
      return current >= total ? true : false;
    },
    async loadMoreUsers() {
      const usersData = await getUsers(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        { page: this.currentPage + 1, count: 9 }
      );
      this.users = this.users.concat(usersData.users);
      this.currentPage = usersData.page;
      this.isLastPage = this.checkLastPage(
        usersData.page,
        usersData.total_pages
      );
    },
  },
  created() {
    if (window.innerWidth >= 1024) {
      this.loadCount = 9;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      this.loadCount = 6;
    } else if (window.innerWidth <= 767) {
      this.loadCount = 3;
    }
  },
  async mounted() {
    const usersData = await getUsers(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      { page: 1, count: this.loadCount }
    );
    this.users = usersData.users;
    this.isLastPage = this.checkLastPage(usersData.page, usersData.total_pages);
    this.currentPage = usersData.page;

    this.$nextTick(() => {
      this.elems = document.querySelectorAll(".tooltipped");
      M.Tooltip.init(this.elems, {});
    });
  },
};
</script>
