<template>

  <div class="movieAlign container">
    <div
      v-for="movie in movies"
      :key="movie.id"
    >
      <MovieCard :movie="movie" />

    </div>

  </div>

</template>

<script lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { Component, Vue } from "vue-property-decorator";
import { getRecommendedMovies } from "../service/movie";

@Component({
  components: { MovieCard },
})
export default class Home extends Vue {
  public movies: any[] = [];

  created() {
    this.getRecommendedMoviemethod();
  }

  private async getRecommendedMoviemethod() {
    const { data } = await getRecommendedMovies();
    this.movies = data.results;
    // console.log(this.movies);
  }
}
</script>


<style lang="css">
.movieAlign {
  padding-right: 35px;
  padding-left: 35px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  align-items: center;
  justify-content: center;
}
</style>