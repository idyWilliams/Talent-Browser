
'use client';

import { useState, useEffect } from 'react';
import { Talent } from '@/types/talent';
import ApplyForm from './ApplyForm';

export default function TalentBrowser() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);

  useEffect(() => {
    fetch('/api/talents')
      .then((res) => res.json())
      .then(setTalents);
  }, []);

  if (selectedTalent) {
    return <ApplyForm talent={selectedTalent} onBack={() => setSelectedTalent(null)} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {talents.map((talent) => (
        <div key={talent.id} className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold">{talent.name}</h2>
          <p>{talent.skills.join(', ')}</p>
          <button
            onClick={() => setSelectedTalent(talent)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}
