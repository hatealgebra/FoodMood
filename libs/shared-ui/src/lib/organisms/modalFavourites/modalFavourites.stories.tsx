import { Meta, StoryFn as Story } from '@storybook/react';
import ModalFavourites, { ModalFavouritesProps } from './ModalFavourites';
import { expect, userEvent, waitFor, within } from '@storybook/test';

const Template: Story<ModalFavouritesProps> = (args) => (
  <ModalFavourites {...args} />
);

const ModalFavouritesStory = Template.bind({});
ModalFavouritesStory.args = {
  isOpen: true,
};
ModalFavouritesStory.play = async ({ canvasElement }) => {
  const modal = within(canvasElement).getByRole('dialog');
  const recipe = within(modal).getByRole('button', { name: /recipe/i });
  userEvent.click(recipe);
  await waitFor(() => expect(modal).not.toBeInTheDocument());
};

export default {
  component: ModalFavourites,
  title: 'Organisms/Modal Favourites',
} as Meta<typeof ModalFavourites>;
