export interface SeniorityLevel{
  level: string;
  isSelectedByDefault: boolean;
}

export const seniorityLevels: SeniorityLevel[]  = [
  {
    level: 'Junior',
    isSelectedByDefault: false
  },
  {
    level: 'Mid level',
    isSelectedByDefault: true
  },
  {
    level: 'Senior',
    isSelectedByDefault: false
  }
]
