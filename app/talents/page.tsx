import TalentBrowser from "@/components/TalentBrowser";

export default function TalentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
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
