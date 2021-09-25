import Auth from "../components/Auth/Auth";
import MoviePage from "../pages/MoviePage/MoviePage";
import Movies from "../pages/Movies";

export const routes = [
  {path: '/auth', component: Auth, exact: true},
  {path: '/movies', component: Movies, exact: true},
  {path: '/movies/:id', component: MoviePage, exact: true},
]