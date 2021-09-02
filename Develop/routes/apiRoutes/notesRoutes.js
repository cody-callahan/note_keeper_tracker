const router = require('express').Router();
const {createNote} = require('../../lib/createNote.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let completedNotes = notes;
    res.json(completedNotes);
})

router.post('/notes', (req, res) => {

    console.log(notes);
    req.body.id = notes.length.toString();
    console.log(notes);

    let note = createNote(req.body, notes);
    res.json(note);
})

module.exports = router;