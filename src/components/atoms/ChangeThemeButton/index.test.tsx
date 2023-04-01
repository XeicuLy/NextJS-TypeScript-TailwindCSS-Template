import { render } from '@testing-library/react';
import { ChangeThemeButton } from '.';

describe('atoms/ChengeThemeButton', () => {
  it('renders correctly', () => {
    const { container } = render(<ChangeThemeButton />);
    expect(container).toMatchSnapshot();
  });
});
