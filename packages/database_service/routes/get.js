const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

module.exports = server => {
    server.get('/', async(_, res) => {
        const m = new Mail({
            subject: 'hello sub',
            receiver: 'text@text.com',
            content: 'Heloo content',
        })
        await m.save();

        res.send('Worked');
    })
}