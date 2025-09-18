export interface Talent {
  id: string;
  name: string;
  location: string;
  timezone: string;
  primarySkill: string;
  skills: string[];
  yearsExperience: number;
  availabilityHrsPerWeek: number;
  rateUsdPerHour: number;
  rating: number;
  verified: boolean;
  lastActive: string;
  bio: string;
  tags: string[];
}