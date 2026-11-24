import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Challenges, Learn, Agenda, Audience, Speaker } from './components/Sections'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><Challenges /><Learn /><Agenda /><Speaker /><Audience /><Pricing /><Faq /><FinalCta />
      </main>
      <Footer />
    </>
  )
}
