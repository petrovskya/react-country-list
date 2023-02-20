import React from 'react';
import { BadgeLabel } from '../types';
import { Color } from '../ui/colors';

interface BadgeProps {
  label: BadgeLabel;
  color: Color;
  value: number;
}
export const Badge = ({ label, value, color }: BadgeProps) => {
  return (
      <span className={`badge bg-${color} p-3`}>
        {label}: {value}
      </span>
  );
};
