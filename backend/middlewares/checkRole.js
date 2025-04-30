module.exports = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.send({ error: 'Доступ запрещен' });

      return;
    }
    next();
  };
};
