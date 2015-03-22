(function(){

  var el = document.getElementById('scrollAnimator')
  var frames = {"0":"tableflip.gif.018","1":"tableflip.gif.017","2":"tableflip.gif.016","3":"tableflip.gif.015","4":"tableflip.gif.014","5":"tableflip.gif.013","6":"tableflip.gif.012","7":"tableflip.gif.011","8":"tableflip.gif.010","9":"tableflip.gif.009","10":"tableflip.gif.008","11":"tableflip.gif.007","12":"tableflip.gif.006","13":"tableflip.gif.005","14":"tableflip.gif.004","15":"tableflip.gif.003","16":"tableflip.gif.002","17":"tableflip.gif.001"}

  el.innerHTML = '<img src="assets/'+frames[0]+'" style="width:'+window.innerWidth+'px">'

  window.onscroll = function (event) { 
    var top = document.body.scrollTop
    var base = el.offsetHeight
    var chunk = base/Object.keys(frames).length
    var index = returnIndex(top, chunk)
    el.innerHTML = '<img src="assets/'+frames[index]+'" style="width:'+window.innerWidth+'px">'
  }

  function returnIndex (top, chunk) {
    if (top >= el.offsetHeight) return Object.keys(frames).length-1
    if (top <= 0) return 0
    return Math.floor(top/chunk)
  }

})()