document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("grid-container");
    // 循環創建16x16方形div
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        // 創建新的方形div元素
        var square = document.createElement("div");
        square.className = "grid-square";
        
        // 將方形div元素添加到容器div中
        container.appendChild(square);
      }
    }
    
    // drawing
    var isMouseDown = false;
    container.addEventListener("mousedown", function(event) {
      if (event.target.classList.contains("grid-square")) {
        isMouseDown = true;
        event.target.style.backgroundColor = "black"; /* 使用你想要的顏色 */
      }
    });
    container.addEventListener("mousemove", function(event) {
      if (isMouseDown && event.target.classList.contains("grid-square")) {
        event.target.style.backgroundColor = "black"; /* 使用你想要的顏色 */
      }
    });
    container.addEventListener("mouseup", function() {
      isMouseDown = false;
    });
    container.addEventListener("mouseleave", function() {
      isMouseDown = false;
    });
    
    // Reset-button
    document.getElementById("reset-button").addEventListener("click", function() {
      var squaresPerSide = prompt("Enter the number of squares per side (maximum 100):");
      if (squaresPerSide !== null) {
        squaresPerSide = parseInt(squaresPerSide);
        if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
          resetGrid(squaresPerSide);
        } else {
          alert("Invalid input. Please enter a number between 1 and 100.");
        }
      }
    });
    
    // Generate new grid
    function resetGrid(squaresPerSide) {
      container.innerHTML = ""; // Remove existing grid      
      container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
      for (var i = 0; i < squaresPerSide; i++) {
        for (var j = 0; j < squaresPerSide; j++) {
          // Create new square div element
          var square = document.createElement("div");
          square.className = "grid-square";
          // Add square div element to container div
          container.appendChild(square);
        }
      }
    }

    // Clean-button
    document.getElementById("clean-button").addEventListener("click", function() {
        var squares = container.querySelectorAll(".grid-square");
        squares.forEach(function(square) {
            square.style.backgroundColor = ""; // 清空方格的背景顏色
        });
    });
  

})
  