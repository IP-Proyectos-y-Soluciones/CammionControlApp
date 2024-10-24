import {
//  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import FormularioRegistroTractomulas from './pages/ServicesForm/FormularioRegistroTractomulas.jsx';
import { HomePageEmpleado, LoginPage, EmployeesPage } from './pages';
import { ProtectedRoute } from './pages/ProtectedRoutes/ProtectedRoutes.jsx';
import { NavBarMain } from './components/Common/NavBarMain.jsx';
import FormularioRegistroVolquetas from './pages/ServicesForm/FormularioRegistroVolquetas.jsx';
import FormularioRegistroTanqueo from './pages/ServicesForm/FormularioRegistroTanqueo.jsx';
//import Layout from './components/Common/Layout.jsx';
//import Layout from './components/Common/Layout.jsx';
import ExcellTractomulas from './components/ExcellVistaPrevia/ExcellTractomulas';
import ExcellTanqueos from './components/ExcellVistaPrevia/ExcellTanqueos';
import ExcellVolquetas from './components/ExcellVistaPrevia/ExcellVolquetas';
//import { AuthProvider } from './context/AuthContext';
//import { AuthProvider } from './context/AuthContext';
import { EmployeesDetailsCard } from './components/Employees/EmployeesDetailsCard.jsx';
import { EmployeesFormAddPage } from './pages/Employees/EmployeesFormAddPage';
import { EmployeeByDniPage } from './pages/Employees/EmployeesByDniPage.jsx';
import { UpdateEmployeeByDni } from './pages/Employees/UpdateEmployeeFormByDniPage.jsx';
import { UsersPage } from './pages/Users/UsersPage.jsx';
import { UsersFormAddPage } from './pages/Users/UsersFormAddPage.jsx';
import { UsersFormDisablePage, UsersFormUnlockPage } from './pages/Users/UsersFormDisableUnlockPage.jsx';
import { UserProfileDetail } from './pages/UserDetail/UserProfileDetail.jsx';
import { VolquetasFormPage } from './pages/VolquetasForm/VolquetasFormPage.jsx';
import { UnauthorizedPage } from './pages/UnauthorizedPage/UnauthorizedPage.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import { GeneralAccessPage } from './pages/GeneralAccess/GeneralAccessPage.jsx';
import { RefuelingFormPage } from './pages/Refueling/RefuelingFormPage.jsx';
import './styles/global.css';
import './index.css';
import { useEffect, useState } from 'react';
import { VehiclesPage } from './pages/Vehicles/VehiclesPage.jsx';
import { VehicleFormAddPage } from './pages/Vehicles/VehicleFormAddPage.jsx';
import { AssignDriverToVehicleFormPage } from './pages/Vehicles/AssignDriverToVehicleForm.jsx';
import { DriverLicenseFormAddPage } from './pages/Licenses/DriverLicenseFormAddPage.jsx';
import { VehicleDocumentRegisterPage } from './pages/Documents/VehicleDocumentRegPage.jsx';
import { GeneralAccessPageAdmin } from './pages/GeneralAccess/GeneralAccessPageAdmin.jsx';
import Footer  from './components/Common/Footer.jsx';
import { UsersSearchPage } from './pages/Users/UsersSearchPage.jsx';
import { InvoiceSearchFormPage } from './pages/Invoices/InvoiceSearchFormPage.jsx';
import { InvoiceRefuelingImageView } from './components/Images/InvoiceRefuelingImageView.jsx';
import { InvoiceRefuelingList } from './pages/Invoices/InvoiceRefuelingList.jsx';
import { InvoiceVolquetasList } from './pages/Invoices/InvoiceVolquetasList.jsx';

function App() {
  const location = useLocation();
  const[isNavBarVisible, setIsNavBarVisible] = useState(true);

  useEffect(()=>{
    const handleResize = ()=>{
      const isSmallScreen = window.innerWidth <= 768;
      setIsNavBarVisible(!isSmallScreen || location.pathname !== '/login');
    }

    handleResize();      //inicializa el estado

    window.addEventListener('resize', handleResize);  //añade el listener para el evento change

    return ()=>{                                           //limpia el listener al desmontar el componente
      window.removeEventListener('resize', handleResize);  
    }
  }, [location.pathname]);

  return (
    <>
    {/* <AuthProvider>
    <BrowserRouter>    */}
      {/* {location.pathname !=='/login' && ( */}
      {isNavBarVisible && ( 
         <nav className='fixed top-0 left-0 w-full z-50 bg-transparent'>
        <NavBarMain/>
        </nav>  
        )}     
      <main className={location.pathname === '/' || location.pathname === '/login' ? 'pt-0 pb-16': 'pt-28 pb-16'}>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePageEmpleado />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/formTractomulas' element={<FormularioRegistroTractomulas />} />
          <Route path='/formVolquetas' element={<FormularioRegistroVolquetas />} />
          <Route path='/formTanqueos' element={<FormularioRegistroTanqueo />} />
          <Route path='/tractomulaspdf' element={<ExcellTractomulas />} />
          <Route path='/tanqueospdf' element={<ExcellTanqueos />} />
          <Route path='/volquetaspdf' element={<ExcellVolquetas />} />
          <Route path='/usuarios/:usuario' element={<UserProfileDetail />} />

           <Route
                path="/employees"
                element={
                  <ProtectedRoute allowed={['Admin', 'Owner']}>
                    <EmployeesPage />
                  </ProtectedRoute>
              }
              />
              <Route 
              path='/general_access_admin'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <GeneralAccessPageAdmin />
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
              <Route path="users" 
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
              path='/users/user/byuser'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <UsersSearchPage />
                </ProtectedRoute>
              }
              />

              <Route
              path='/users/admin/disable-user'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <UsersFormDisablePage />
                </ProtectedRoute>
              }
              />

              <Route
                path="users/admin/unlock-user"
                element={
                  <ProtectedRoute allowed={['Admin', 'Owner']}>
                    <UsersFormUnlockPage />
                  </ProtectedRoute>
              }
              />
              
              <Route
              path='/vehicles'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <VehiclesPage />
                </ProtectedRoute>
              }
              />
              <Route 
              path='/vehicles/planilla/add'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <VehicleFormAddPage />
                </ProtectedRoute>
              }
              />
              <Route
              path='/vehicles/vehassign'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <AssignDriverToVehicleFormPage />
                </ProtectedRoute>
              } 
              />
              <Route 
              path='/driverlicenses/add'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <DriverLicenseFormAddPage />
                </ProtectedRoute>
              }
              />
              <Route
              path='/documents/add'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <VehicleDocumentRegisterPage />
                </ProtectedRoute>
              }
              />

              <Route
              path='/search/refueling'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                 <InvoiceSearchFormPage />
                </ProtectedRoute>
              }
              />

              <Route 
              path='/imgrefueling'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <InvoiceRefuelingList />
                </ProtectedRoute>
              }
              />
              <Route 
              path='/imgvolq'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <InvoiceVolquetasList />
                </ProtectedRoute>
              }
              />
              
              <Route 
              path='/imgrefueling-view'
              element={
                <ProtectedRoute allowed={['Admin', 'Owner']}>
                  <InvoiceRefuelingImageView />
                </ProtectedRoute>
              }
              />

              <Route
              path="/general_access"
              element={<GeneralAccessPage />}
              />

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
              path="/refueling/planilla/add"
              element={
                <ProtectedRoute
                allowed={['Admin', 'Owner', 'Empleado']}
                >
                  <RefuelingFormPage />
                </ProtectedRoute>
              }
              />

              <Route 
              path='/userdetail'
              element={
                <ProtectedRoute
                allowed={['Admin', 'Owner', 'Empleado']}
                >
                  <UserProfileDetail />
                </ProtectedRoute>
              }
              />
              
              <Route
                  path="/unauthorized"
                  element={<UnauthorizedPage />}
               />
        </Routes>
        {/* </Layout> */}
      </main>
      <Footer/>
      </>

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
