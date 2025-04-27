import About from '@/components/About'
import Education from '@/components/Education'
import TutoringFAQ from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LatestBlogPosts from '@/components/LatestBlog'
import Navbar from '@/components/navbar'
import Testimonials from '@/components/Testimonial'
import Video from '@/components/Video'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Video/>
      <Testimonials/>
      <TutoringFAQ/>
      <LatestBlogPosts/>
      <Footer/>
    </div>
  )
}

export default page