import BannerContainer from "./BannerContainer";
import PreferencesBanner from "./PreferencesBaner";
import SearchBanner from "./SearchBanner";

const TemplateSearch = (args) => <SearchBanner {...args} />;
const TemplatePreferences = (args) => <PreferencesBanner {...args} />;

export const BannerSearch = TemplateSearch.bind({});
BannerSearch.args = {
  heading: "Search recipes",
  buttonText: "Search",
  paragraph: "Find recipes by ingredients or keywords",
  size: "sm",
  backgroundColor: "primary.200",
  margin: "150px",
};

export const BannerPreferences = TemplatePreferences.bind({});
BannerPreferences.args = {
  heading: "Set your preferences",
  paragraph: "Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum ",
  buttonText: "Set preferences",
};

export default {
  component: BannerContainer,
  title: "Molecules/Banner",
};
