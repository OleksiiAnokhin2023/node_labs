const express = require('express');
const router = express.Router();
const students = require("../data/students.json");


router.route('/:id')
    .get((req, res, next) => {
        //res.json({"id":req.params.id});
        const Studentid = parseInt(req.params.id);
        const Student = students.find((student) => student.id === Studentid);

        if (!Student) {
            const err = new Error('Student not found');
            err.status = 404;
            return next(err);
        }

        res.render('students.ejs', {
            name: Student.name,
            image:Student.image,
            information: Student.information,
            source: Student.source,
        });
    });


module.exports = router;