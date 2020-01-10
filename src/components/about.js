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
        advised by  <a href="https://voices.uchicago.edu/willett/">Becca Willett</a>. I like using data to do good things.

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
