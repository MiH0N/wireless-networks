import classNames from 'classnames';
import { FC } from 'react';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'error';
  iconComponent?: JSX.Element;
}

const buttonStyle = (variant: IButtonProps['variant']) => {
  const baseClassName = 'p-4 rounded-md transition-all duration-300';
  let classname = baseClassName;
  const primaryClassNames = 'text-white bg-blue-600';
  const errorClassNames = 'bg-red-600 text-white rounded hover:shadow-lg';
  switch (variant) {
    case 'primary':
      classname += ' ' + primaryClassNames;
      break;
    case 'error':
      classname += ' ' + errorClassNames;
      break;
    default:
      break;
  }
  return classname;
};

export const Button: FC<IButtonProps> = ({ variant = 'primary', children, iconComponent, ...props }) => {
  return (
    <button className={classNames(buttonStyle(variant), !!iconComponent && 'flex items-center' , props.className)} {...props}>
      {children}
      {iconComponent && <span className='ms-2'>{iconComponent}</span>}
    </button>
  );
};
