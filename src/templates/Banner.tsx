import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sign up to get launch updates."
      subtitle="Get started for free."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Sign up</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
