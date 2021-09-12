import request from '@/utils/request'


export const getRecommendedMovies = () =>
  request({
    url: "/discover/movie?sort_by=popularity.desc"+process.env.VUE_APP_API_KEY,
    method: "get",
  })