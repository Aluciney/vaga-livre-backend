const { user, parking, vehicle } = require('../app/models');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        const user_ = await user.findOne({ 
            where: { email },
        });
        
        if(!user_){
            return res.status(401).json({ error: 'E-mail não cadastrado' });
        }

        const match = await bcrypt.compare(password, user_.password_hash);
        if(!match){
            return res.status(401).json({ error: 'Senha inválida' });
        }

        var token = jwt.sign({ 
            id: user_.id 
        }, process.env.JWT_SECRET_KEY);

        if(user_.type_user === 'user'){
            const vehicles = await vehicle.findAll({
                where: { id_user: user_.id },
            });
            return res.status(200).json({ user: user_, token, vehicles });
        }

        const parking_ = await parking.findOne({ 
            where: { id_user: user_.id },
        });

        return res.status(200).json({ user: user_, token, parking: parking_ });
    },

    async login_google(req, res) {
        try {
            const { email } = req.body;
            const user_ = await user.findOne({ 
                where: { email },
            });
            
            if(!user_){
                return res.status(404).json({ error: 'E-mail não cadastrado' });
            }

            var token = jwt.sign({ 
                id: user_.id 
            }, process.env.JWT_SECRET_KEY);

            if(user_.type_user === 'user'){
                const vehicles = await vehicle.findAll({
                    where: { id_user: user_.id },
                });
                return res.status(200).json({ user: user_, token, vehicles });
            }

            const parking_ = await parking.findOne({ 
                where: { id_user: user_.id },
            });

            return res.status(200).json({ user: user_, token, parking: parking_ });
        } catch (error) {
            return res.status(404).json({ error: `Erro ao fazer login. Erro: ${error}` });
        }
    },
};