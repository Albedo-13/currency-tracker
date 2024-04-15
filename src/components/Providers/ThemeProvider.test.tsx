import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from 'vitest';

import ThemeProvider, { ThemeContext } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('should toggle the theme when the toggleTheme function is called', async () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <button onClick={toggleTheme}>{theme ? 'Dark' : 'Light'}</button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    const rootElement = document.documentElement;
    expect(rootElement).toBeInTheDocument();
    expect(rootElement).toHaveAttribute('data-theme', 'dark');

    fireEvent.click(toggleButton);

    expect(rootElement).toHaveAttribute('data-theme', 'light');
  });

});
