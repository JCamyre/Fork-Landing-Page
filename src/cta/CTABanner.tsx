import type { ReactNode } from 'react';

import TextInput from '../textinput/TextInput';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
  submittedButton: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-white">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      <TextInput
        label="example@gmail.com"
        SubmitButton={props.button}
        SubmittedButton={props.submittedButton}
      />
    </div>
  </div>
);

export { CTABanner };
