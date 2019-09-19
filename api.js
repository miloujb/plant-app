const Frisbee = require("frisbee");

const api = new Frisbee({
  baseURI: "https://nc-greenhouse-project.herokuapp.com/greenhouse",
  headers: {
    Accept: "application/json",
    ContentType: "application/json"
  }
});

export const getAllData = () => {
  return api
    .get("https://nc-greenhouse-project.herokuapp.com/greenhouse")
    .then(({ body: { readings } }) => {
      return readings;
    });
};
