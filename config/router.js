const router = require('express').Router();
const questions = require('../controllers/questions');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const users = require('../controllers/user');

router.route('/questions')
  .get(questions.index)
  .post(questions.create);

router.route('/questions/:id')
  .get(questions.show)
  .put(questions.update)
  .delete(questions.delete);

router.route('/questions/:id/votes')
  .post(secureRoute, questions.createVote);

router.route('/questions/:id/winner')
  .post(questions.createWinner);

router.route('/users/:id')
  .get(users.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
