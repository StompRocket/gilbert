const swipe = (element, callback) => {
  
  let touchsurface = element,
  dir = -1,
  startX: Number,
  startY: Number,
  distX: Number,
  distY: Number,
  threshold = 200, // smallest distance for swipe to register
  restraint = 120, // maximum deviation for swipt to register
  allowedTime = 300, // maximum time allowed
  elapsedTime, // some time thing I don't know the type name
  startTime,
  handleswipe = callback || function(dir){}
  
  touchsurface.addEventListener('touchstart', e => {
    var touchobj = e.changedTouches[0]
    dir = -1
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // start time
    e.preventDefault()
  }, false)
  
  touchsurface.addEventListener('touchmove', e => {
    e.preventDefault() // Don't scroll n' stuf
  }, false)
  
  touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    // delta X
    distX = touchobj.pageX - startX
    // delta Y
    distY = touchobj.pageY - startY
    // delta t
    elapsedTime = new Date().getTime() - startTime
    // common condition to allow swipe
    if (elapsedTime <= allowedTime){
      // horizontal swipe
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        dir = (distX < 0)? 53 : 35 // determine direction
      }
      // vertical swipe
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
        dir = (distY < 0)? 71 : 17 // determine direction
      }
      // Calculate the hypotenuse of the triangle formed by
      // distX and distY, used to find real displacement
          // check if the line is longer than the threshold
      else if ( Math.sqrt(Math.abs(distX) ** 2 + Math.abs(distY) ** 2) > threshold
           // check if it is close enough to 45%
           && Math.abs(Math.abs(distY) - Math.abs(distX)) < restraint ) {
        if ( distX < 0 ) {
          // swipe down - [left right]
          dir = (distY < 0)? 26 : 80
        } else {
          // swipe up - [left rigjt]
          dir = (distY < 0)? 62 : 8
        }
      }
    }
    // do something with the result
    handleswipe(dir)
    e.preventDefault()
  }, false)
}

export default swipe;