'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAdminStore } from '@/lib/adminStore';

export default function PromoBanner() {
  const [mounted, setMounted] = useState(false);
  const { promoBanner } = useAdminStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !promoBanner.enabled) {
    return null;
  }

  const getAnimationStyle = () => {
    const durations = {
      scroll: { slow: '20s', normal: '12s', fast: '6s' },
      blink: { slow: '2s', normal: '1s', fast: '0.5s' },
      pulse: { slow: '3s', normal: '2s', fast: '1s' },
      bounce: { slow: '2s', normal: '1s', fast: '0.5s' },
    };

    if (promoBanner.animation === 'none') return {};

    const duration = durations[promoBanner.animation]?.[promoBanner.speed] || '1s';

    switch (promoBanner.animation) {
      case 'scroll':
        return {
          animation: `marquee ${duration} linear infinite`,
        };
      case 'blink':
        return {
          animation: `blink ${duration} ease-in-out infinite`,
        };
      case 'pulse':
        return {
          animation: `pulse ${duration} ease-in-out infinite`,
        };
      case 'bounce':
        return {
          animation: `bounce ${duration} ease-in-out infinite`,
        };
      default:
        return {};
    }
  };

  const content = (
    <span className="inline-flex items-center gap-2" style={getAnimationStyle()}>
      <span>{promoBanner.message}</span>
      {promoBanner.linkText && (
        <span className="underline font-semibold ml-1">{promoBanner.linkText}</span>
      )}
    </span>
  );

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
      <div
        className="py-2 px-4 text-center text-sm font-medium overflow-hidden whitespace-nowrap"
        style={{
          backgroundColor: promoBanner.backgroundColor,
          color: promoBanner.textColor,
        }}
      >
        {promoBanner.linkUrl ? (
          <Link href={promoBanner.linkUrl} className="hover:opacity-80 transition-opacity">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </>
  );
}
