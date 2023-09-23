import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We also care about we eat"
    description="We understand how hard it can be to find a dish that fits our goals and needs, and we don't all have time to read nutrition facts and ingredient lists. That's why we created Fork, so that you can spend less time researching, and more time eating.
    As of 2023, over 75% of college students don't know what they are putting in their bodies. Over 50% of the foods served at dining halls across the nation contain processed carbs, artificial ingredients, or unhealthy fat. It is an important time than ever to eat the right foods, and we just made it easier."
  >
    <VerticalFeatureRow
      title="This app is meant for everyone"
      description="No matter what your diet plan, health goals, or dietary restrictions are, Fork has you covered. We have made sure to include all major plans so that you can find the next dish for you."
      image="/assets/screenshots/screenshot1.png"
      imageAlt="Screen 1"
    />
    <VerticalFeatureRow
      title="Finding the ✨Perfect Dish✨"
      description="After creating your profile, it's eating time. Whenever you're ready to dig in to your next meal, just open up the app. You will be greeted by restaurants near you that fit your health goals and dietary needs. We even tell you why we recommend it, so you can be sure it is right for you."
      image="/assets/screenshots/screenshot2.png"
      imageAlt="Screen 2"
      reverse
    />
    <VerticalFeatureRow
      title="How We Guarantee you the Perfect Dish"
      description="By harnessing the power of AI, we are able to take into account the ingredients and nutritional facts of all dishes, and determine which fit your health goals, diet plan, dietary restrictions, and macronutrient goals."
      image="/assets/screenshots/screenshot3.png"
      imageAlt="Screen 3"
    />
  </Section>
);

export { VerticalFeatures };
