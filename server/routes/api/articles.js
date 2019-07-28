const mongoose = require('moongoose');
const router = require('express').Router();
const Articles = mongoose.model('Articles');


router.post('/', (request, response, next) => {
    const { body } = request;

    if(!body.title){
        return response.status(422).json({
            errors: {
                title: 'is required',
            },
        });
    }

    if(!body.author){
        return response.status(422).json({
            errors: {
                author: 'is required',
           },
        });
    }
    if(!body.body){
        return response.status(422).json({
            errors: {
                body: 'is required',
            },
        });
    }

    const finalArticle = new Articles(body);
    return finalArticle.save()
    .then(() => response.json ({ article: finalArticle.toJSON() }))
    .catch(next);
});

router.get('/', (request, response, next) =>{
   return Articles.find()
   .sort({ createdAt: 'descending' })
   .then((articles) => response.json({ articles: articles.map(article => article.toJSON()) }))
   .catch(next);
    });

    router.param('id', (request, response, next, id) => {
        return Articles.findById(id, (err, article) => {
            if(err){
                return response.sendStatus(404);
            }else if(article) {
                request.article = article;
                return next();
            }
        }).catch(next);
    });

    router.get('/:id', (request, response, next) => {
        return response.json({
            article: request.article.toJSON(),
        });
    });

    router.patch('/:id', (request, response, next) => {
        const { body } = request; 

        if(typeof body.title !== 'undefined'){
            request.article.title = body.title;
        }

        if(typeof body.author !== 'undefined'){
            request.article.author = body.author;
        }

        if (typeof body.body !== 'undefined'){
            request.article.body = body.body;
        }

        return request.article.save()
        .then(() => response.json ({ article: request.article.toJSON() }))
        .catch(next);
    });

    router.delete('./:id',(request, response, next) => {
        return Articles.findByIdAndRemove(request.article._id)
        .then(() => response.sendStatus(200))
        .catch(next);
    });

    module.exports = router; 