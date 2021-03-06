//Require Router
const siteRouter = require("./site.js");
const memberRouter = require("./members.js");
const coursesRouter = require("./courses.js");
const meRouter = require("./me.js");

function routes(app) {
  app.use("/me", meRouter);
  app.use("/members", memberRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = routes;
