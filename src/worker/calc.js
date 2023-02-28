onmessage = function(e) {
  let sum = e.data
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random()
    }
  }
  postMessage(sum)
}