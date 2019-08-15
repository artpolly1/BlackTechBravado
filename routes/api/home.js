
const userPostRoutes = express.Router();
const postControllers = require ('../../controllers/postControllers');

userPostRoutes.route('/')
.get(postControllers.find);

//Matches with "/api/post/:id"
userPostRoutes
    .route("/:id")
    .get(postControllers.findById)
    .put(postControllers.update);

userPostRoutes
.route('/add')
.put(postControllers.save);


module.exports = userPostRoutes;