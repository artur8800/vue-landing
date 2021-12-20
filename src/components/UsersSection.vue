<template>
  <section class="user__section">
    <div class="container">
      <ul v-if="users" class="user__list row">
        <li
          v-for="user in users"
          :key="user.registration_timestamp"
          class="user__item col s12 m4"
        >
          <div class="user__card">
            <img
              src="../assets/img/users/Ellipse 2.jpg"
              alt="user image"
              class="user__image"
            />
            <span class="user__name">{{ user.name }}</span>
            <span class="user__position">{{ user.position }}</span>
            <span class="user__mail">{{ user.email }}</span>
            <span class="user__phone"> {{ user.phone }} </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersSection",
  data: () => ({
    users: [],
  }),

  methods: {
    getUsers: function () {
      axios
        .get(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=9"
        )
        .then((response) => {
          const { users } = response.data;
          this.users = users;
        });
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
