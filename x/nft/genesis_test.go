package nft_test

import (
	"testing"

	keepertest "github.com/lebrian9889/aeternalism/testutil/keeper"
	"github.com/lebrian9889/aeternalism/x/nft"
	"github.com/lebrian9889/aeternalism/x/nft/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		NftList: []types.Nft{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftKeeper(t)
	nft.InitGenesis(ctx, *k, genesisState)
	got := nft.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.NftList, len(genesisState.NftList))
	require.Subset(t, genesisState.NftList, got.NftList)
	// this line is used by starport scaffolding # genesis/test/assert
}
