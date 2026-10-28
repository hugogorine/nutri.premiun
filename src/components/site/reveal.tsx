import AnimatedContent, { type AnimatedContentProps } from '@/components/AnimatedContent'

/** Entrada única do site: Animated Content (React Bits) com movimento curto e calmo. */
export function Reveal({ distance = 28, duration = 0.9, threshold = 0.12, ease = 'power3.out', ...props }: AnimatedContentProps) {
  return <AnimatedContent distance={distance} duration={duration} threshold={threshold} ease={ease} {...props} />
}
