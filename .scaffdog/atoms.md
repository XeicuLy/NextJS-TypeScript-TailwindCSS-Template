---
name: 'atoms'
root: './src/components/atoms'
output: './'
ignore: ['**/*']
questions:
  name: 'Please enter component name.'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import { FC } from "react"
export const {{ inputs.name | pascal }}: FC = () => {
  return (
    <h1>{{ inputs.name | pascal }}</h1>
  )
}
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { {{ inputs.name | pascal }} } from '.';
const meta = {
  title: "components/atoms/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
  parameters: {},
  args: {}
} satisfies Meta<typeof {{ inputs.name | pascal }}>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    primary: true,
  }
}
```

# `{{ inputs.name | pascal }}/index.test.tsx`
```tsx
import { render, screen } from '@testing-library/react'
import { {{ inputs.name | pascal }} } from '.'
describe('atoms/{{ inputs.name | pascal }}', () => {
  it("renders", () => {
    render(<{{ inputs.name | pascal }} />)
    expect(screen.getByText('{{ inputs.name | pascal }}')).toBeInTheDocument()
  })
})
```