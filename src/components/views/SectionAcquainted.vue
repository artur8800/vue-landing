<template>
  <section class="section__acquainted">
    <div class="container clearfix">
      <div class="section__image__block">
        <img src="../../assets/img/Image-acq.svg" alt="Person" />
      </div>
      <div class="section__text__block">
        <h2 class="section__heading">Let's get acquainted</h2>
        <page-header className="section__heading" content="Hello world">
        </page-header>
        <h3 class="section__heading__small">I'm a good front-end developer</h3>
        <p class="page__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a href="#" class="button yellow">Sign Up</a>
      </div>
    </div>
  </section>
</template>

<script>
import PageHeader from "../PageHeader";

import "../../assets/img/Image-acq.svg";
export default {
  components: {
    PageHeader,
  },
  name: "SectionAcquainted",
};
</script>
