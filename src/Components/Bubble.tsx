import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';

interface Props {
  link?: string,
  title?: string,
}

interface BubbleState extends Props {
  id: string,
  x: number,
  y: number,
  vx: number,
  vy: number,
  paused: boolean,
  tone: 'pink' | 'blue' | 'purple' | 'green',
}

interface ProjectBubblesProps {
  bubbles: Props[],
}

const bubbleSize = 118;

export default function Bubble(props: Props) {
  const { link, title } = props;

  return (
    <a className="bubble-link" href={link} target='_blank' rel='noopener noreferrer'>
      <motion.div
        className="bubble"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Typography>{title}</Typography>
      </motion.div>
    </a>
  )
}

export function ProjectBubbles({ bubbles }: ProjectBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredId = useRef<string | null>(null);
  const frame = useRef<number>();
  const lastTime = useRef<number>();
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  const initialBubbles = useMemo(
    () => bubbles.map((bubble, index) => ({
      ...bubble,
      id: bubble.title ?? `${index}`,
      x: 26 + index * 132,
      y: 30 + (index % 2) * 64,
      vx: index % 2 === 0 ? 56 : -48,
      vy: index % 3 === 0 ? 44 : -52,
      tone: ['pink', 'blue', 'purple', 'green'][index % 4] as BubbleState['tone'],
      paused: false,
    })),
    [bubbles],
  );

  const [movingBubbles, setMovingBubbles] = useState<BubbleState[]>(initialBubbles);

  useEffect(() => {
    setMovingBubbles(initialBubbles);
  }, [initialBubbles]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setBounds({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!bounds.width || !bounds.height) return;

    const radius = bubbleSize / 2;
    const maxX = bounds.width - bubbleSize;
    const maxY = bounds.height - bubbleSize;

    const tick = (time: number) => {
      const delta = Math.min((time - (lastTime.current ?? time)) / 1000, 0.032);
      lastTime.current = time;

      setMovingBubbles((current) => {
        const next = current.map((bubble) => {
          if (bubble.paused) return bubble;

          let x = bubble.x + bubble.vx * delta;
          let y = bubble.y + bubble.vy * delta;
          let vx = bubble.vx;
          let vy = bubble.vy;

          if (x <= 0 || x >= maxX) {
            x = Math.max(0, Math.min(maxX, x));
            vx *= -1;
          }

          if (y <= 0 || y >= maxY) {
            y = Math.max(0, Math.min(maxY, y));
            vy *= -1;
          }

          return { ...bubble, x, y, vx, vy };
        });

        for (let i = 0; i < next.length; i += 1) {
          for (let j = i + 1; j < next.length; j += 1) {
            const first = next[i];
            const second = next[j];
            const dx = (second.x + radius) - (first.x + radius);
            const dy = (second.y + radius) - (first.y + radius);
            const distance = Math.hypot(dx, dy);

            if (!distance || distance >= bubbleSize) continue;

            const overlap = (bubbleSize - distance) / 2;
            const nx = dx / distance;
            const ny = dy / distance;

            if (!first.paused) {
              first.x = Math.max(0, Math.min(maxX, first.x - nx * overlap));
              first.y = Math.max(0, Math.min(maxY, first.y - ny * overlap));
              first.vx = -first.vx;
              first.vy = -first.vy;
            }

            if (!second.paused) {
              second.x = Math.max(0, Math.min(maxX, second.x + nx * overlap));
              second.y = Math.max(0, Math.min(maxY, second.y + ny * overlap));
              second.vx = -second.vx;
              second.vy = -second.vy;
            }
          }
        }

        return next;
      });

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      lastTime.current = undefined;
    };
  }, [bounds]);

  function setPaused(id: string, paused: boolean) {
    hoveredId.current = paused ? id : null;
    setMovingBubbles((current) => current.map((bubble) => (
      bubble.id === id ? { ...bubble, paused } : bubble
    )));
  }

  return (
    <div className="bubble-pond" ref={containerRef}>
      {movingBubbles.map((bubble) => (
        <a
          className="bubble-link moving-bubble-link"
          href={bubble.link}
          key={bubble.id}
          onMouseEnter={() => setPaused(bubble.id, true)}
          onMouseLeave={() => setPaused(bubble.id, false)}
          onFocus={() => setPaused(bubble.id, true)}
          onBlur={() => setPaused(bubble.id, false)}
          rel='noopener noreferrer'
          style={{ transform: `translate3d(${bubble.x}px, ${bubble.y}px, 0)` }}
          target='_blank'
        >
          <motion.div
            className={`bubble bubble--${bubble.tone} moving-bubble${hoveredId.current === bubble.id ? ' is-paused' : ''}`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography className="bubble-title">{bubble.title}</Typography>
          </motion.div>
        </a>
      ))}
    </div>
  );
}
