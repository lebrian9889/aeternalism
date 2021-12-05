/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'lebrian9889.aeternalism.nft'

export interface MsgCreateNft {
  creator: string
  mediaUrl: string
  owner: string
  orgId: string
  orgOwner: string
  orgChain: string
  orgAddress: string
  orgNounce: string
}

export interface MsgCreateNftResponse {}

const baseMsgCreateNft: object = { creator: '', mediaUrl: '', owner: '', orgId: '', orgOwner: '', orgChain: '', orgAddress: '', orgNounce: '' }

export const MsgCreateNft = {
  encode(message: MsgCreateNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.mediaUrl !== '') {
      writer.uint32(18).string(message.mediaUrl)
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner)
    }
    if (message.orgId !== '') {
      writer.uint32(34).string(message.orgId)
    }
    if (message.orgOwner !== '') {
      writer.uint32(42).string(message.orgOwner)
    }
    if (message.orgChain !== '') {
      writer.uint32(50).string(message.orgChain)
    }
    if (message.orgAddress !== '') {
      writer.uint32(58).string(message.orgAddress)
    }
    if (message.orgNounce !== '') {
      writer.uint32(66).string(message.orgNounce)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNft } as MsgCreateNft
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.mediaUrl = reader.string()
          break
        case 3:
          message.owner = reader.string()
          break
        case 4:
          message.orgId = reader.string()
          break
        case 5:
          message.orgOwner = reader.string()
          break
        case 6:
          message.orgChain = reader.string()
          break
        case 7:
          message.orgAddress = reader.string()
          break
        case 8:
          message.orgNounce = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateNft {
    const message = { ...baseMsgCreateNft } as MsgCreateNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.mediaUrl !== undefined && object.mediaUrl !== null) {
      message.mediaUrl = String(object.mediaUrl)
    } else {
      message.mediaUrl = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.orgId !== undefined && object.orgId !== null) {
      message.orgId = String(object.orgId)
    } else {
      message.orgId = ''
    }
    if (object.orgOwner !== undefined && object.orgOwner !== null) {
      message.orgOwner = String(object.orgOwner)
    } else {
      message.orgOwner = ''
    }
    if (object.orgChain !== undefined && object.orgChain !== null) {
      message.orgChain = String(object.orgChain)
    } else {
      message.orgChain = ''
    }
    if (object.orgAddress !== undefined && object.orgAddress !== null) {
      message.orgAddress = String(object.orgAddress)
    } else {
      message.orgAddress = ''
    }
    if (object.orgNounce !== undefined && object.orgNounce !== null) {
      message.orgNounce = String(object.orgNounce)
    } else {
      message.orgNounce = ''
    }
    return message
  },

  toJSON(message: MsgCreateNft): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.mediaUrl !== undefined && (obj.mediaUrl = message.mediaUrl)
    message.owner !== undefined && (obj.owner = message.owner)
    message.orgId !== undefined && (obj.orgId = message.orgId)
    message.orgOwner !== undefined && (obj.orgOwner = message.orgOwner)
    message.orgChain !== undefined && (obj.orgChain = message.orgChain)
    message.orgAddress !== undefined && (obj.orgAddress = message.orgAddress)
    message.orgNounce !== undefined && (obj.orgNounce = message.orgNounce)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateNft>): MsgCreateNft {
    const message = { ...baseMsgCreateNft } as MsgCreateNft
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.mediaUrl !== undefined && object.mediaUrl !== null) {
      message.mediaUrl = object.mediaUrl
    } else {
      message.mediaUrl = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.orgId !== undefined && object.orgId !== null) {
      message.orgId = object.orgId
    } else {
      message.orgId = ''
    }
    if (object.orgOwner !== undefined && object.orgOwner !== null) {
      message.orgOwner = object.orgOwner
    } else {
      message.orgOwner = ''
    }
    if (object.orgChain !== undefined && object.orgChain !== null) {
      message.orgChain = object.orgChain
    } else {
      message.orgChain = ''
    }
    if (object.orgAddress !== undefined && object.orgAddress !== null) {
      message.orgAddress = object.orgAddress
    } else {
      message.orgAddress = ''
    }
    if (object.orgNounce !== undefined && object.orgNounce !== null) {
      message.orgNounce = object.orgNounce
    } else {
      message.orgNounce = ''
    }
    return message
  }
}

const baseMsgCreateNftResponse: object = {}

export const MsgCreateNftResponse = {
  encode(_: MsgCreateNftResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateNftResponse {
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse
    return message
  },

  toJSON(_: MsgCreateNftResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateNftResponse>): MsgCreateNftResponse {
    const message = { ...baseMsgCreateNftResponse } as MsgCreateNftResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateNft(request: MsgCreateNft): Promise<MsgCreateNftResponse> {
    const data = MsgCreateNft.encode(request).finish()
    const promise = this.rpc.request('lebrian9889.aeternalism.nft.Msg', 'CreateNft', data)
    return promise.then((data) => MsgCreateNftResponse.decode(new Reader(data)))
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
