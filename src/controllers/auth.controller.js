// controller for authentication routes

const authService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    res.status(201).json(data);
  } catch (err) {
    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({ message: err.message || "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json(data);
  } catch (err) {
    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({ message: err.message || "Internal Server Error" });
  }
};

const me = async (req, res) => {
  try {
    const user = await authService.getMe(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    const statusCode = err.statusCode || err.status || 500;
    res.status(statusCode).json({ message: err.message || "Internal Server Error" });
  }
};

module.exports = { register, login, me };

