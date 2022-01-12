<template>
  <section class="banner__section">
    <picture>
      <source
        media="(max-width: 360px)"
        srcset="
          ../../assets/img/banner/banner_mobile_1x.jpg 1x,
          ../../assets/img/banner/banner_mobile_2x.jpg 2x
        "
      />
      <source
        media="(max-width: 768px)"
        srcset="
          ../../assets/img/banner/banner_tablet_1x.jpg 1x,
          ../../assets/img/banner/banner_tablet_2x.jpg 2x
        "
      />
      <source
        media="(max-width: 1024px)"
        srcset="
          ../../assets/img/banner/banner_large_1x.jpg 1x,
          ../../assets/img/banner/banner_large_2x.jpg 2x
        "
      />
      <source
        media="(min-width: 1025px)"
        srcset="
          ../../assets/img/banner/banner_xlarge_1x.jpg 1x,
          ../../assets/img/banner/banner_xlarge_2x.jpg 2x
        "
      />
      <img
        class="banner__image"
        src="../../assets/img/banner/banner_mobile_1x.jpg"
        srcset=""
        alt="Banner image"
      />
    </picture>

    <div class="banner__caption">
      <div class="container">
        <div class="banner__text__block">
          <h1 class="banner__heading">
            Test assignment for front-end developers
          </h1>
          <p class="banner__text">
            Front-end developers make sure the user sees and interacts with all
            the necessary elements to ensure conversion. Therefore, responsive
            design, programming languages and specific frameworks are the
            must-have skillsets to look for when assessing your front-end
            developers.
          </p>
          <a href="#" class="button yellow">Sign Up</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../../assets/img/banner/banner_mobile_1x.jpg";

export default { name: "BannerSection" };
</script>
