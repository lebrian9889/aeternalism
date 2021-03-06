package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// NftKeyPrefix is the prefix to retrieve all Nft
	NftKeyPrefix = "Nft/value/"
)

// NftKey returns the store key to retrieve a Nft from the index fields
func NftKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
