/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lebrian9889.aeternalism.nft'

export interface Nft {
  index: string
  mediaUrl: string
  owner: string
  orgId: string
  orgOwner: string
  orgChain: string
  orgAddress: string
}

const baseNft: object = { index: '', mediaUrl: '', owner: '', orgId: '', orgOwner: '', orgChain: '', orgAddress: '' }

export const Nft = {
  encode(message: Nft, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
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
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Nft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNft } as Nft
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Nft {
    const message = { ...baseNft } as Nft
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
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
    return message
  },

  toJSON(message: Nft): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.mediaUrl !== undefined && (obj.mediaUrl = message.mediaUrl)
    message.owner !== undefined && (obj.owner = message.owner)
    message.orgId !== undefined && (obj.orgId = message.orgId)
    message.orgOwner !== undefined && (obj.orgOwner = message.orgOwner)
    message.orgChain !== undefined && (obj.orgChain = message.orgChain)
    message.orgAddress !== undefined && (obj.orgAddress = message.orgAddress)
    return obj
  },

  fromPartial(object: DeepPartial<Nft>): Nft {
    const message = { ...baseNft } as Nft
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
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
    return message
  }
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
