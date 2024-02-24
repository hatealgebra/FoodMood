import { StoryFn as Story } from '@storybook/react';
import BannerContainer from './BannerContainer';
import PreferencesBanner from './PreferencesBanner';
import SearchBanner, { SearchBannerProps } from './SearchBanner';

const TemplateSearch: Story<SearchBannerProps> = (args) => (
  <SearchBanner {...args} />
);
const TemplatePreferences = (args) => <PreferencesBanner {...args} />;

export const BannerSearch = TemplateSearch.bind({});
BannerSearch.args = {
  heading: 'Search recipes',
  buttonText: 'Search',
  paragraph: 'Find recipes by ingredients or keywords',
  size: 'sm',
  backgroundColor: 'primary.200',
  margin: '150px',
};

export const BannerPreferences = TemplatePreferences.bind({});
BannerPreferences.args = {
  heading: 'Set your preferences',
  paragraph: 'Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum ',
  buttonText: 'Set preferences',
};

export default {
  component: BannerContainer,
  title: 'Molecules/Banner',
};
