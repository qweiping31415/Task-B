const SINGLE_ENTITY = "pet";
const COLLECTION_NAME = "pets";
const COLLECTION_ID = `${SINGLE_ENTITY}_id`

const API_ROUTE = "/api"

const routeWithID = `/${COLLECTION_NAME}/:pet_id`;
const routeWithoutID = `/${COLLECTION_NAME}`;
const API_routeWithoutID = API_ROUTE + routeWithoutID;
const API_routeWithID = API_ROUTE + routeWithoutID;

module.exports = {
  routeWithID,
  routeWithoutID,
  SINGLE_ENTITY,
  COLLECTION_ID,
  API_routeWithoutID,
  API_routeWithID
}