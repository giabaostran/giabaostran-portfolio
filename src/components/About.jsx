import React from 'react';

function About() {
    return (
        <section
            id="about"
            className=" text-slate-200 mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
            aria-label="About me"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I'm Gia Bao (Stephen) Tran, a {' '}
                    {/* <a
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        target="_blank"
                        rel="noreferrer noopener"
                    > */}
                    Cognitive Science. May it sound irrelavant, I came from a background in tech which has a equipped a strong passion for coding and love spending time learning cool technologies and developing software projects that make life easier.
                </p>
                <p className="mb-4">
                    Having worked in various roles, I’ve come to realize how software can transform organizational planning, streamline operations, and save resources, time, and effort. This experience sparked my interest in DevOps, where I aim to create automated solutions that address... boring tasks.
                </p>

                <p className="mb-4">
                    Also, I am trying to set foot in the Embedded Engineering field, do you think this role will be replaced by AI though?
                </p>

                <p>

                </p>
            </div>
        </section >
    );
}

export default About;
