(function(){

  var el = document.getElementById('scrollAnimator')
  var frames = {"0":"tableflip.gif.000","1":"tableflip.gif.001","2":"tableflip.gif.002","3":"tableflip.gif.003","4":"tableflip.gif.004","5":"tableflip.gif.005","6":"tableflip.gif.006","7":"tableflip.gif.007","8":"tableflip.gif.008","9":"tableflip.gif.009","10":"tableflip.gif.010","11":"tableflip.gif.011","12":"tableflip.gif.012","13":"tableflip.gif.013","14":"tableflip.gif.014","15":"tableflip.gif.015","16":"tableflip.gif.016","17":"tableflip.gif.017","18":"tableflip.gif.018"}

  el.innerHTML = '<img src="src/'+frames[0]+'">'

  window.onscroll = function (event) { 
    // var base = anillax.getBoundingClientRect().bottom
    var top = document.body.scrollTop
    var base = el.offsetHeight
    var chunk = base/Object.keys(frames).length
    var index = returnIndex(top, chunk)
    
  }

  function returnIndex (top, chunk) {
    if (top >= anillax.offsetHeight) return Object.keys(frames).length
    if (top <= 0) return 0
    return Math.floor(top/chunk)
  }

})()