(function(){

  var el = initElement('scrollimator')

  var frames = {"0":"tableflip.gif.018","1":"tableflip.gif.017","2":"tableflip.gif.016","3":"tableflip.gif.015","4":"tableflip.gif.014","5":"tableflip.gif.013","6":"tableflip.gif.012","7":"tableflip.gif.011","8":"tableflip.gif.010","9":"tableflip.gif.009","10":"tableflip.gif.008","11":"tableflip.gif.007","12":"tableflip.gif.006","13":"tableflip.gif.005","14":"tableflip.gif.004","15":"tableflip.gif.003","16":"tableflip.gif.002","17":"tableflip.gif.001"}

  el.innerHTML = buildStack()

  var frameArray = makeFrameArray()

  window.onscroll = function (event) { 
    var index = returnIndex()
    show(index)
    hide(index)
  }

  function initElement (id) {
    var element = document.getElementById(id)
    element.style.height = window.innerHeight + 'px'
    element.style.position = 'relative'
    return element
  }

  function returnIndex () {
    var top = document.body.scrollTop
    if (top >= el.offsetHeight) return 0
    if (top <= 0) return Object.keys(frames).length-1
    return Math.floor(el.offsetHeight/top)
  }

  function buildStack () {
    var stack = ''
    for (i in frames) {
      stack += '<li style="position:absolute;top:0;left:0;"><img src="assets/'+frames[i]+'" style="width:'+window.innerWidth+'px"></li>'
    }
    return stack
  }

  function makeFrameArray () {
    var array = []
    for (i in el.children) {
      array.push(el.children[i])
    }
    return array
  }

  function show (index) {
    frameArray.slice(0, index).map(function (li) {
      if (!li.children) return
      return li.children[0].style.opacity = '1'
    })   
  }

  function hide (index) {
    frameArray.slice(index, Object.keys(frames).length).map(function (li) {
      if (!li.children) return
      return li.children[0].style.opacity = '0'
    })    
  }

})()