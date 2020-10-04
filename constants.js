const petsCollection = "pets";

const SINGLE_ENTITY = "contact";
const COLLECTION_NAME = "contacts";
const COLLECTION_ID = `:${SINGLE_ENTITY}`


const routeWithID = `/${COLLECTION_NAME}/:${COLLECTION_ID}`;
const routeWithoutID = `/${COLLECTION_NAME}`;


module.exports = {
  petsCollection,
  routeWithID,
  routeWithoutID,
}