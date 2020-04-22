const { parking } = require('../app/models');

module.exports = {
    async index(req, res) {
        const parkings = await parking.findAll();
        var new_parkings = [];
        parkings.map( _parking =>{
            new_parkings.push({
                id: _parking.id,
                id_user: _parking.id_user,
                name: _parking.name,
                vacancies: `${_parking.vacancy - _parking.vacancy_used}/${_parking.vacancy}`,
                coordinate: {
                    latitude: _parking.location[0],
                    longitude: _parking.location[1]
                },
                price: _parking.price
            });
        });
        return res.status(200).json(new_parkings);
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
            const _parking = await parking.create({
                ...req.body,
                location: [
                    req.body.location.latitude,
                    req.body.location.longitude,
                ]
            });
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