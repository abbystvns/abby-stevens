import React from "react"
import Image from "./image"

export const About = () => {
  return (
    <div className="about">
      <div className="pic">
        <Image />
      </div>
      <div className="info">
        <h4> About Me </h4>
        <p>
        Hi! I'm a a third year PhD student in Statistics at <a href="https://stat.uchicago.edu/">UChicago</a> 
        advised by  <a href="https://voices.uchicago.edu/willett/">Becca Willett</a>. I like doing good things with data, which currently means developing new methodologies for tackling climate change with machine learning.

        Before graduate school, I worked as a data scientist at <a href="https://www.doximity.com/">Doximity</a> and <a href="https://betaworks.com/">betaworks</a>. I am involed in a number of data science for social good initiaives, including stints with the <a href="https://codeforsanfrancisco.org/projects/the-data-science-working-group/">Data Science Working Group at Code for San Francisco</a> and the <a href="http://www.datasciencepublicpolicy.org/">Center for Data Science and Public Policy</a>.
        I am currently helping organize the <a href="https://www.widsconference.org/">Women in Data Science Chicago</a>regional event.
          <br /> <br />I can be reached at{" "}
          <a
            href={`mailto:  abbystevens@uchicago.edu`}
            target="_blank"
            style={{ textDecoration: `underline` }}
          >
            abbystevens@uchicago.edu
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
