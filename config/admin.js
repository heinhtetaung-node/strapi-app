module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ddb0627d145e47044213417c143b236a'),
  },
});
