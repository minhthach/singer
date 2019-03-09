const express = require('express');
const { arrSinger, Singer, domainImg, domainLink } = require('../models/singer');

const router = express.Router();

router.get('/list', (req, res) => {
    res.render('list', { arrSinger, domainImg, domainLink })
})

router.get('/update/:id', (req, res) => {
    const selectedId = req.params // Sử dụng object {} để nhận về giá trị số
    const selectedSinger = arrSinger.filter(Singer => Singer.id === parseInt(selectedId.id))
    !Singer ? res.send({ error: 'Singer not found'}) : res.render('update', {selectedSinger, domainImg, domainLink})
})

router.post('/update-singer/:id', (req, res) => {
    const selectedId = req.params;
    const {txtName, txtLink, txtImage} = req.body;
    const indexSinger = arrSinger.findIndex(Singer => Singer.id === parseInt(selectedId.id))
    const singerUpdated = new Singer(parseInt(selectedId.id), txtName, txtImage, txtLink);
    arrSinger.splice(indexSinger, 1, singerUpdated)
    res.redirect('/list')
})

router.get('/remove/:id', (req, res) => {
    const selectedId = req.params;
    const indexSinger = arrSinger.findIndex(Singer => Singer.id === parseInt(selectedId.id))
    arrSinger.splice(indexSinger, 1)
    res.redirect('/list')
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add-singer', (req, res) => {
    const { txtName, txtImage, txtLink } = req.body;
    const id = Math.floor(Math.random() * 1000, 0);
    newSinger = new Singer(id, txtName, txtImage, txtLink)
    arrSinger.push(newSinger)
    res.redirect('/list')
    // res.send({
    //     txtName, txtImage, txtLink
    // })// Để dừng load route
})

module.exports = router