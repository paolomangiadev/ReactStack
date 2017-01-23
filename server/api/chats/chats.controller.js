import Chat from './chats.model';
import * as res_handler from '../res_handler'

// Gets a list items
export function index(req, res) {
  return Chat.find().exec()
    .then(res_handler.respondWithResult(res))
    .catch(res_handler.handleError(res));
}
// Gets a sing item from DB
export function show(req, res) {
    res.send('GET ID handler for /chats route.');
}
// Creates a sing item inside DB
export function create(req, res) {
  var chat = new Chat(req.body);
  chat.save()
    .then(res_handler.respondWithResult(res, 201))
    .catch(res_handler.handleError(res));
}
// Updates a sing item inside DB
export function update(req, res) {
    res.send('PUT handler for /chats route.');
}
// Delete a sing item inside DB
export function destroy(req, res) {
    res.send('DELETE handler for /chats route.');
}
