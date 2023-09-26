import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import texts from "../../Assets/Projects/texts.png";
import abstract from "../../Assets/Projects/abstract.jpg";
import ml from "../../Assets/Projects/ml.png";
import opt from "../../Assets/Projects/opt.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Factoid-Question-Answering-System"
              description="Factoid Question Answering System - An advanced Open-domain Question Answering (ODQA) initiative designed to automatically respond to factual questions in both Arabic and English languages through the utilization of Natural Language Processing (NLP) and machine learning methodologies."
              ghLink="https://github.com/NechbaMohammed/Factoid-Question-Answering-System"
                           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Accelerated Logistic Regression Package for High-Performance Computing"
              description="This package that offers efficient implementations of logistic regression using high-performance computing techniques, with support for both CPU and GPU architectures. The algorithms are implemented in Python 3.8, and the GPU utilization is enhanced through CUDA programming, significantly accelerating the training process."
              ghLink="https://github.com/NechbaMohammed/SwiftLogisticReg"
             
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opt}
              isBlog={false}
              title="OptiNumPy - Numerical Analysis Optimization Package"
              description="OptiNumPy is an open-source Python library designed to streamline and enhance numerical optimization tasks. Built on top of NumPy, it provides a wide range of optimization algorithms and tools, making it easier for data scientists, engineers, and researchers to solve complex optimization problems efficiently."
              ghLink="https://github.com/NechbaMohammed/OptiNumPy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="ML from scratch with Python"
              description="This project involves implementing various machine learning algorithms from scratch using the Python programming language. The algorithms that can be included are Pocket, Perceptron, Linear Regression, Adaline, Logistic Regression, Polynomial Regression, One-vs-All and One-vs-One Classifiers. Additionally, the project could involve using various libraries in Python such as NumPy, Pandas, and Matplotlib for data manipulation, analysis, and visualization."
              ghLink="https://github.com/NechbaMohammed/ML-from-scratch-with-Python"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abstract}
              isBlog={false}
              title="Abstract Clustering for Scientific Paper Insights"
              description="This project's core aim is to use unsupervised machine learning to cluster scientific papers based on their abstracts, simplifying the discovery of related research and fostering a better understanding of research trends. "
              ghLink="https://www.kaggle.com/code/nechbamohammed/abstract-clustering-for-scientific-paper-insights"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={texts}
              isBlog={false}
              title="NLP for text simplification and definition generation"
              description="The SimpleText project aims to use AI to enhance public access and comprehension of scientific research by automatically creating simple definitions for complex concepts found in academic abstracts."
              ghLink="https://www.kaggle.com/code/nechbamohammed/text-simplification"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
