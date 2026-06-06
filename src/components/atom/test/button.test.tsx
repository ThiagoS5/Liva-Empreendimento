import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../button'
import '@testing-library/jest-dom'

describe('Button component', () => {
  test('renders with children', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    expect(buttonElement).toBeInTheDocument()
  })

  describe('variants', () => {
    const variants = [
      {
        variant: 'default' as const,
        expectedClass: 'bg-primary text-primary-foreground',
      },
      {
        variant: 'primary' as const,
        expectedClass: 'border-2 border-black bg-transparent text-black',
      },
      { variant: 'filter' as const, expectedClass: 'bg-black text-white' },
      {
        variant: 'about' as const,
        expectedClass: 'border-2 border-white bg-transparent text-white',
      },
      { variant: 'send' as const, expectedClass: 'bg-send text-white' },
      {
        variant: 'outline' as const,
        expectedClass: 'border border-white bg-transparent text-white',
      },
      {
        variant: 'ghost' as const,
        expectedClass: 'hover:bg-accent hover:text-accent-foreground',
      },
      {
        variant: 'link' as const,
        expectedClass: 'text-primary underline-offset-4',
      },
    ]

    test.each(variants)(
      'applies the $variant variant styles',
      ({ variant, expectedClass }) => {
        render(<Button variant={variant}>{variant}</Button>)
        const buttonElement = screen.getByRole('button', { name: variant })
        expect(buttonElement).toHaveClass(expectedClass)
      },
    )
  })

  describe('sizes', () => {
    const sizes = [
      { size: 'default' as const, expectedClass: 'h-10 px-4 py-2' },
      { size: 'sm' as const, expectedClass: 'h-9 rounded-md px-3' },
      { size: 'lg' as const, expectedClass: 'h-11 rounded-md px-8' },
      { size: 'icon' as const, expectedClass: 'h-10 w-10' },
    ]

    test.each(sizes)(
      'applies the $size size styles',
      ({ size, expectedClass }) => {
        render(<Button size={size}>{size}</Button>)
        const buttonElement = screen.getByRole('button', { name: size })
        expect(buttonElement).toHaveClass(expectedClass)
      },
    )
  })

  test('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    await userEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when disabled prop is true', async () => {
    const handleClick = jest.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    )
    const buttonElement = screen.getByRole('button', { name: 'Disabled' })
    expect(buttonElement).toBeDisabled()
    await userEvent.click(buttonElement)
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('renders as a native button when asChild is omitted', () => {
    render(<Button>Native button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Native button' })

    expect(buttonElement.tagName).toBe('BUTTON')
  })

  test('renders as a native button when asChild is false', () => {
    render(<Button asChild={false}>Explicit native button</Button>)
    const buttonElement = screen.getByRole('button', {
      name: 'Explicit native button',
    })

    expect(buttonElement.tagName).toBe('BUTTON')
  })

  test('forwards styles and interactions when rendered as a child', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Button asChild className="custom-link" onClick={handleClick}>
        <a href="#test">Link action</a>
      </Button>,
    )
    const linkElement = screen.getByRole('link', { name: 'Link action' })

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '#test')
    expect(linkElement).toHaveClass('inline-flex')
    expect(linkElement).toHaveClass('custom-link')

    await user.click(linkElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
