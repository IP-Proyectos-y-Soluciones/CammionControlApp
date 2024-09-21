import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioRegistroTractomulas from './pages/ServicesForm/FormularioRegistroTractomulas.jsx';
import { HomePage, LoginPage, EmployeesPage } from './pages';
import { ProtectedRoute } from './pages/ProtectedRoutes/ProtectedRoutes.jsx';
import { NavBarMain } from './components/Common/NavBarMain.jsx';
import FormularioRegistroVolquetas from './pages/ServicesForm/FormularioRegistroVolquetas.jsx';
import FormularioRegistroTanqueo from './pages/ServicesForm/FormularioRegistroTanqueo.jsx';
import Layout from './components/Common/Layout.jsx';
import ExcellTractomulas from './components/ExcellVistaPrevia/ExcellTractomulas';
import ExcellTanqueos from './components/ExcellVistaPrevia/ExcellTanqueos';
import ExcellVolquetas from './components/ExcellVistaPrevia/ExcellVolquetas';
import { AuthProvider } from './context/AuthContext';
import { EmployeesDetailsCard } from './components/Employees/EmployeesDetailsCard.jsx';
import { EmployeesFormAddPage } from './pages/Employees/EmployeesFormAddPage';
import { EmployeeByDniPage } from './pages/Employees/EmployeesByDniPage.jsx';
import { UpdateEmployeeByDni } from './pages/Employees/UpdateEmployeeFormByDniPage.jsx';
import { UsersPage } from './pages/Users/UsersPage.jsx';
import { UsersFormAddPage } from './pages/Users/UsersFormAddPage.jsx';
import { UsersFormLockUnlockPage } from './pages/Users/UsersFormLockUnlockPage.jsx';
import { UserProfileDetail } from './pages/UserDetail/UserProfileDetail.jsx';
import { VolquetasPage } from './pages/VolquetasForm/VolquetasPage.jsx';
import { VolquetasFormPage } from './pages/VolquetasForm/VolquetasFormPage.jsx';
import { UnauthorizedPage } from './pages/UnauthorizedPage/UnauthorizedPage.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBarMain />
                <main>
                    {/* <Layout> */}
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        {/* <Route path="/lock-unlock" element={<LockUnlockPage />} /> */}
                        <Route
                            path="/formTractomulas"
                            element={<FormularioRegistroTractomulas />}
                        />
                        <Route
                            path="/formVolquetas"
                            element={<FormularioRegistroVolquetas />}
                        />
                        <Route
                            path="/formTanqueos"
                            element={<FormularioRegistroTanqueo />}
                        />
                        <Route
                            path="/tractomulaspdf"
                            element={<ExcellTractomulas />}
                        />
                        <Route
                            path="/tanqueospdf"
                            element={<ExcellTanqueos />}
                        />
                        <Route
                            path="/volquetaspdf"
                            element={<ExcellVolquetas />}
                        />
                        <Route
                            path="/usuarios/:usuario"
                            element={<UserProfileDetail />}
                        />

                        {/* <Route
            path="/*"
            element={
              <ProtectedRoute>
                <ProtectedRoutes />
              </ProtectedRoute>
            }
          > */}
                        <Route
                            path="employees"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <EmployeesPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="employees/employee/:_id"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <EmployeesDetailsCard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="employees/add"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <EmployeesFormAddPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="employees/bydni"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <EmployeeByDniPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="employees/bydni/:cedula"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <EmployeesDetailsCard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="employees/employee/edit"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <UpdateEmployeeByDni />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="users"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <UsersPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="users/add"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <UsersFormAddPage />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="users/admin/lock-unlock"
                            element={
                                <ProtectedRoute allowed={['Admin', 'Owner']}>
                                    <UsersFormLockUnlockPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/volquetas" element={<VolquetasPage />} />
                        <Route
                            path="/volquetas/planilla/add"
                            element={
                                <ProtectedRoute
                                    allowed={['Admin', 'Owner', 'Empleado']}
                                >
                                    <VolquetasFormPage />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="/unauthorized"
                            element={<UnauthorizedPage />}
                        />

                        {/* </Route>     */}
                    </Routes>
                    {/* </Layout> */}
                </main>
            </BrowserRouter>
        </AuthProvider>
    );
}

// const ProtectedRoutes = () => {
//   return (
//     <Routes>
//       {/* <Route
//         path="/lock-unlock"
//         element={<LockUnlockPage />}
//       /> */}
//       <Route
//         path="/employees"
//         element={<EmployeesPage />}
//       />
//       <Route
//         path="/employees/employee/:id"
//         element={<EmployeesDetailsCard />}
//       />
//       <Route
//         path="/employees/add"
//         element={<EmployeesFormAddPage />}
//       />
//       <Route
//         path="/employees/bydni"
//         element={<EmployeeByDniPage />}
//       />
//       <Route
//         path="/employees/bydni/:cedula"
//         element={<EmployeesDetailsCard />}
//       />
//       <Route
//         path="/employees/employee/edit"
//         element={<UpdateEmployeeByDni />}
//       />
//       <Route path="/users" element={<UsersPage />} />
//       <Route
//         path="/users/add"
//         element={<UsersFormAddPage />}
//       />
//       <Route
//         path="/users/admin/lock-unlock"
//         element={<UsersFormLockUnlockPage />}
//       />
//     </Routes>
//   );
// };

export default App;
