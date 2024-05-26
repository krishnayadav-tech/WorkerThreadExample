self.onmessage = function(e) {
    var data = e.data;
    console.log(data);
    for(var i = 0; i < 10000000000; i++) {
        // Do something
    }
    self.postMessage('You said: ' + data);
}
