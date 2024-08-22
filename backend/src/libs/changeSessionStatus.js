// import LoginStatus from '../models/LoginStatus';
// import Usuario from '../models/Usuario';

// export const ChangeSessionStatus = async (
//   loggedStatus,
//   cedula,
// ) => {
//   try {
//     const loggedStatusFinder = await Usuario.findOne({
//       usuario_cedula: cedula,
//     });

//     if (!loggedStatusFinder)
//       throw new Error('Status login error...!');

//     loggedStatusFinder.logged = loggedStatus;

//     await loggedStatusFinder.save();

//     return loggedStatusFinder.logged;
//   } catch (error) {
//     if (error instanceof Error) {
//       return res.status(500).json({ error: error.message });
//     } else {
//       return res.status(500).json(error);
//     }
//   }
// };

// export const ChangeLoginStatus = async (
//   logStatus,
//   refer,
// ) => {
//   try {
//     const finder = await LoginStatus.findOne({ refer });

//     if (!finder) throw new Error('Status login error...!');

//     finder.loginStatus = logStatus;

//     await finder.save();

//     return finder.loginStatus;
//   } catch (error) {
//     if (error instanceof Error) {
//       return res.status(500).json({ error: error.message });
//     } else {
//       return res.status(500).json(error);
//     }
//   }
// };

// export const FindSessionStatus = async (cedula) => {
//   try {
//     const logStatus = await Usuario.findOne({
//       usuario_cedula: cedula,
//     });

//     // console.log(logStatus);

//     return logStatus.logged;
//   } catch (error) {
//     console.error(error.message);
//   }
// };
