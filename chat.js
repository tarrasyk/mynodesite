var clients = [];

exports.subscribe = function(req, res){
    console.log("subscribe");
    clients.push(res);

    res.on('close', function(){
        clients.splice(clients.indexOf(res), 1);
    });

};

exports.publish = function(message){

    clients.forEach(function(res){
        console.log("publish '%s'", message);
       res.end(message);
    });
    clients = [];
};