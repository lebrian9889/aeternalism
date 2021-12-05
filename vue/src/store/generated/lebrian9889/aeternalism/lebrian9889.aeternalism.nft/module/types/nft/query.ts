/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Nft } from '../nft/nft'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'lebrian9889.aeternalism.nft'

export interface QueryGetNftRequest {
  index: string
}

export interface QueryGetNftResponse {
  nft: Nft | undefined
}

export interface QueryAllNftRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllNftResponse {
  nft: Nft[]
  pagination: PageResponse | undefined
}

const baseQueryGetNftRequest: object = { index: '' }

export const QueryGetNftRequest = {
  encode(message: QueryGetNftRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNftRequest {
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetNftRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNftRequest>): QueryGetNftRequest {
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetNftResponse: object = {}

export const QueryGetNftResponse = {
  encode(message: QueryGetNftResponse, writer: Writer = Writer.create()): Writer {
    if (message.nft !== undefined) {
      Nft.encode(message.nft, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.nft = Nft.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNftResponse {
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = Nft.fromJSON(object.nft)
    } else {
      message.nft = undefined
    }
    return message
  },

  toJSON(message: QueryGetNftResponse): unknown {
    const obj: any = {}
    message.nft !== undefined && (obj.nft = message.nft ? Nft.toJSON(message.nft) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNftResponse>): QueryGetNftResponse {
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = Nft.fromPartial(object.nft)
    } else {
      message.nft = undefined
    }
    return message
  }
}

const baseQueryAllNftRequest: object = {}

export const QueryAllNftRequest = {
  encode(message: QueryAllNftRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllNftRequest {
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNftRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNftRequest>): QueryAllNftRequest {
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllNftResponse: object = {}

export const QueryAllNftResponse = {
  encode(message: QueryAllNftResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.nft) {
      Nft.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse
    message.nft = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.nft.push(Nft.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllNftResponse {
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse
    message.nft = []
    if (object.nft !== undefined && object.nft !== null) {
      for (const e of object.nft) {
        message.nft.push(Nft.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNftResponse): unknown {
    const obj: any = {}
    if (message.nft) {
      obj.nft = message.nft.map((e) => (e ? Nft.toJSON(e) : undefined))
    } else {
      obj.nft = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNftResponse>): QueryAllNftResponse {
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse
    message.nft = []
    if (object.nft !== undefined && object.nft !== null) {
      for (const e of object.nft) {
        message.nft.push(Nft.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a nft by index. */
  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>
  /** Queries a list of nft items. */
  NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse> {
    const data = QueryGetNftRequest.encode(request).finish()
    const promise = this.rpc.request('lebrian9889.aeternalism.nft.Query', 'Nft', data)
    return promise.then((data) => QueryGetNftResponse.decode(new Reader(data)))
  }

  NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse> {
    const data = QueryAllNftRequest.encode(request).finish()
    const promise = this.rpc.request('lebrian9889.aeternalism.nft.Query', 'NftAll', data)
    return promise.then((data) => QueryAllNftResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
