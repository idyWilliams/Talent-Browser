import Link from "next/link";
import TalentBrowser from "@/components/TalentBrowser";

export default function TalentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          <div className="absolute top-6 left-6">
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 hidden sm:inline">
                Home
              </span>
            </Link>
          </div>
        </div>

        <div className="relative pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                💎 Premium Talent Network
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Browse Talents
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover exceptional professionals ready to bring your vision to
                life
              </p>
            </div>
            <TalentBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}
