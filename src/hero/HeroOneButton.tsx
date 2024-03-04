import type { ReactNode } from 'react';

import { Section } from '@/layout/Section';
import TextInput from '@/textinput/TextInput';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  submittedButton: ReactNode;
  subtitle?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl text-white">{props.description}</div>
    <div className="mb-16 mt-4 text-4xl font-bold text-white">
      {props.subtitle && props.subtitle}
    </div>
    <Section yPadding="pt-8 pb-16">
      <TextInput
        label="example@gmail.com"
        SubmitButton={props.button}
        SubmittedButton={props.submittedButton}
      />
    </Section>
  </header>
);

export { HeroOneButton };
