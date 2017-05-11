
module.exports = {

    getCart: function(req, res, next){
        res.status(200).json(req.session.cart);
    },

    addProduct: function(req, res, next){
        if (!req.session.cart){
            req.session.cart = [];
        }

        if(!req.body.name){
            return res.status(400).send('You need to send me a product');
        }

        req.session.cart.push(req.body);
        res.status(200).json(req.session.cart);
    }

}
