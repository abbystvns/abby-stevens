import React from "react"
import { BackButton } from "../components/back"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <div className="main">
      <div className="container">
        <h4>Research Interests</h4>
        <div style={{ paddingLeft: `2rem` }}>
          <ul>
            <li>High dimensional statistics</li>
            <li>Applied statistics and machine learning</li>
            <li>Fairness and ethics in data science</li>
            <li>Machine learning for climate science</li>
          </ul>
        </div>
        <h4 style={{ marginTop: `2rem` }}>Publications</h4>
        
        <p>
          P. Saleiro, B. Kuester, L. Hinkson, J. London, <strong>A. Stevens</strong>, A.
          Anisfeld, K. Rodolfa, and R. Ghani. <i>Aequitas: A Bias and Fairness
          Audit Toolkit</i>. November 2018. 
          (<a href="http://www.datasciencepublicpolicy.org/projects/aequitas/">tool</a>, <a href="https://arxiv.org/pdf/1811.05577.pdf">arxiv</a>)
          <br />
        </p>
        <h4 style={{ marginTop: `2rem` }}>Conference Presentations and Posters</h4>
        <p>

        </p>
        <p>
          Leveraging large ensemble climate simulations and graph-guided
          regularization for improving seasonal hydroclimatic forecasting,
          <i>Large Ensembles Workshop</i>, Boulder, CO, July 2019.{" "} (<a href="https://usclivar.org/sites/default/files/meetings/2019/posters/StevensPoster.pdf">(poster)</a>
        </p>
        <p>
          Leveraging large ensemble climate simulations and graph-guided
          regularization for improving seasonal hydroclimatic forecasting,{" "}
          <i>Midwest Machine Learning Symposium</i>, Madison, WI, June 2019.
          (poster)
        </p>


        <h4 style={{ marginTop: `2rem` }}>Talks</h4>
        <p>
          “Graph Total Variation for Seasonal Forecasting,”{" "}
          <i>Computational and Applied Mathematics Student Seminar</i>, Chicago,
          IL, April 2019.
        </p>
        </h4>
      </div>
    </div>
    <BackButton />
  </Layout>
)

export default Research
