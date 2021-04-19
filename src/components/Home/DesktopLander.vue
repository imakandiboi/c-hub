<template>
  <div>
    <agile
      :dots="true"
      :fade="true"
      class="main relative"
      :autoplay="true"
      :autoplay-speed="3000"
      @after-change="(e) => (currentSlide = e.currentSlide)"
    >
      <div
        class="slide bg-gray-900 relative"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img :src="slide" alt="image" width="1940px" />
      </div>

      <div
        class="absolute top-20 text-gray-100 w-full py-40 px-20"
        slot="caption"
      >
        <div class="w-full h-20 text-center align-center">
          <div class="grid grid-cols-2 gap-x-4">
            <h2 class="caption">
              {{ captions[currentSlide] }}
            </h2>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  name: "DesktopLander",
  component: {
    agile: VueAgile,
  },
  data() {
    return {
      currentSlide: 0,
      captions: [
        "This is the first slide ",
        "Home Of Quality Laptops ",
        "This is the third slide",
        "This is the foyrth slide",
        "This is the fifth slide",
        "This is the sixth slide",
        "This is the seventh slide",
      ],
      slides: [
        "https://images.samsung.com/is/image/samsung/assets/africa_en/03_Smartphones_A32_PF_Header_5G_KV_PC_1440x640.jpg?$ORIGIN_JPG$",
        "https://media.idownloadblog.com/wp-content/uploads/2020/11/MacBook-Pro-M1-processor.jpg",
        "https://www.pslivegame.com/images/pzen_slideshow/PS5-banner_1614148675.png",
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-background-block-desktop-01-en-11jun20?$4000px$",
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-entertainment-page-banner-hero-desktop-01-en-12nov20?$2400px--t$",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://www8.hp.com/content/dam/sites/worldwide/homepage/images/banners/us/US-premium-laptops-desktop.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.agile__slide img {
  object-fit: cover;
}

.agile {
  width: 100%;
}
.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__nav-button:hover {
  color: white;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 610px;
  justify-content: center;
}

.main >>> .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  color: #fff;
}

.main >>> .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}

.main >>> .agile__nav-button {
  background-color: rgba(0, 0, 0, 0.4);

  width: 40px;
  height: 80px;
}

.main >>> .agile__nav-button--prev {
  left: 0px;
  border-radius: 0 8px 8px 0;
}

.main >>> .agile__nav-button--next {
  right: 0;
  border-radius: 8px 0px 0px 8px;
}

.caption {
  font-size: 30px;
  font-weight: 300;
}
</style>
