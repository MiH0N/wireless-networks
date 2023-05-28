import { FC } from 'react';
import Lottie, { Options } from 'react-lottie';
import classnames from 'classnames';
interface IMyLottieProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  defaultOptions?: Options;
  animationData: any;
}

export const MyLottie: FC<IMyLottieProps> = ({
  width,
  height,
  className,
  animationData,
  defaultOptions: options = {},
}) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...options,
  };
  return (
    <div className={classnames(className ? className : '')}>
      <Lottie
        options={defaultOptions}
        height={height ? height : '100%'}
        width={width ? width : '100%'}
        isClickToPauseDisabled={true}
        style={{ cursor: 'default' }}
      />
    </div>
  );
};
