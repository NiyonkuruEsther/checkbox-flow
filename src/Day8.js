window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //it will work like  the absolute thing in the real life!
  //the first two args are the top and the left (x, y) respectively and then the
  //the last two are the width and the height as they are in plain css

  //with the fill we have the rectangle filled with a color
  //And then with the styles we can give different colors
  //   context.fillStyle = "red";
  //   context.fillRect(100, 100, 100, 100);

  //with stroke we have the rectangle with only the border
  //we can always give the canvas styles only before they are created
  //   context.strokeStyle = "limegreen";
  //   context.lineWidth = "2";
  //   context.strokeRect(100, 100, 100, 100);
  //   context.strokeStyle = "springgreen";
  //   context.strokeRect(200, 200, 100, 100);
  //   context.strokeStyle = "greenyellow";
  //   context.strokeRect(300, 300, 100, 100);
  //   context.strokeStyle = "yellow";
  //   context.strokeRect(400, 400, 100, 100);
  //   context.strokeStyle = "orange";
  //   context.strokeRect(500, 500, 100, 100);

  //we are going now to customize the lines
  //if you dont use the begin path then all the lines wil be connected and starting from exactly where we left from
  //   context.beginPath();
  //   //this also takes in x, y respectively it specifies where we want our drawing to start
  //   context.moveTo(100, 100);
  //   //to be able to draw a line we need to use the lineTo()
  //   context.lineTo(200, 100);
  //   context.lineTo(200, 200);
  //   //with all of that above nothing is going to happen until we add a fill to it!
  //   context.strokeStyle = "red";
  //   context.stroke();

  let painting = false;
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    context.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    context.lineWidth = 2;
    //line cap allows us to use our drawings kinda rounded or with the reflex angles
    context.lineCap = "round";
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //   context.strokeStyle = "limegreen";
  //   context.lineWidth = "2";
  //   context.strokeRect(100, 100, 100, 100);
  //   context.strokeStyle = "springgreen";
  //   context.strokeRect(200, 200, 100, 100);
  //   context.strokeStyle = "greenyellow";
  //   context.strokeRect(300, 300, 100, 100);
  //   context.strokeStyle = "yellow";
  //   context.strokeRect(400, 400, 100, 100);
  //   context.strokeStyle = "orange";
  //   context.strokeRect(500, 500, 100, 100);
});
