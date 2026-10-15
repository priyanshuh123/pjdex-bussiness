import { act, fireEvent, render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
// @ts-expect-error - migrated JSX module without types
import HeroImageSlider from '../site/components/HeroImageSlider.jsx';

afterEach(() => { cleanup(); vi.useRealTimers(); });

describe('Existing portrait slider behavior', () => {
  it('automatically advances after 4000 milliseconds, not earlier', () => {
    vi.useFakeTimers();
    render(<HeroImageSlider />);
    act(() => { vi.advanceTimersByTime(3999); });
    expect(screen.getByRole('tab', { name: 'Show Slide 1' }).getAttribute('aria-selected')).toBe('true');
    act(() => { vi.advanceTimersByTime(1); });
    expect(screen.getByRole('tab', { name: 'Show Slide 2' }).getAttribute('aria-selected')).toBe('true');
  });

  it('selects either existing portrait using pagination dots', () => {
    render(<HeroImageSlider />);
    fireEvent.click(screen.getByRole('tab', { name: 'Show Slide 2' }));
    expect(screen.getByRole('tab', { name: 'Show Slide 2' }).getAttribute('aria-selected')).toBe('true');
    fireEvent.click(screen.getByRole('tab', { name: 'Show Slide 1' }));
    expect(screen.getByRole('tab', { name: 'Show Slide 1' }).getAttribute('aria-selected')).toBe('true');
  });
});