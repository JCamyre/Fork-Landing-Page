import { Button } from '@/button/Button';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <></>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<span className="text-white">Fork</span>}
        description="Your ML-powered healthy eating companion"
        button={
          <button type="submit">
            <Button xl>Sign Up For Updates!</Button>
          </button>
        }
      />
    </Section>
  </Background>
);

export { Hero };
