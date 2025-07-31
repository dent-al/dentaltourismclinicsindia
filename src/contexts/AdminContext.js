import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if admin is already logged in (from localStorage)
  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminAuth');
    if (storedAdmin) {
      try {
        const adminData = JSON.parse(storedAdmin);
        if (adminData.expiry > Date.now()) {
          setIsAdminAuthenticated(true);
          setAdminUser(adminData.user);
        } else {
          localStorage.removeItem('adminAuth');
        }
      } catch (error) {
        localStorage.removeItem('adminAuth');
      }
    }
    setLoading(false);
  }, []);

  // Admin login function
  const adminLogin = async (username, password) => {
    try {
      // In production, this should be an API call to your backend
      // For now, using hardcoded credentials
      const validCredentials = [
        { username: 'admin', password: 'Now You See me', role: 'super_admin' },
        { username: 'manager', password: 'Now You See me', role: 'manager' },
        { username: 'analytics', password: 'Now You See me', role: 'analytics_viewer' }
      ];

      const user = validCredentials.find(
        cred => cred.username === username && cred.password === password
      );

      if (user) {
        const adminData = {
          user: {
            username: user.username,
            role: user.role,
            loginTime: new Date().toISOString()
          },
          expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        };

        localStorage.setItem('adminAuth', JSON.stringify(adminData));
        setIsAdminAuthenticated(true);
        setAdminUser(adminData.user);
        return { success: true, user: adminData.user };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  // Admin logout function
  const adminLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAdminAuthenticated(false);
    setAdminUser(null);
  };

  // Check if user has specific permission
  const hasPermission = (permission) => {
    if (!adminUser) return false;
    
    const permissions = {
      super_admin: ['view_analytics', 'export_data', 'manage_users', 'system_settings'],
      manager: ['view_analytics', 'export_data'],
      analytics_viewer: ['view_analytics']
    };

    return permissions[adminUser.role]?.includes(permission) || false;
  };

  const value = {
    isAdminAuthenticated,
    adminUser,
    adminLogin,
    adminLogout,
    hasPermission,
    loading
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
