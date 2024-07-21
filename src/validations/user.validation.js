const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid("user", "admin"),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object({
    userId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object({
    email: Joi.string().email(),
    password: Joi.string().custom(password),
    name: Joi.string(),
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    gender: Joi.string().trim(),
    heading: Joi.string().trim(),
    country: Joi.string().trim(),
    address: Joi.string().trim(),
    city: Joi.string().trim(),
    state: Joi.string().trim(),
    zip: Joi.string().trim(),
    username: Joi.string().trim(),
    about: Joi.string().trim(),
    heading: Joi.string().trim(),
    photo: Joi.string().uri().allow(''),
    coverPhoto: Joi.string().uri().allow(''),
  }).min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
