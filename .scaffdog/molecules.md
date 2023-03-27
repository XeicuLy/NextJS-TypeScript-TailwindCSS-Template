---
name: 'molecules'
root: './src/components/molecules/'
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
  title: "components/molecules/{{ inputs.name | pascal }}",
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
import { render } from '@testing-library/react'
import { {{ inputs.name | pascal }} } from '.'
describe('molecules/{{ inputs.name | pascal }}', () => {
  it('renders correctly', () => {
    const { container } = render(<{{ inputs.name | pascal }} />);
    expect(container).toMatchSnapshot();
  });
});
```
