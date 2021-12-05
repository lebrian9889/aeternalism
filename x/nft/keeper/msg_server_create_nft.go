package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/lebrian9889/aeternalism/x/nft/types"
)

func (k msgServer) CreateNft(goCtx context.Context, msg *types.MsgCreateNft) (*types.MsgCreateNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// generate nft index
	indexBytes := []byte(msg.OrgId + msg.OrgChain + msg.OrgAddress + msg.OrgNounce)
	indexHash := sha256.Sum256(indexBytes)
	nftIndex := hex.EncodeToString(indexHash[:])
	// try getting nft, error if existed
	_, isFound := k.GetNft(ctx, nftIndex)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "NFT existed")
	}

	// Create NFT
	nft := types.Nft{
		Index:      nftIndex,
		MediaUrl:   msg.MediaUrl,
		Owner:      msg.Owner,
		OrgId:      msg.OrgId,
		OrgOwner:   msg.OrgOwner,
		OrgChain:   msg.OrgChain,
		OrgAddress: msg.OrgAddress,
	}

	k.SetNft(ctx, nft)

	return &types.MsgCreateNftResponse{}, nil
}
