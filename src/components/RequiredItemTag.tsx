import {
  TreePine,
  Gem,
  Flower2,
  Droplets,
  Flame,
  Hammer,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RequiredItemTagProps {
  item: string;
  className?: string;
}

/**
 * Maps keywords in item names to appropriate icons.
 */
function getItemIcon(item: string): LucideIcon {
  const lower = item.toLowerCase();
  if (lower.includes('나무') || lower.includes('목재') || lower.includes('잔디'))
    return TreePine;
  if (lower.includes('돌') || lower.includes('바위') || lower.includes('광석'))
    return Gem;
  if (lower.includes('꽃') || lower.includes('식물') || lower.includes('화분'))
    return Flower2;
  if (lower.includes('물') || lower.includes('연못') || lower.includes('분수'))
    return Droplets;
  if (lower.includes('불') || lower.includes('화로') || lower.includes('용암'))
    return Flame;
  if (lower.includes('가구') || lower.includes('제작'))
    return Hammer;
  return Sparkles;
}

export function RequiredItemTag({ item, className }: RequiredItemTagProps) {
  const Icon = getItemIcon(item);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-secondary/70 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary',
        className,
      )}
    >
      <Icon className="size-3 shrink-0" />
      <span className="truncate">{item}</span>
    </span>
  );
}
