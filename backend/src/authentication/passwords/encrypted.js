import bcrypt from 'bcryptjs';

export const encrypted = async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 10);

    return encryptedPassword;
};
