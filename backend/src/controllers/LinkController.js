const short = require('nanoid');   
const Link = require('../models/LinkModel');
const {isUrl} = require('./ValidUrl');

module.exports = {
    async store(request, response){
        const {link} = request.body;

        if(isUrl(link)){
            const url_exist = await Link.exists({Link:link});
            if(url_exist){
                const data = await Link.findOneAndUpdate({Link: link}, {$inc: {Hits: 1}});
                return response.json(data);
            }else{
                const ShortLink = short.nanoid(5);
    
                const NewLink = await Link.create({
                    Link: link,
                    ShortLink: "http://chr.dc/" + ShortLink
                });
                return response.json(NewLink);
            }     
        }else{
            return response.json({ShortLink:"Insira uma URL válida"})
        }
      
    },
    async index(request, response){

        const TOP5 = await Link.find({}).sort('-Hits').limit(5);
        return response.json(TOP5);
    }


}