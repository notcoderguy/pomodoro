import { useState, useEffect, useCallback } from 'react';
import { Button } from '~/components/ui/button';
import { Github } from 'lucide-react';
import { useTheme } from '~/lib/theme-provider';
import { ThemeChanger } from '~/lib/theme-changer';

type TimerMode = 'work' | 'break';

export default function Pomodoro() {
  const { theme, setTheme } = useTheme();
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');
  
  const resetTimer = useCallback(() => {
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
    setIsActive(false);
  }, [mode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      setMode(prev => prev === 'work' ? 'break' : 'work');
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <ThemeChanger theme={theme} setTheme={setTheme} />
        <Button
          variant="ghost"
          size="icon"
          asChild
          aria-label="GitHub repository"
        >
          <a href="https://github.com/notcoderguy/pomodoro" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <h1 className="text-4xl font-bold">
        {mode === 'work' ? 'Work Time' : 'Break Time'}
      </h1>
      <div className="text-6xl font-mono">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
      <div className="flex gap-2">
        <Button onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button variant="outline" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
}
