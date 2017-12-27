/*
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdXJmIFJlcGFpciBBUEkiLCJpYXQiOjE1MTQyMzIzOTAsImV4cCI6MTU0NTc2ODM5MCwiYXVkIjoic3VyZi5yZXBhaXIiLCJzdWIiOiJhZG1pbkBzdXJmIiwiUm9sZSI6ImZpeGVyIiwiaWQiOiIzNzkwYTk4NC0wZmZmLTQyZjctODI1OC00MDI3YjlhZjI3ODUiLCJhbGlhcyI6ImZpeGVyMSJ9.GuQCPVOPFmy4Z7Y-nrsR7hYtbUxyHJMBUQ_HBv-1XGg
*/
const stage = 'dev';
const region = 'us-east-1';

const getEndPoint = (apiID, endpoint, target) => {
  const apiGateway = `https://${apiID}.execute-api.${region}.amazonaws.com/${stage}/${endpoint}?target=${target}`;
  return apiGateway;
};
//https://m9ihgm68db.execute-api.us-east-1.amazonaws.com/dev/anonymous?target=mapdata
export const endPoints = {
  mapData: getEndPoint('m9ihgm68db', 'anonymous', 'mapData')
};

