import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ShieldCheckIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { mockAdminUsers } from '../../data/mockData';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setCurrentAdmin } = useApp();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find admin by email (mock authentication)
    const admin = mockAdminUsers.find(a => a.email.toLowerCase() === email.toLowerCase());
    
    if (admin && password === 'admin123') {
      setCurrentAdmin(admin);
      navigate('/admin');
    } else {
      setError('Invalid admin credentials. Try: admin@hexaware.com / admin123');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-4 shadow-lg">
            <ShieldCheckIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-blue-200">Hexaware Learning Administration</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Admin Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-white/60"
                placeholder="Enter admin email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-white/60"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Access Admin Portal'
              )}
            </button>
          </form>

          {/* Demo Admin */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-blue-200 mb-4 text-center">Demo Admin Account:</p>
            <button
              onClick={() => {
                setEmail('admin@hexaware.com');
                setPassword('admin123');
              }}
              className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/20"
            >
              <div className="text-sm font-medium text-white">System Administrator</div>
              <div className="text-xs text-blue-200">admin@hexaware.com</div>
            </button>
          </div>
        </div>

        {/* Back to User Login */}
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/')}
            className="text-sm text-blue-200 hover:text-white font-medium transition-colors"
          >
            ← Back to User Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;