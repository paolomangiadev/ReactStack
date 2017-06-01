export function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
      if (entity) {
        res.status(statusCode).json(entity);
        console.log('ok: ' + statusCode);
      }
    };
  }
export function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
      res.status(statusCode).send(err);
      console.log('ko: ' + statusCode + err);
    };
}
