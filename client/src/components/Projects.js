import React from "react";


function Projects() {
  return (
    // many containers to have multiple flexboxes in flexboxes
    // main page container
    <div className="projects-page" id="projects">
      <h1 className="projects-head">Projects</h1>
      {/* contains content below header */}
      <div className="projects-container">
        {/* contains tictactoe img and description */}
        <div className="projects-tic-container">
          {/* contains tictactoe description */}
          <div className="projects-tic-desc">
            <h3>Tic-Tac-Toe Website</h3>
            <p>
              A fully functional tic-tac-toe game using Javascript, css, and
              html
            </p>
          </div>
          <a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-infrench">
            <img
              src="../images/TicTacToe.png"
              alt="Tic Tac Toe Webpage"
              className="tic-img project-img"
            />
          </a>
        </div>
        {/* contains zork img and description */}
        <div className="projects-zork-container">
          <div className="projects-zork-desc">
            <h3>Text-based Adventure Game</h3>
            <p>
              A text-based adventure game inspired by Zork. Made with Javascript
              in a Node environment
            </p>
          </div>
          <a href="https://github.com/burlingtoncodeacademy-students/zorkington-infrench">
            <img
              src="../images/Zorkington.png"
              alt="Zorkington code"
              className="zork-img project-img"
            />
          </a>
        </div>
        {/* contains guess the number img and description */}
        <div className="projects-guess-container">
          <div className="projects-guess-desc">
            <h3>Guess the Number</h3>
            <p>A javascript program that guesses a number input by the user.</p>
          </div>
          <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-infrench">
            <img
              src="../images/GuessTheNumber.png"
              alt="Guess the Number code"
              className="guess-img project-img"
            />
          </a>
        </div>
      </div>
      {/* link to my github */}
      <a href="https://github.com/infrench" className="github-link">GitHub</a>
    </div>
  );
}

export default Projects;
