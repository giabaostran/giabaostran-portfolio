import React from 'react'
import About from './About'
import Experience from './Experiences'
import Project from './Projects'
function Main() {
    return (
        <main class="pt-24 lg:w-1/2 lg:py-24">
            <About/>
            <Experience/>
            <Project/>
        </main>
    )
}

export default Main