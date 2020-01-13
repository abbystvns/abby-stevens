import React from "react"
import { BackButton } from "../components/back"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <div className="main">
      <div className="container">
        <h3>Research Interests</h3>
        <div style={{ paddingLeft: `2rem` }}>
          <ul>
            <li></li>
            <li>Math</li>
            <li>Math</li>
            <li>Math</li>
          </ul>
        </div>
        <h3 style={{ marginTop: `2rem` }}>Publications & Presentations</h3>
        <p>
          “Leveraging large ensemble climate simulations and graph-guided
          regularization for improving seasonal hydroclimatic forecasting,”
          <i>Large Ensembles Workshop</i>, Boulder, CO, July 2019.{" "}
          <i>(poster)</i>
        </p>
        <p>
          “Leveraging large ensemble climate simulations and graph-guided
          regularization for improving seasonal hydroclimatic forecasting,”{" "}
          <i>Midwest Machine Learning Symposium</i>, Madison, WI, June 2019.
          (poster)
        </p>
        <p>
          “Graph Total Variation for Seasonal Forecasting,”{" "}
          <i>Computational and Applied Mathematics Student Seminar</i>, Chicago,
          IL, April 2019.
        </p>
        <p>
          P. Saleiro, B. Kuester, L. Hinkson, J. London, A. Stevens, A.
          Anisfeld, K. Rodolfa, and R. Ghani. "Aequitas: A Bias and Fairness
          Audit Toolkit,"
          <i>eprint arXiv:1811.05577</i>, November 2018.
          <br />
        </p>
      </div>
    </div>
    <BackButton />
  </Layout>
)

export default Research
