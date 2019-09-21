const admin = require('firebase-admin');

let db = admin.firestore();

const vehicleLocationHandler = (req,res) => {
    db.collection('vehicleLocation').doc(req.params.id).set({ socketID: req.body.socketID }, {merge: true})
    res.send('SUCCESS!!!')
}

module.exports = vehicleLocationHandler;
