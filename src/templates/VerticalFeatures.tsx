import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import VideoPlayer from './Video';

const VerticalFeatures = () => (
  <Section
    title="We also care about we eat"
    description="We understand how hard it can be to find a dish that fits our goals and needs, and we don't all have time to read nutrition facts and ingredient lists. That's why we created Fork, so that you can spend less time researching, and more time eating.
    As of 2023, over 75% of college students don't know what they are putting in their bodies. Over 50% of the foods served at dining halls across the nation contain processed carbs, artificial ingredients, or unhealthy fat. It is an important time than ever to eat the right foods, and we just made it easier."
  >
    <VerticalFeatureRow
      title="This app is meant for everyone"
      description="No matter what your diet plan, health goals, or dietary restrictions are, Fork has you covered. We have made sure to include all major plans so that you can find the next dish for you."
      video={
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1);' }}
          width="500"
          height="1025"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0054IIPKH2yd9qMfuNsdqU%2FFork-App-(Copy)%3Fnode-id%3D3277-4056%26mode%3Ddesign%26t%3DVNdFGqjGGevN54Jk-1"
          // allowfullscreen
        ></iframe>
      }
      videoAlt="Fork Demo"
    />
    <VerticalFeatureRow
      title="This app is meant for everyone"
      description="No matter what your diet plan, health goals, or dietary restrictions are, Fork has you covered. We have made sure to include all major plans so that you can find the next dish for you."
      video={
        <VideoPlayer
          src="/assets/videos/Fork Demo for Website Part 1.mp4"
          type="video/mp4"
          playbackSpeed={0.6}
        />
      }
      videoAlt="Fork Demo"
      reverse
    />
    <VerticalFeatureRow
      title="Finding the ✨Perfect Dish✨"
      description="By harnessing the power of AI, we are able to analyze dishes from restaurants near you and determine which fit your health goals, diet plan, dietary restrictions, and macronutrient goals."
      video={
        <VideoPlayer
          src="/assets/videos/Fork Demo for Website Part 2.mp4"
          type="video/mp4"
          playbackSpeed={0.6}
        />
      }
      videoAlt="Fork Demo"
    />
  </Section>
);

export { VerticalFeatures };
