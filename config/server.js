module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3d114a727e122692b44db918ac24ba3e'),
    },
  },
});
