const petsCollection = "pets";

const SINGLE_ENTITY = "contact";
const COLLECTION_NAME = "contacts";
const COLLECTION_ID_PARAMETER = `:${SINGLE_ENTITY}`;
const COLLECTION_ID = `${SINGLE_ENTITY}_id`

const API_ROUTE = "/api"

const routeWithID = `/${COLLECTION_NAME}/:${COLLECTION_ID_PARAMETER}`;
const routeWithoutID = `/${COLLECTION_NAME}`;
const API_routeWithoutID = API_ROUTE + routeWithoutID;
const API_routeWithID = API_ROUTE + routeWithoutID;


module.exports = {
  petsCollection,
  routeWithID,
  routeWithoutID,
  SINGLE_ENTITY,
  COLLECTION_ID,
  API_routeWithoutID,
  API_routeWithID
}