class Dark {
    constructor() {

    }

    init() {

        //Set Canvas
        const canvas = document.getElementById("renderCanvas");

       if(!canvas) {
           console.error("HTML5 Canvas is not found");
           return;
       }

        //Establish GL context
        const gl = canvas.getContext('webgl2');

        const message = gl ? "You have WebGL context" : "There is no WebGL context";
        console.log(message);

        //Getters and setters

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          // Set the clear color to darkish green.
        gl.clearColor(0.0, 0.5, 0.0, 1.0);
          // Clear the context with the newly set color. This is
          // the function call that actually does the drawing.
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

}

const dark = new Dark();
window.onload = dark.init();


