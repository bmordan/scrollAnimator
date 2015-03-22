var fs = require('fs')
var gifsicle = require('gifsicle').path
var execFile = require('child_process').execFile

execFile(gifsicle,['-e','tableflip.gif'], createFrames)

function createFrames (err) {
  if (err) throw err
  getFrames()
}

function getFrames () {
  fs.readdir('.', function (err, files) {
    if (err) throw err
    var frames = extractFrames(files)
    var json = makeJson(frames)
    writeFile(json)
  })
}

function extractFrames (files) {
  return files.filter(function (file) {
    var isFrame = file.split('.')
    if (isFrame.length === 3) return file
  })
}

function makeJson (frames) {
  var obj = {}
  var key = 0
  for (var i = frames.length-1; i > 0; i-=1) {
    obj[key] = frames[i]
    key = key+=1
  }
  return JSON.stringify(obj)
}

function writeFile (json) {
  fs.writeFile('frames.json', json, function (err) {
    if (err) throw err
    console.log('frames.json created successfully')
  })
}