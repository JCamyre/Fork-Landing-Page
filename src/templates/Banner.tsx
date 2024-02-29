import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sign up to get launch updates."
      subtitle="Get started for free."
      button={
        <button type="submit">
          <Button xl>Sign Up For Updates!</Button>
        </button>
      }
      submittedButton={<Button xl>Submitted! ✓</Button>}
    />
  </Section>
);

export { Banner };
