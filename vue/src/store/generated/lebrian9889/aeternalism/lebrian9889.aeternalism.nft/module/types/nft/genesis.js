/* eslint-disable */
import { Nft } from '../nft/nft';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'lebrian9889.aeternalism.nft';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.nftList) {
            Nft.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.nftList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftList.push(Nft.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.nftList = [];
        if (object.nftList !== undefined && object.nftList !== null) {
            for (const e of object.nftList) {
                message.nftList.push(Nft.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.nftList) {
            obj.nftList = message.nftList.map((e) => (e ? Nft.toJSON(e) : undefined));
        }
        else {
            obj.nftList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.nftList = [];
        if (object.nftList !== undefined && object.nftList !== null) {
            for (const e of object.nftList) {
                message.nftList.push(Nft.fromPartial(e));
            }
        }
        return message;
    }
};
