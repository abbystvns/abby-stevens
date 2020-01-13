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
        <p> <strong> A. Stevens</strong>, R. Willett, A. Mamalakis, E. Foufoula-Georgiou, J. Randerson, 
        P. Smyth, S. Wright and A. Tejedor. Graph-guided regularization for improved seasonal forecasting. In
        Brajard, J., Charantonis, A., Chen, C., & Runge, J. (Eds.). (2019). Proceedings of the
 9th International Workshop on Climate Informatics: CI 2019 (No. NCAR/TN-
 561+PROC). doi:10.5065/y82j-f154.
        </p>
        <p>
          P. Saleiro, B. Kuester, L. Hinkson, J. London, <strong>A. Stevens</strong>, A.
          Anisfeld, K. Rodolfa, and R. Ghani. <i>Aequitas: A Bias and Fairness
          Audit Toolkit</i>. November 2018. 
          (<a href="http://www.datasciencepublicpolicy.org/projects/aequitas/">tool</a>, <a href="https://arxiv.org/pdf/1811.05577.pdf">arxiv</a>)
          <br />
        </p>
        <h4 style={{ marginTop: `2rem` }}>Conference Presentations and Posters</h4>
        <p>
        Graph-guided regularization for improved forecasting of Southwestern US winter precipitation, <i> AGU </i>, San Francisco, CA, December 2019.
        </p>
        <p>
        Graph-guided regularization for improved seasonal forecasting, <i> Workshop on Climate Informatics</i>, Paris, France, September 2019. 
        (<a href="https://sites.google.com/view/climateinformatics2019/posters">poster</a>)
        </p>
        <p>
          Leveraging large ensemble climate simulations and graph-guided
          regularization for improving seasonal hydroclimatic forecasting,
          <i>Large Ensembles Workshop</i>, Boulder, CO, July 2019.{" "} (<a href="https://usclivar.org/sites/default/files/meetings/2019/posters/StevensPoster.pdf">poster</a>)
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
      </div>
    </div>
    <BackButton />
  </Layout>
)

export default Research
