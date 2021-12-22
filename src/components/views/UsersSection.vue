<template>
  <section class="user__section">
    <div class="container">
      <ul v-if="users" class="user__list row">
        <li v-for="user in users" :key="user.id" class="user__item col s12 m4">
          <div class="user__card">
            <img
              src="../../assets/img/users/Ellipse 2.jpg"
              alt="user image"
              class="user__image"
            />
            <span class="user__name">{{
              user.name.length >= 49
                ? user.name.slice(0, 46) + "..."
                : user.name
            }}</span>
            <span class="user__position">{{
              user.position >= 67
                ? user.position.slice(0, 64) + "..."
                : user.position
            }}</span>
            <span class="user__mail">{{
              user.email.length >= 29 ? user.email.slice(0, 26) : user.position
            }}</span>
            <span class="user__phone"> {{ user.phone }} </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { getUsers } from "../../utils/api";

export default {
  name: "UsersSection",
  data: () => ({
    users: [],
  }),

  async mounted() {
    this.users = await getUsers(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      { page: 1, count: 9 }
    );
  },
};
</script>
