import { CRCFuncProps, XORProps } from '@/types/CRCFunctionsProps';

export const CRC: CRCFuncProps = (data, generator, isDecode) => {
  data = data.replace(/^0+/, '');
  generator = generator.replace(/^0+/, '');

  const dataBits = data + '0'.repeat(isDecode ? 0 : generator.length - 1);

  const zeroData = '0'.repeat(generator.length);
  const genLen = generator.length;

  let result = XOR(dataBits.substring(0, genLen), generator);
  for (let i = genLen; i < dataBits.length; i++) {
    result = result.substring(1) + dataBits[i];
    result = XOR(result, result[0] === '0' ? zeroData : generator);
  }
  return result.substring(1);
};

const XOR: XORProps = (firstArg: string, secondArg: string) => {
  if (firstArg.length < secondArg.length) {
    [firstArg, secondArg] = [secondArg, firstArg];
  }
  secondArg = '0'.repeat(firstArg.length - secondArg.length) + secondArg;
  let result = '';
  for (let i = 0; i < firstArg.length; i++) {
    result += firstArg[i] === secondArg[i] ? '0' : '1';
  }
  return result;
};

// console.log('CRC.ts :', CRC('100100', '1101'));
// console.log('CRC.ts :', CRC('100100001', '1101'));
// console.log('CRC.ts :', CRC('100000001', '1101', true));
