import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"
import Hero from "../../components/hero/Hero"
import Projects from "../../components/projects/Projects"

function Home() {
  return (
    <>
    <Hero />
    <div>
     <About />
     <Projects />
     <Contact />
    </div>
    </>
  )
}

export default Home