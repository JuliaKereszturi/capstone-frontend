import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../button/buttons';
import WorkExperience from './WorkExperience';
// Mock your icons and other components if necessary


describe('ResumeUploadCard', () => {
  test('upload button triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Button variant="secondary" onClick={handleClick}>Upload Resume</Button>);
    fireEvent.click(screen.getByText('Upload Resume'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('WorkExperience Component', () => {

  // Test for "Add Work Experience" button interaction
  test('"Add Work Experience" button click logs to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<WorkExperience />);

    fireEvent.click(screen.getByText(/Add Work Experience/i));

    expect(consoleSpy).toHaveBeenCalledWith('Upload resume button clicked');
  });
});

// Cleanup mock to prevent memory leak
afterEach(() => {
  jest.clearAllMocks();
});