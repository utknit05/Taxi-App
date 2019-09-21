const admin = require('firebase-admin');
let serviceAccount = require('../scobusServiceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

let db = admin.firestore();

const bookingHandler = (req,res) => {
    const { name } = req.params;
    if (name) {
        const doc = db.collection('Bookings').doc(name)
        doc.get().then(doc => {
            if (!doc.exists) {
                return res.send('No such document!!!')
            }
            return res.send(doc.data())
        })
        .catch((err) => {
            console.log(err);// Handle errors properly
            return res.send('Something went wrong!!!')
        })
    }
    else {
        const { username } = req.body;
        db.collection('Bookings').doc(username).set(req.body)
        res.send('SUCCESS')
    }
}

module.exports = bookingHandler;
