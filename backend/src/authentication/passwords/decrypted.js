import bcrypt from 'bcryptjs';

export const decrypted = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error('Error comparing passwords', error);
        throw new Error('Error comparing passwords');
    }
};
