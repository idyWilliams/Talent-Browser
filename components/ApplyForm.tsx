
'use client';

import { Talent } from '@/types/talent';

interface ApplyFormProps {
  talent: Talent;
  onBack: () => void;
}

export default function ApplyForm({ talent, onBack }: ApplyFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Applied for ${talent.name}`);
  };

  return (
    <div>
      <button onClick={onBack} className="text-blue-500 hover:underline mb-4">
        &larr; Back to Talents
      </button>
      <h1 className="text-2xl font-bold mb-4">Apply for {talent.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Your Name
          </label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Your Email
          </label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit Application
        </button>
      </form>
    </div>
  );
}
