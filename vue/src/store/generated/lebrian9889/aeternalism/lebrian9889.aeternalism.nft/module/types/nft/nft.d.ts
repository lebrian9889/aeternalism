import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "lebrian9889.aeternalism.nft";
export interface Nft {
    index: string;
    mediaUrl: string;
    owner: string;
    orgId: string;
    orgOwner: string;
    orgChain: string;
    orgAddress: string;
}
export declare const Nft: {
    encode(message: Nft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Nft;
    fromJSON(object: any): Nft;
    toJSON(message: Nft): unknown;
    fromPartial(object: DeepPartial<Nft>): Nft;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
