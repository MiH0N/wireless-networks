export type BitDataProps = {
  data: string;
  reset: (data: string) => void;
  handleChangeBit: (newBit: number, index: number) => void;
};
