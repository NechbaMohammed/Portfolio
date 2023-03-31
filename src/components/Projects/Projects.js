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
              imgPath={chatify}
              isBlog={false}
              title="ML from scratch with Python"
              description="This project involves implementing various machine learning algorithms from scratch using the Python programming language. The algorithms that can be included are Pocket, Perceptron, Linear Regression, Adaline, Logistic Regression, Polynomial Regression, One-vs-All and One-vs-One Classifiers. Additionally, the project could involve using various libraries in Python such as NumPy, Pandas, and Matplotlib for data manipulation, analysis, and visualization."
              ghLink="https://github.com/NechbaMohammed/ML-from-scratch-with-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Numerical Analysis Optimization Package"
              description="The project consists of two main parts: one-dimensional function minimization algorithms and multi-dimensional function minimization algorithms. For one-dimensional function minimization, the project includes implementations of searching with elimination and interpolation methods. For system of equations and decompositions, the project focuses on solving systems of linear equations using Gaussian elimination, LU decomposition, and QR decomposition. For multi-dimensional function minimization, the project includes implementations of gradient descent, conjugate gradient, Newton's method, and quasi-Newton methods. Overall, the project provides a comprehensive understanding of numerical optimization methods and how they can be implemented using Python."
              ghLink="https://github.com/NechbaMohammed/Numerical_Analysis_Optimization_Package"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="House Prices - Advanced Regression Techniques"
              description="This project focuses on predicting housing prices using advanced regression techniques. The project is based on a dataset containing numerous features of residential homes in Ames, Iowa. The goal of the project is to build a regression model that accurately predicts the sale price of a given home based on its features. Additionally, the project may involve other techniques such as cross-validation and ensemble learning to improve the accuracy and robustness of the model. The final deliverable will be a trained regression model that can predict the sale price of a residential home based on its features with high accuracy."
              kaggleLink="https://www.kaggle.com/code/nechbamohammed/stacked-regressions-top-11-on-leaderboard"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
