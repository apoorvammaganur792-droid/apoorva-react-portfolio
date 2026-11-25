import { useEffect, useRef, useState } from "react";
import "./Resume.css";
const resumePath = "/apoorva-react-portfolio/Apoorva.M.Maganur_Resume.pdf";

const GAME_WIDTH = 900;
const GAME_HEIGHT = 280;
const GROUND = 225;

/* =========================
   DRAW DINOSAUR GAME
========================= */

function drawDinoGame(ctx, game, collision) {
  const w = GAME_WIDTH;
  const h = GAME_HEIGHT;

  // BACKGROUND
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#e5f4ff");
  bg.addColorStop(1, "#f9eaff");

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // CLOUDS
  ctx.fillStyle = "rgba(255,255,255,0.8)";

  for (let i = 0; i < 4; i++) {
    const x =
      ((i * 260 - game.frames * 0.5) % 1050 + 1050) % 1050 - 50;

    const y = 35 + (i % 2) * 35;

    ctx.beginPath();
    ctx.arc(x, y, 19, 0, Math.PI * 2);
    ctx.arc(x + 22, y - 8, 24, 0, Math.PI * 2);
    ctx.arc(x + 46, y, 18, 0, Math.PI * 2);
    ctx.fill();
  }

  // GROUND
  ctx.strokeStyle = "#b99be4";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(0, GROUND);
  ctx.lineTo(w, GROUND);
  ctx.stroke();

  // GROUND DECORATIONS
  ctx.fillStyle = "#c6a9ed";

  for (let i = 0; i < 18; i++) {
    const x =
      ((i * 75 - game.frames * game.speed) % w + w) % w;

    ctx.beginPath();
    ctx.arc(x, GROUND + 13, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // OBSTACLES
  game.obstacles.forEach((obstacle) => {
    if (obstacle.type === "bird") {
      ctx.fillStyle = "#e77bc6";

      ctx.beginPath();
      ctx.ellipse(
        obstacle.x,
        obstacle.y,
        18,
        10,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(obstacle.x - 5, obstacle.y);
      ctx.lineTo(obstacle.x - 20, obstacle.y - 13);
      ctx.lineTo(obstacle.x - 12, obstacle.y + 4);
      ctx.fill();

      ctx.fillStyle = "#39314d";
      ctx.beginPath();
      ctx.arc(obstacle.x + 10, obstacle.y - 3, 2, 0, Math.PI * 2);
      ctx.fill();

    } else {
      // CACTUS
      ctx.fillStyle = "#8b73c9";

      ctx.beginPath();
      ctx.roundRect(
        obstacle.x,
        GROUND - obstacle.height,
        23,
        obstacle.height,
        8
      );
      ctx.fill();

      ctx.fillRect(
        obstacle.x - 10,
        GROUND - obstacle.height + 15,
        11,
        8
      );

      ctx.fillRect(
        obstacle.x - 10,
        GROUND - obstacle.height + 8,
        7,
        15
      );

      ctx.fillRect(
        obstacle.x + 20,
        GROUND - obstacle.height + 25,
        11,
        8
      );

      ctx.fillRect(
        obstacle.x + 24,
        GROUND - obstacle.height + 17,
        7,
        16
      );
    }
  });

  // DINOSAUR POSITION
  const ducking = game.duck && game.dinoY === 0;
  const dinoHeight = ducking ? 34 : 52;

  const dinoX = 120;
  const dinoTop = GROUND - game.dinoY - dinoHeight;

  // TAIL
  ctx.fillStyle = "#8566d6";

  ctx.beginPath();
  ctx.moveTo(dinoX + 3, dinoTop + 30);
  ctx.lineTo(dinoX - 17, dinoTop + 40);
  ctx.lineTo(dinoX + 8, dinoTop + 44);
  ctx.fill();

  // BODY
  ctx.fillStyle = "#8566d6";

  ctx.beginPath();
  ctx.roundRect(
    dinoX,
    dinoTop + 15,
    43,
    dinoHeight - 15,
    12
  );
  ctx.fill();

  // HEAD
  ctx.fillStyle = "#a58ae8";

  ctx.beginPath();
  ctx.roundRect(
    dinoX + 24,
    dinoTop,
    32,
    30,
    10
  );
  ctx.fill();

  // EYE
  ctx.fillStyle = "#29263c";

  ctx.beginPath();
  ctx.arc(dinoX + 46, dinoTop + 10, 3, 0, Math.PI * 2);
  ctx.fill();

  // SMILE
  ctx.strokeStyle = "#39314d";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(dinoX + 46, dinoTop + 17, 5, 0.2, 1.3);
  ctx.stroke();

  // LEGS
  ctx.fillStyle = "#e77bc6";

  const legMove =
    game.dinoY === 0
      ? Math.floor(game.frames / 5) % 2
      : 0;

  if (ducking) {
    ctx.fillRect(dinoX + 7, dinoTop + 30, 15, 5);
    ctx.fillRect(dinoX + 28, dinoTop + 30, 15, 5);
  } else {
    ctx.fillRect(
      dinoX + 7,
      dinoTop + 42,
      9,
      10 + legMove * 3
    );

    ctx.fillRect(
      dinoX + 28,
      dinoTop + 42,
      9,
      13 - legMove * 3
    );
  }

  // COLLISION MESSAGE
  if (collision) {
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#8566d6";
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";

    ctx.fillText("Oops! Try again! 💜", w / 2, 120);

    ctx.font = "16px Arial";
    ctx.fillText(
      "Getting back into the adventure...",
      w / 2,
      155
    );
  }
}

/* =========================
   MINI GAME COMPONENT
========================= */

function MiniGame() {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const restartRef = useRef(null);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const createGame = () => ({
    frames: 0,
    score: 0,
    speed: 5,
    dinoY: 0,
    velocity: 0,
    grounded: true,
    jumpRequested: false,
    duck: false,
    obstacles: [],
    spawnTimer: 65,
    hitUntil: false,
  });

  const jump = () => {
    const game = gameRef.current;

    if (!game || game.hitUntil) return;

    game.jumpRequested = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const game = createGame();
    gameRef.current = game;

    let animationId;
    let stopped = false;

    const handleKeyDown = (e) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLButtonElement
      ) {
        return;
      }

      if (
        e.code === "Space" ||
        e.code === "ArrowUp" ||
        e.code === "KeyW"
      ) {
        e.preventDefault();
        game.jumpRequested = true;
      }

      if (
        e.code === "ArrowDown" ||
        e.code === "KeyS"
      ) {
        game.duck = true;
      }
    };

    const handleKeyUp = (e) => {
      if (
        e.code === "ArrowDown" ||
        e.code === "KeyS"
      ) {
        game.duck = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // GAME LOOP
    const update = () => {
      if (stopped || game.hitUntil) return;

      game.frames++;

      // JUMP
      if (game.jumpRequested && game.grounded) {
        game.velocity = 14;
        game.grounded = false;
      }

      game.jumpRequested = false;

      game.dinoY += game.velocity;
      game.velocity -= 0.72;

      if (game.dinoY <= 0) {
        game.dinoY = 0;
        game.velocity = 0;
        game.grounded = true;
      }

      // DUCK
      const ducking = game.duck && game.grounded;
      const dinoHeight = ducking ? 34 : 52;

      // SPEED
      game.speed = Math.min(
        5 + game.score / 100,
        11
      );

      // SPAWN OBSTACLES
      game.spawnTimer--;

      if (game.spawnTimer <= 0) {
        const isBird =
          game.score > 10 && Math.random() < 0.25;

        game.obstacles.push({
          x: GAME_WIDTH + 20,
          type: isBird ? "bird" : "cactus",
          height: 35 + Math.random() * 22,
          y: GROUND - 38,
          passed: false,
        });

        game.spawnTimer = 65 + Math.random() * 45;
      }

      // MOVE OBSTACLES
      game.obstacles.forEach((obstacle) => {
        obstacle.x -= game.speed;

        if (!obstacle.passed && obstacle.x < 100) {
          obstacle.passed = true;
          game.score++;
          setScore(game.score);
        }
      });

      game.obstacles = game.obstacles.filter(
        (obstacle) => obstacle.x > -60
      );

      // DINOSAUR COLLISION BOX
      const dinoBox = {
        x: 125,
        y: GROUND - game.dinoY - dinoHeight + 7,
        width: 39,
        height: dinoHeight - 12,
      };

      // COLLISION DETECTION
      for (const obstacle of game.obstacles) {
        const obstacleBox =
          obstacle.type === "bird"
            ? {
                x: obstacle.x - 14,
                y: obstacle.y - 9,
                width: 28,
                height: 20,
              }
            : {
                x: obstacle.x + 3,
                y: GROUND - obstacle.height,
                width: 18,
                height: obstacle.height,
              };

        const collided =
          dinoBox.x < obstacleBox.x + obstacleBox.width &&
          dinoBox.x + dinoBox.width > obstacleBox.x &&
          dinoBox.y < obstacleBox.y + obstacleBox.height &&
          dinoBox.y + dinoBox.height > obstacleBox.y;

        if (collided) {
          game.hitUntil = true;
          setGameOver(true);
          drawDinoGame(ctx, game, false);
          return;
        }
      }

      // DRAW
      drawDinoGame(ctx, game, false);

      animationId = requestAnimationFrame(update);
    };

    // RESTART FUNCTION
    restartRef.current = () => {
      stopped = true;
      cancelAnimationFrame(animationId);

      const freshGame = createGame();
      Object.assign(game, freshGame);

      setScore(0);
      setGameOver(false);

      stopped = false;
      animationId = requestAnimationFrame(update);
    };

    // START GAME
    animationId = requestAnimationFrame(update);

    return () => {
      stopped = true;
      cancelAnimationFrame(animationId);

      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      gameRef.current = null;
      restartRef.current = null;
    };
  }, []);

  return (
    <div className="game-box">

      <p>Jump, dodge and survive as long as you can!</p>

      <div className="game-score">
        ⭐ Score: {score}
      </div>

      <div className="game-canvas-wrapper">

        <canvas
          ref={canvasRef}
          className="dino-canvas"
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          onPointerDown={jump}
          aria-label="Dinosaur game"
          tabIndex={0}
        />

        {gameOver && (
          <div className="game-over-panel">
            <h2>Game Over! 🎮</h2>

            <p>Your Score: {score} ⭐</p>

            <button
              className="try-again-btn"
              onClick={() => restartRef.current?.()}
            >
              Try Again ↻
            </button>
          </div>
        )}

      </div>

      <div className="game-controls">
        <span>SPACE / ↑ / W — Jump</span>
        <span>↓ — Duck</span>
        <span>🖱 Click — Jump</span>
      </div>

      <p className="game-hint">
        Avoid obstacles and beat your high score! 💜
      </p>

    </div>
  );
}

/* =========================
   RESUME COMPONENT
========================= */

function Resume() {
  return (
    <section className="resume-page">

      <div className="resume-wrapper">

        <div className="resume-inner">

          {/* HEADING */}

          <div className="resume-heading">
            <h1>MY PROFESSIONAL PROFILE</h1>
            <p>MY RESUME</p>
          </div>

          {/* RESUME CARD */}

          <div className="resume-card">

            <div className="resume-icon">
              📄
            </div>

            <h2>Apoorva M Maganur</h2>

            <p>My Resume · PDF Document</p>

            <div className="resume-actions">

              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-open-btn"
              >
                View Resume ↗
              </a>

              <a
                href={resumePath}
                download="Apoorva.M.Maganur_Resume.pdf"
                className="resume-download-btn"
              >
                ⬇ Download Resume
              </a>

            </div>

          </div>

          {/* MINI GAME */}

          <div className="resume-game">

            <h2>Take a Little Break! 🎮</h2>

            <p>
              A little dinosaur game for visitors. Enjoy playing!
            </p>

            <MiniGame />

          </div>

          {/* FOOTER */}

          <div className="resume-footer">
            MADE WITH ♡ BY APOORVA
          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;