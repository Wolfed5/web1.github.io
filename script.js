
function clearsel() {
    var ctx = document.querySelector('mycanvas').getContext('2d');
    var x = 0;
    ctx.clearRect(0,0, 1000, 1000);
                       }


function drawShape() {
            
                        // get the canvas element using the DOM
                        let canvas = document.getElementById('mycanvas');
                        
                        // Make sure we don't execute when canvas isn't supported
                        if (canvas.getContext) {
                        
                           // use getContext to use the canvas for drawing
                           let ctx = canvas.getContext('2d');
                           
                           // draw a rectangle with default settings
             ctx.fillStyle = 'green'
             ctx.fillRect(0,0,150,150);
                           
                           // Save the default state
             ctx.save(1);
             
             // Draw a rectangle with restored settings
             ctx.fillStyle = 'red'
             ctx.fillRect(165,0,150,150); 

             ctx.save(2);


             ctx.fillStyle = 'white'
             ctx.fillRect(166,1,148,148); 
             
             ctx.restore(2);

             ctx.fillRect(330,0,150,150); 

             ctx.restore(1);


             ctx.beginPath();
             ctx.fill();
             ctx.beginPath();
             ctx.arc(550, 40, 25, 0, 2 * Math.PI);
             ctx.fill();

             } else {
             alert('You need Safari or Firefox 1.5+ to see this demo.');
             }
             }



            function createImage1() {
                var ctx = document.getElementById('mycanvas1').getContext('2d');
                var x = 0;
                
                function animation() {
                     
                     ctx.clearRect(0,0, 1000, 1000);

                     ctx.beginPath();
                     ctx.fill();
                     ctx.beginPath();
                     ctx.fillStyle = 'black';
                     ctx.arc(100, 40, 25, x, Math.PI/2+x);
                     ctx.fill();
                     ctx.save(3);

                   //  ctx.fillRect(x, 10, 10, 10);
                     ctx.restore(3);

                     ctx.beginPath();
                     ctx.fill();
                     ctx.beginPath();
                     ctx.fillStyle = 'red';
                     ctx.arc(100, 40, 22, 0, Math.PI*2);
                     ctx.fill();


                     x = x+0.25;
                     
                     if (x > 999) { x = 0;}
                     setTimeout(animation, 100)
                   //  if(x<1000) 
                                                        }
            animation();
            
                                                    }                             
                                        








