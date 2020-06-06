const { historic } = require('../app/models');

module.exports = {
    async index(req, res) {
        const historics = await historic.findAll();
        res.status(200).json(historics);
        return res.send();
    },

    async show(req, res) {
        const _historic = await historic.findByPk(req.params.id);
        if (_historic === null) {
            return res.status(404).json({ error: `Histórico não encontrado!` });
        }
        return res.status(200).json(_historic);
    },

    async store(req, res) {
        try {
            const _historic = await historic.create(req.body);

            return res.status(201).json(_historic);
        } catch (error) {
            return res.status(404).json({ error: `Erro ao cadastrar histórico. Erro: ${error}` });
        }
    },

    async update(req, res) {
        try {
            const _historic = await historic.findByPk(req.params.id);
            if(!_historic){
                return res.status(404).json({ error: `Histórico não encontrado.` });
            }
            await _historic.update(req.body);

            return res.json(_historic);
        } catch (error) {
            return res.status(404).json({ error: `Erro ao atualizar histórico. Erro: ${error}` });
        }
    },

    async destroy(req, res) {
        try {
            const _historic = await historic.findByPk(req.params.id);
            await _historic.destroy();
            return res.send();
        } catch (error) {
            return res.status(404).json({ error: `Erro ao deletar histórico. Erro: ${error}` });
        }
    }
};