import ProtectedRoute from '../_components/ProtectedRoute';
import MainDashboard from '../_components/MainDashboard';
// import DashboardHeader from '../_components/DashboardHeader'

const Dashboard = () => {
  
  // The rest of your dashboard code here...

  return (
    <ProtectedRoute>
        {/* <DashboardHeader /> */}
        <MainDashboard />
    </ProtectedRoute>
  );
};

export default Dashboard;
