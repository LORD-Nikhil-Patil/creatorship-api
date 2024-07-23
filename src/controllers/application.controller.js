const catchAsync = require("../utils/catchAsync");
const { application } = require("../services");

const createApplication = catchAsync(async (req, res) => {
  const newApplication = await application.createApplication(req.body);
  res.send(newApplication);
});

module.exports = {
  createApplication,
};
