'use client'
import Hero from './_components/Hero'
import Navbar from './_components/Navbar'
import Project from './_components/Project'
import Contributions from './_components/Contributions'
import Milestones from './_components/Milestones'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Contributions />
      <Milestones />
    </main>
  )
}
