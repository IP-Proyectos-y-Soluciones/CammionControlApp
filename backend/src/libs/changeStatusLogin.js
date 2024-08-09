import LoginStatus from '../models/LoginStatus';

export const ChangeLoginStatus = async (
  logStatus,
  refer,
) => {
  try {
    const finder = await LoginStatus.findOne({ refer });

    if (!finder) throw new Error('Status login error...!');

    finder.loginStatus = logStatus;

    await finder.save();

    return finder.loginStatus;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const FindLoginStatus = async (refer) => {
  try {
    const logStatus = await LoginStatus.findOne({ refer });

    // console.log(logStatus);

    return logStatus.loginStatus;
  } catch (error) {
    console.error(error.message);
  }
};
