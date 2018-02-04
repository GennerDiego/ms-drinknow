module.exports = function(app) {
    app.get("/drinks",function(req, res) {
         res.send('ok');
     });
     app.post("/drinks/pedido",function(req, res) {
        var pedido = req.body;
        console.log(pedido);
        res.send('ok');
    });
 }