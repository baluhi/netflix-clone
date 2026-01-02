import CarouselCard from "../Components/Carousel/Carousel"
import MovieCards from "../Components/MovieCards/MovieCards"
import TvShowsCard from "../Components/TvShowsCard/TvShowsCard"

const HomePage = () => {

   
  return (
    <div className="mt-5">
        <CarouselCard />
        <MovieCards/>
        <TvShowsCard/>
    </div>
  )
}
export default HomePage