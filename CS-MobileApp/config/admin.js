module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0912e6bfddb601fbb3cc14bce92578fe'),
  },
});
