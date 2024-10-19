export const generateFormControlNumber = () =>{
    const prefix = 'YM-';

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomNumber = Math.floor(1000000 + Math.random() * 900000);

    return `${prefix}${year}${month}${day}-${randomNumber};`
}