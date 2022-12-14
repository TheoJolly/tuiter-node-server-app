import posts from "./tuits.js";
let tuits = posts;

const TuitController = (app) => {
	app.get('/api/tuits', findTuits);
	app.post('/api/tuits', createTuit);
	app.delete('/api/tuits/:tid', deleteTuit);
	app.put('/api/tuits/:tid', updateTuit);
}

const findTuits  = (req, res) => {
	res.json(tuits);
}

const createTuit = (req, res) => {
	const newTuit = req.body;
	newTuit._id = Number((new Date()).getTime() + '');
	newTuit.likes = 0;
	newTuit.liked = false;
	tuits.push(newTuit);
	res.json(newTuit);
}

const deleteTuit = (req, res) => {
	const tuitdIdToDelete = req.params['tid'];
	tuits = tuits.filter((t) => String(t._id) !== tuitdIdToDelete);
	res.sendStatus(200);
}

const updateTuit = (req, res) => {
	const tuitdIdToUpdate = req.params.tid;
	const updates = req.body;
	const tuitIndex = tuits.findIndex((t) => String(t._id) === tuitdIdToUpdate)
	tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
	res.sendStatus(200);
}

export default TuitController