<template>
  <nav class="header__navigation">
    <a href="#" data-target="sideNav" class="sidenav-trigger"
      ><img class="burger__menu__icon" src="../assets/img/icons/menu-icon.svg"
    /></a>
    <ul class="header__navigation__list hide-on-med-and-down">
      <li class="header__navigation__item">
        <a class="header__navigation__link" href="#">About me</a>
      </li>
      <li class="header__navigation__item">
        <a class="header__navigation__link" href="#">Relationships</a>
      </li>
      <li class="header__navigation__item">
        <a class="header__navigation__link" href="#">Requirements</a>
      </li>
      <li class="header__navigation__item">
        <a class="header__navigation__link" href="#">Users</a>
      </li>
      <li class="header__navigation__item">
        <a class="header__navigation__link" href="#">Sign up</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavigationL",
};
</script>
