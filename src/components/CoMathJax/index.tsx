import { FC } from 'react';
import { JSX } from 'react/jsx-runtime';
interface ICoMathJaxProps {
  data: string;
}

export const CoMathJax: FC<ICoMathJaxProps> = ({ data }) => {
  const InlineFormula = (data: string) => {
    const result: JSX.Element[] = [];
    data
      .split('')
      .reverse()
      .map((item, index) => {
        if (item === '1' && index !== 0) {
          result.push(
            <>
              <p
                className='inline-block relative text-[30px]'
                style={{
                  fontFamily: 'MJXc-TeX-math-I,MJXc-TeX-math-Ix,MJXc-TeX-math-Iw',
                }}>
                x <span className='absolute text-base bottom-3'>{index}</span>
              </p>
              <p>+</p>
            </>
          );
        }
      });
    return result;
  };
  return (
    <div className='inline-flex items-center space-x-3'>
      {InlineFormula(data)}
      <p
        className='inline-block relative text-[24px]'
        style={{
          fontFamily: 'MJXc-TeX-math-I,MJXc-TeX-math-Ix,MJXc-TeX-math-Iw',
        }}>
        1
      </p>
    </div>
  );
};
