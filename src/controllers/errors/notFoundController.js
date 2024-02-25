import { notFoundError } from '../../services/errorService.js';

export const notFoundController = (req, res, next) => {
  const resourcePath = req.params[0];
  // console.log(req);
  console.log(`Recurso no encontrado: ${resourcePath}`);

  next(notFoundError(resourcePath));
};