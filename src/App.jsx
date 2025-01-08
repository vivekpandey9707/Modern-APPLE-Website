import * as Sentry from '@sentry/react';
import Hero from "./components/Hero"
import HighLights from "./components/HighLights"
import Nav from "./components/Nav"
import Model from "./components/Model"
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);