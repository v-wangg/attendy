const mongoose = require('mongoose');

const Class = mongoose.model('classes')

module.exports = app => {
    app.get('/api/classes/user-classes', async (req, res) => {
        Class.find({}, (err, classes) => {
            var classMap = {};
        
            classes.forEach(function(classInstance) {
              classMap[classInstance._id] = classInstance;
            });
            
            console.log(classMap);

            res.send(classMap);  
          });
    })

    app.post('/api/classes/new', async (req, res) => {
        const { name, dateHeld } = req.body;

        const newClass = new Class({
            name: name,
            dateHeld: dateHeld,
            dateCreated: Date.now(),
            _instructor: req.user.id
        });

        try {
            const newClassInstance = await newClass.save();
            req.user.classIDs.push(newClassInstance.id);
            const newUserInstance = await req.user.save();
            res.send(newUserInstance);
        } catch (error) {
            res.status(422).send(error);
        }
    });

    app.get('/api/classes/:classID', async (req, res) => {
        const { classID } = req.params;

        const classInstance = await Class.findById(classID);
        res.send(classInstance);
    })
}