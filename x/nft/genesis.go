package nft

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lebrian9889/aeternalism/x/nft/keeper"
	"github.com/lebrian9889/aeternalism/x/nft/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the nft
	for _, elem := range genState.NftList {
		k.SetNft(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.NftList = k.GetAllNft(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
