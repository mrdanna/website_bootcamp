exports.install = function(){
    ROUTE('GET /', home);
}

function home(){
    var self = this;
     this.view('index');
}