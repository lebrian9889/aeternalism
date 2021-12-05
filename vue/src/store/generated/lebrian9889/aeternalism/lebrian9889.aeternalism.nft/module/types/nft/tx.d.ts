import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "lebrian9889.aeternalism.nft";
export interface MsgCreateNft {
    creator: string;
    mediaUrl: string;
    owner: string;
    orgId: string;
    orgOwner: string;
    orgChain: string;
    orgAddress: string;
    orgNounce: string;
}
export interface MsgCreateNftResponse {
}
export declare const MsgCreateNft: {
    encode(message: MsgCreateNft, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNft;
    fromJSON(object: any): MsgCreateNft;
    toJSON(message: MsgCreateNft): unknown;
    fromPartial(object: DeepPartial<MsgCreateNft>): MsgCreateNft;
};
export declare const MsgCreateNftResponse: {
    encode(_: MsgCreateNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNftResponse;
    fromJSON(_: any): MsgCreateNftResponse;
    toJSON(_: MsgCreateNftResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateNftResponse>): MsgCreateNftResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
