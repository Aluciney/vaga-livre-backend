const { parking } = require('../app/models');

module.exports = {
    async index(req, res) {
        const parkings = await parking.findAll();
        res.status(200).json(parkings);
        return res.send();
    },

    async show(req, res) {
        const _parking = await parking.findByPk(req.params.id);
        if (_parking === null) {
            return res.status(404).json({ error: `Estacionamento não encontrado!` });
        }
        return res.status(200).json(_parking);
    },

    async store(req, res) {
        try {
            const _parking = await parking.create(req.body);

            return res.status(201).json(_parking);
        } catch (error) {
            return res.status(404).json({ error: `Erro ao cadastrar estacionamento. Erro: ${error}` });
        }
    },

    async update(req, res) {
        try {
            const _parking = await parking.findByPk(req.params.id);
            if(_parking){
                _parking.update(req.body);
                return res.json(_parking);
            }
            return res.status(404).json({ error: `Estacionamento não encontrado.` });
        } catch (error) {
            return res.status(404).json({ error: `Erro ao atualizar estacionamento. Erro: ${error}` });
        }
    },

    async destroy(req, res) {
        try {
            const _parking = await parking.findByPk(req.params.id);
            await _parking.destroy();
            return res.send();
        } catch (error) {
            return res.status(404).json({ error: `Erro ao deletar estacionamento. Erro: ${error}` });
        }
    }
};