package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/lebrian9889/aeternalism/testutil/keeper"
	"github.com/lebrian9889/aeternalism/x/nft/keeper"
	"github.com/lebrian9889/aeternalism/x/nft/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NftKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
