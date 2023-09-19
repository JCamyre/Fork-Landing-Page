import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const logoStyle = {
    height: 128,
    width: 128,
  };

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img src="/assets/images/fork-logo.svg" style={logoStyle} />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
