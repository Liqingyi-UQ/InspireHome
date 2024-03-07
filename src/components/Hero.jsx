import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-jsutify">
          We’re changing the way people shop.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-jsutify">
          Discover the convenience of online shopping with an experience that's
          tailored to your personal style. Say goodbye to the hassle and hello
          to a fresh, exciting way to find exactly what you're looking for.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary text-lg md: text-xl">
            Start Shopping
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, id) => {
          return (
            <div key={id} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero;
