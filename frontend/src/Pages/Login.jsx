import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-5 relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:50px_50px] animate-float"></div>
      </div>

      {/* Professional card with refined styling */}
      <div className="bg-white rounded-2xl p-10 w-full max-w-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 animate-slide-up border border-gray-100">
        {/* Logo/Brand Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Sign in to continue to TechLens
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div
              className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg text-red-800 text-sm animate-shake"
              role="alert"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 mt-0.5"
              >
                <path
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 6V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 14H10.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-colors"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.66667L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66667M4.16667 15H15.8333C16.7538 15 17.5 14.2538 17.5 13.3333V6.66667C17.5 5.74619 16.7538 5 15.8333 5H4.16667C3.24619 5 2.5 5.74619 2.5 6.66667V13.3333C2.5 14.2538 3.24619 15 4.16667 15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full pl-11 pr-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-colors"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83337 9.16667V5.83333C5.83337 4.72826 6.27236 3.66846 7.05376 2.88706C7.83516 2.10565 8.89496 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V9.16667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="w-full pl-11 pr-11 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 disabled:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-gray-400 text-sm"
              />
              <button
                type="button"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:bg-gray-100"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 2.5L17.5 17.5M8.15833 8.15833C7.84125 8.47541 7.66667 8.90841 7.66667 9.375C7.66667 10.3084 8.41667 11.0583 9.35 11.0583C9.81659 11.0583 10.2496 10.8838 10.5667 10.5667M8.15833 8.15833L10.5667 10.5667M8.15833 8.15833L5.83333 5.83333M10.5667 10.5667L12.975 12.975M12.975 12.975L15.3833 15.3833M12.975 12.975C12.0917 13.5167 11.0667 13.8917 10 14.0583M5.83333 5.83333C4.74708 6.71958 3.88833 7.85833 3.33333 9.16667C4.44167 11.675 6.66667 13.3333 10 13.3333C10.7083 13.3333 11.3917 13.2333 12.0417 13.05M5.83333 5.83333L3.425 3.425M15.3833 15.3833L17.7917 17.7917M17.7917 17.7917C16.6083 18.6083 15.25 19.1667 13.75 19.4417M3.425 3.425C1.91667 4.20833 0.833333 5.58333 0.416667 7.29167"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.33333C6.66667 3.33333 4.44167 4.99167 3.33333 7.5C4.44167 10.0083 6.66667 11.6667 10 11.6667C13.3333 11.6667 15.5583 10.0083 16.6667 7.5C15.5583 4.99167 13.3333 3.33333 10 3.33333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 9.58333C11.1506 9.58333 12.0833 8.65059 12.0833 7.5C12.0833 6.34941 11.1506 5.41667 10 5.41667C8.84941 5.41667 7.91667 6.34941 7.91667 7.5C7.91667 8.65059 8.84941 9.58333 10 9.58333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm pt-1">
            <label className="flex items-center gap-2.5 text-gray-600 cursor-pointer select-none group">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-600 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
              />
              <span className="group-hover:text-gray-700 transition-colors">Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 transition-all duration-200 flex items-center justify-center gap-2 mt-6 text-sm"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="32"
                    strokeDashoffset="32"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      dur="2s"
                      values="0 32;16 16;0 32;0 32"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="2s"
                      values="0;-16;-32;-32"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
      </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
