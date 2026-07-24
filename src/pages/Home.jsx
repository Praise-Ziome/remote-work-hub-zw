import Hero from '../components/Hero.jsx'
import FeaturedJobs from '../components/FeaturedJobs.jsx'
import Categories from '../components/Categories.jsx'
import CareerTips from '../components/CareerTips.jsx'
import Newsletter from '../components/Newsletter.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <Categories />
      <CareerTips />
      <Newsletter />
    </>
  )
}
