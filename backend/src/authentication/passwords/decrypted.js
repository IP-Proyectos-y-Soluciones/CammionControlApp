import bcrypt from 'bcryptjs';

export const decrypted = async (
  signinPassword,
  encryptedPassword,
) => {
  try {
    const match = await bcrypt.compare(
      signinPassword,
      encryptedPassword,
    );

    return match;
  } catch (error) {
    console.error('Error comparing passwords', error);
    return false;
  }
};
