import { Reader, Writer } from 'protobufjs/minimal';
import { Nft } from '../nft/nft';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "lebrian9889.aeternalism.nft";
export interface QueryGetNftRequest {
    index: string;
}
export interface QueryGetNftResponse {
    nft: Nft | undefined;
}
export interface QueryAllNftRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllNftResponse {
    nft: Nft[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetNftRequest: {
    encode(message: QueryGetNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftRequest;
    fromJSON(object: any): QueryGetNftRequest;
    toJSON(message: QueryGetNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetNftRequest>): QueryGetNftRequest;
};
export declare const QueryGetNftResponse: {
    encode(message: QueryGetNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftResponse;
    fromJSON(object: any): QueryGetNftResponse;
    toJSON(message: QueryGetNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNftResponse>): QueryGetNftResponse;
};
export declare const QueryAllNftRequest: {
    encode(message: QueryAllNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftRequest;
    fromJSON(object: any): QueryAllNftRequest;
    toJSON(message: QueryAllNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllNftRequest>): QueryAllNftRequest;
};
export declare const QueryAllNftResponse: {
    encode(message: QueryAllNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftResponse;
    fromJSON(object: any): QueryAllNftResponse;
    toJSON(message: QueryAllNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllNftResponse>): QueryAllNftResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a nft by index. */
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    /** Queries a list of nft items. */
    NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
