import React, { useState } from 'react';
import { Car, LogIn, ArrowRight, Check } from 'lucide-react';

export default function CarPlatform() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [loginType, setLoginType] = useState('gmail');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-blue-500/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Car className="w-8 h-8 text-orange-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            CarDeal
          </span>
        </div>
        <button
          onClick={() => setShowAuth(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold"
        >
          <LogIn className="w-4 h-4" />
          Get Started
        </button>
      </nav>

      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Buy & Sell Cars with
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Confidence</span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to CarDeal, India's trusted platform for buying and selling cars. Whether you're looking for your dream car or want to sell your old one at the right price, we've got you covered.
            </p>

            
            <div className="space-y-3">
              {['New & Old Cars Available', 'Fair Pricing Guaranteed', 'Simple Login with Gmail or Phone', 'Verified Sellers & Buyers'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAuth(true)}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

         
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-xl h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Car className="w-24 h-24 mx-auto text-orange-400 opacity-80" />
                <p className="text-xl font-semibold text-gray-200">Your Perfect Car Awaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="relative z-10 bg-blue-900/20 border-y border-blue-500/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Login with Gmail or phone number in seconds' },
              { step: '02', title: 'Browse or List', desc: 'Find your car or list yours with details' },
              { step: '03', title: 'Connect & Deal', desc: 'Chat with buyers/sellers and close the deal' }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-5xl font-black text-orange-500/30 group-hover:text-orange-500/60 transition-colors mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {showAuth && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 w-full max-w-md border border-blue-500/30 max-h-[90vh] overflow-y-auto">
        
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-2">Welcome to CarDeal</h2>
            <p className="text-gray-300 mb-8">Join India's fastest growing car marketplace</p>

           
            <div className="flex gap-4 mb-8 bg-blue-900/30 p-1 rounded-lg">
              <button
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                  authMode === 'login' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`flex-1 py-2 rounded-md font-semibold transition-all ${
                  authMode === 'signup' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            
            <div className="space-y-4 mb-8">
              <button
                onClick={() => setLoginType('gmail')}
                className={`w-full py-3 rounded-lg font-semibold transition-all border-2 flex items-center justify-center gap-2 ${
                  loginType === 'gmail'
                    ? 'bg-blue-600 border-orange-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.745 12.27c0-.79-.3-1.54-.74-2.05H12v3.72h6.84c-.29 1.48-1.45 2.74-3.08 3.58v3.9h5.08c2.92-2.69 4.6-6.64 4.6-11.15z"/>
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-5.08-3.9c-1.08.72-2.45 1.16-3.85 1.16-2.96 0-5.47-1.93-6.38-4.53H1.07v4.02C3.02 22.3 7.3 24 12 24z"/>
                  <path d="M5.55 15.86c-.22-.72-.35-1.49-.35-2.36s.13-1.64.35-2.36V7.07H1.07C.43 8.55 0 10.22 0 12s.43 3.45 1.07 4.93l4.02-3.15.46-.02z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.92 1.46 15.24 0 12 0 7.3 0 3.02 1.7 1.07 4.93l4.02 3.15c.91-2.6 3.42-4.53 6.38-4.53z"/>
                </svg>
                Continue with Gmail
              </button>

              <button
                onClick={() => setLoginType('phone')}
                className={`w-full py-3 rounded-lg font-semibold transition-all border-2 flex items-center justify-center gap-2 ${
                  loginType === 'phone'
                    ? 'bg-blue-600 border-orange-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <span>📱</span>
                Continue with Phone
              </button>
            </div>

            
            {loginType === 'phone' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Country</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-blue-900/40 border border-blue-500/30 text-white focus:outline-none focus:border-orange-500">
                    <option>🇮🇳 India (+91)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your 10-digit number"
                    className="w-full px-4 py-2 rounded-lg bg-blue-900/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            )}

            {loginType === 'gmail' && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-blue-900/40 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            )}

           
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold transition-all">
              {authMode === 'login' ? 'Login' : 'Create Account'}
            </button>

            <p className="text-center text-sm text-gray-400 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
