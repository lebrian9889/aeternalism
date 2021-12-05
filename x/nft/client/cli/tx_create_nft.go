package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/lebrian9889/aeternalism/x/nft/types"
)

var _ = strconv.Itoa(0)

func CmdCreateNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-nft [name] [description] [media-url] [owner] [org-id] [org-owner] [org-chain]",
		Short: "Broadcast message create-nft",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argDescription := args[1]
			argMediaUrl := args[2]
			argOwner := args[3]
			argOrgId := args[4]
			argOrgOwner := args[5]
			argOrgChain := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateNft(
				clientCtx.GetFromAddress().String(),
				argName,
				argDescription,
				argMediaUrl,
				argOwner,
				argOrgId,
				argOrgOwner,
				argOrgChain,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
