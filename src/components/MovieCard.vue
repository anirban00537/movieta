<template>
  <div class="cardContainer">
    <img
      :src=movieImageBaseURL+movie.poster_path
      class="img-fluid"
      alt="..."
    >
    <div class="cardDetailsContainer">
      <h6>{{movie.original_title}}</h6>
      <p class="overview">{{movie.overview}}</p>
      <div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component({
  props: {
    movie: Object,
  },
})
export default class MovieCard extends Vue {
  private movieImageBaseURL: string = process.env.VUE_APP_IMG_URL;
}
</script>

<style scope>
.cardDetailsContainer {
  padding: 10px;
}
.cardContainer {
  height: 500px;
  width: 250px;
  box-shadow: 3px 6px 16px 1px #151515;
  margin: 20px;
}
h4 {
  margin: 0px;
}
.overview {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>