type CRCFuncProps = (data: string, generator: string, isDecode?: boolean) => string;

type XORProps = (firstArg: string, secondArg: string) => string;

export type { CRCFuncProps, XORProps };
