package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateNft{}

func NewMsgCreateNft(creator string, name string, description string, mediaUrl string, owner string, orgId string, orgOwner string, orgChain string) *MsgCreateNft {
	return &MsgCreateNft{
		Creator:  creator,
		MediaUrl: mediaUrl,
		Owner:    owner,
		OrgId:    orgId,
		OrgOwner: orgOwner,
		OrgChain: orgChain,
	}
}

func (msg *MsgCreateNft) Route() string {
	return RouterKey
}

func (msg *MsgCreateNft) Type() string {
	return "CreateNft"
}

func (msg *MsgCreateNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
