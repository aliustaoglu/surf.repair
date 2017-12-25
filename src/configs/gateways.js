const stage = 'dev';

const getEndPoint = endpoint => {
  const apiGateway = `https://' + ${endpoint} + '.execute-api.us-east-1.amazonaws.com/${stage}/`;
  return apiGateway;
};

export const endPoints = {
  mapData: getEndPoint('m9ihgm68db') + 'fixers'
};
