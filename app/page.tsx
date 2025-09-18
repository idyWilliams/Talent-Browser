import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Talent Browser</h1>
      <Link href="/talents" className="text-blue-500 hover:underline">
        Browse Talents
      </Link>
    </div>
  );
}