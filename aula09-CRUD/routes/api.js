const express = require('express');
const router =  express.Router();

const db = require('../db');

// Rotas
// listar usuarios do sistema 
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// cadastrar
router.post('/', (req, res) =>{
    const {nome, email} = req.body;
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email});
    });
});

// atualização 
router.put('/:id', (req, res) => {
    const {nome, email} = req.body
    const {id} = req.params;

    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});

// delete
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

module.exports = router;