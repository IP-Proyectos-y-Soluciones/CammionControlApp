const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
  {
    refer: { type: Number, default: 1 },
    loginStatus: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
    autoCreate: true,
  },
);

const LoginStatus = mongoose.model(
  'LoginStatus',
  logSchema,
);

export default LoginStatus;
