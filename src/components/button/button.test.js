import { render, screen } from '@testing-library/react';
import Button from './buttons';

describe('Button component', () => {
    it('renders primary button', () => {
        render(<Button variant="primary">Primary Button</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass('btn btn-primary');
        expect(buttonElement).not.toHaveAttribute('disabled');
    });

    it('renders secondary button', () => {
        render(<Button variant="secondary">Secondary Button</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass('btn btn-secondary');
        expect(buttonElement).not.toHaveAttribute('disabled');
    });

    it('renders disabled button', () => {
        render(<Button disabled>Disabled Button</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveAttribute('disabled');
    });
});