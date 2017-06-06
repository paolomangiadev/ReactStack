import Service from './services.model';
import * as res_handler from '../res_handler';

// Gets a list items
export function index(req, res) {
  return Service.find().exec()
    .then(res_handler.respondWithResult(res))
    .catch(res_handler.handleError(res));
}
// Gets a sing item from DB
// export function show(req, res) {
//     res.send('GET ID handler for /services route.' + req.query.id);
// }
// Gets a service item from its title
export function getservice(req, res) {
  return Service.findOne({'title': req.params.title}).exec()
    .then(res_handler.respondWithResult(res))
    .catch(res_handler.handleError(res));
}
// Creates a sing item inside DB
export function create(req, res) {
  var chat = new Service(req.body);
  chat.save()
    .then(res_handler.respondWithResult(res, 201))
    .catch(res_handler.handleError(res));
}
// Updates a sing item inside DB
export function update(req, res) {
    res.send('PUT handler for /services route.');
}
// Delete a sing item inside DB
export function destroy(req, res) {
    res.send('DELETE handler for /services route.');
}
