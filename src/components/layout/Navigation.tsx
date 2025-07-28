import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon,
  BookOpenIcon,
  BeakerIcon,
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useApp } from '../../context/AppContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { 
    currentUser, 
    currentAdmin, 
    setCurrentUser, 
    setCurrentAdmin, 
    isAdminAuthenticated,
    sidebarCollapsed,
    setSidebarCollapsed
  } = useApp();

  const learnerNavigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Learning Path', href: '/learning', icon: BookOpenIcon },
    { name: 'Assessments', href: '/assessments', icon: BeakerIcon },
    { name: 'AI Assistant', href: '/ai-assistant', icon: SparklesIcon },
  ];

  const adminNavigation = [
    { name: 'Overview', href: '/admin', icon: ChartBarIcon },
    { name: 'Users', href: '/admin/users', icon: UserGroupIcon },
    { name: 'Agents', href: '/admin/agents', icon: CogIcon },
    { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  ];

  const navigation = isAdminAuthenticated ? adminNavigation : learnerNavigation;

  const handleLogout = () => {
    if (isAdminAuthenticated) {
      setCurrentAdmin(null);
    } else {
      setCurrentUser(null);
    }
  };

  return (
    <div className={`bg-white shadow-sm border-r border-gray-200 min-h-screen transition-all duration-300 ease-in-out ${
      sidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className={`p-6 ${sidebarCollapsed ? 'px-3' : ''}`}>
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">Hexaware Learning</h1>
                <p className="text-xs text-gray-500">
                  {isAdminAuthenticated ? 'Admin Portal' : 'Skill Development'}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      {!isAdminAuthenticated && currentUser && !sidebarCollapsed && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100">
            <h3 className="font-medium text-gray-900">{currentUser.name}</h3>
            <p className="text-sm text-gray-600">{currentUser.role}</p>
            <p className="text-xs text-gray-500 mt-1">TSR: {currentUser.tsrRole}</p>
            <div className="mt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{currentUser.completionRate}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${currentUser.completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Profile Section */}
      {isAdminAuthenticated && currentAdmin && !sidebarCollapsed && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
            <h3 className="font-medium text-gray-900">{currentAdmin.name}</h3>
            <p className="text-sm text-gray-600">{currentAdmin.role}</p>
            <p className="text-xs text-gray-500 mt-1">{currentAdmin.department}</p>
          </div>
        </div>
      )}

      {/* Collapsed User Avatar */}
      {sidebarCollapsed && (currentUser || currentAdmin) && (
        <div className="px-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {(currentUser?.name || currentAdmin?.name || '').charAt(0)}
            </span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-r-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title={sidebarCollapsed ? item.name : ''}
            >
              <item.icon className={`h-5 w-5 ${sidebarCollapsed ? '' : 'mr-3'} ${
                isActive ? 'text-orange-600' : ''
              } group-hover:scale-110 transition-transform`} />
              {!sidebarCollapsed && item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className={`absolute bottom-4 ${sidebarCollapsed ? 'left-3 right-3' : 'left-4 right-4'}`}>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group ${
            sidebarCollapsed ? 'justify-center' : ''
          }`}
          title={sidebarCollapsed ? 'Sign Out' : ''}
        >
          <ArrowRightOnRectangleIcon className={`h-5 w-5 ${sidebarCollapsed ? '' : 'mr-3'} group-hover:scale-110 transition-transform`} />
          {!sidebarCollapsed && 'Sign Out'}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
            <BookOpenIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">LearningAI</h1>
            <p className="text-xs text-gray-500">Skill Gap Analysis</p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <button
          onClick={toggleAdminMode}
          className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            isAdmin
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          {isAdmin ? 'Switch to Learner View' : 'Switch to Admin View'}
        </button>
      </div>

      {!isAdmin && currentUser && (
        <div className="px-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">{currentUser.name}</h3>
            <p className="text-sm text-gray-600">{currentUser.role}</p>
            <p className="text-xs text-gray-500 mt-1">TSR: {currentUser.tsrRole}</p>
            <div className="mt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{currentUser.completionRate}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${currentUser.completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navigation;