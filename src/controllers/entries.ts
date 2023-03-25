import { response } from 'express';

const documentGet = (request: any, require = response) => {
  const query = request.query;
  response.json({
    status: 'ok',
  });
};

const documentPost = (request: any, require = response) => {
  const query = request.query;
  response.json({
    status: 'ok',
  });
};
