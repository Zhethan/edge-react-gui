// @flow

import type { EdgeMetaToken } from 'edge-core-js'
import _ from 'lodash'
import * as React from 'react'
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'

import {
  deleteCustomToken,
  editCustomToken
} from '../../actions/WalletActions.js'
import { MAX_TOKEN_CODE_CHARACTERS } from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { PrimaryButton } from '../../modules/UI/components/Buttons/PrimaryButton.ui.js'
import { TertiaryButton } from '../../modules/UI/components/Buttons/TertiaryButton.ui.js'
import Text from '../../modules/UI/components/FormattedText/FormattedText.ui.js'
import { THEME } from '../../theme/variables/airbitz.js'
import { type Dispatch, type RootState } from '../../types/reduxTypes.js'
import type { CustomTokenInfo } from '../../types/types.js'
import { scale } from '../../util/scaling.js'
import * as UTILS from '../../util/utils'
import { FormField } from '../common/FormField.js'
import { SceneWrapper } from '../common/SceneWrapper.js'
import { ButtonsModal } from '../modals/ButtonsModal.js'
import { Airship, showActivity } from '../services/AirshipInstance.js'

type OwnProps = {
  currencyCode: string,
  metaTokens: EdgeMetaToken[],
  onDeleteToken(currencyCode: string): void,
  walletId: string
}
type StateProps = {
  customTokens: CustomTokenInfo[],
  editCustomTokenProcessing: boolean
}
type DispatchProps = {
  deleteCustomToken(walletId: string, currencyCode: string): Promise<void>,
  editCustomToken(
    walletId: string,
    currencyName: string,
    currencyCode: string,
    contractAddress: string,
    denomination: string,
    oldCurrencyCode: string
  ): void
}
type Props = OwnProps & StateProps & DispatchProps

type State = {
  currencyName: string,
  currencyCode: string,
  contractAddress: string,
  decimalPlaces: string,
  multiplier: string,
  errorMessage: string,
  enabled?: boolean
}

class EditTokenComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const tokenInfoIndex = _.findIndex(
      props.customTokens,
      item => item.currencyCode === props.currencyCode
    )
    if (tokenInfoIndex >= 0) {
      const tokenInfo = props.customTokens[tokenInfoIndex]
      const { currencyName, contractAddress, denomination } = tokenInfo
      const decimalPlaces = UTILS.denominationToDecimalPlaces(denomination)
      this.state = {
        currencyName,
        contractAddress,
        decimalPlaces,
        multiplier: '',
        currencyCode: props.currencyCode,
        errorMessage: ''
      }
    } else {
      Alert.alert(
        s.strings.edittoken_delete_title,
        s.strings.edittoken_improper_token_load
      )
    }
  }

  render() {
    const { editCustomTokenProcessing } = this.props
    return (
      <SceneWrapper avoidKeyboard background="body">
        {gap => (
          <ScrollView
            style={[styles.container, { marginBottom: -gap.bottom }]}
            contentContainerStyle={{ paddingBottom: gap.bottom }}
          >
            <View style={styles.instructionalArea}>
              <Text style={styles.instructionalText}>
                {s.strings.edittoken_top_instructions}
              </Text>
            </View>
            <View style={styles.nameArea}>
              <FormField
                value={this.state.currencyName}
                onChangeText={this.onChangeName}
                autoCapitalize="words"
                label={s.strings.addtoken_name_input_text}
                returnKeyType="done"
                autoCorrect={false}
              />
            </View>
            <View style={styles.currencyCodeArea}>
              <FormField
                value={this.state.currencyCode}
                onChangeText={this.onChangeCurrencyCode}
                autoCapitalize="characters"
                label={s.strings.addtoken_currency_code_input_text}
                returnKeyType="done"
                autoCorrect={false}
                maxLength={MAX_TOKEN_CODE_CHARACTERS}
              />
            </View>
            <View style={styles.contractAddressArea}>
              <FormField
                value={this.state.contractAddress}
                onChangeText={this.onChangeContractAddress}
                label={s.strings.addtoken_contract_address_input_text}
                returnKeyType="done"
                autoCorrect={false}
              />
            </View>
            <View style={styles.decimalPlacesArea}>
              <FormField
                value={this.state.decimalPlaces}
                onChangeText={this.onChangeDecimalPlaces}
                label={s.strings.addtoken_denomination_input_text}
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.errorMessageArea}>
              <Text style={styles.errorMessageText}>
                {this.state.errorMessage}
              </Text>
            </View>
            <View style={styles.buttonsArea}>
              <TertiaryButton
                onPress={this.deleteToken}
                style={styles.deleteButton}
              >
                <TertiaryButton.Text>
                  {s.strings.edittoken_delete_token}
                </TertiaryButton.Text>
              </TertiaryButton>
              <PrimaryButton style={styles.saveButton} onPress={this._onSave}>
                {editCustomTokenProcessing ? (
                  <ActivityIndicator color={THEME.COLORS.ACCENT_MINT} />
                ) : (
                  <PrimaryButton.Text>
                    {s.strings.string_save}
                  </PrimaryButton.Text>
                )}
              </PrimaryButton>
            </View>
          </ScrollView>
        )}
      </SceneWrapper>
    )
  }

  deleteToken = async () => {
    const { walletId, currencyCode } = this.props
    const result = await Airship.show(bridge => (
      <ButtonsModal
        bridge={bridge}
        title={s.strings.string_delete}
        message={s.strings.edittoken_delete_prompt}
        buttons={{
          ok: { label: s.strings.string_delete },
          cancel: { label: s.strings.string_cancel_cap, type: 'secondary' }
        }}
      />
    ))
    if (result === 'ok') {
      showActivity(
        s.strings.string_delete,
        this.props.deleteCustomToken(walletId, currencyCode)
      )
      this.props.onDeleteToken(currencyCode)
    }
  }

  onChangeName = (input: string) => {
    this.setState({
      currencyName: input
    })
  }

  onChangeCurrencyCode = (input: string) => {
    this.setState({
      currencyCode: input
    })
  }

  onChangeDecimalPlaces = (input: string) => {
    this.setState({
      decimalPlaces: input
    })
  }

  onChangeContractAddress = (input: string) => {
    this.setState({
      contractAddress: input.trim()
    })
  }

  _onSave = () => {
    const currencyCode = this.state.currencyCode.toUpperCase()
    this.setState(
      {
        currencyCode
      },
      () => {
        const { currencyName, decimalPlaces, contractAddress } = this.state
        if (currencyName && currencyCode && decimalPlaces && contractAddress) {
          const { walletId } = this.props
          const visibleTokens = UTILS.mergeTokensRemoveInvisible(
            this.props.metaTokens,
            this.props.customTokens
          )
          const indexInVisibleTokens = _.findIndex(
            visibleTokens,
            token => token.currencyCode === currencyCode
          )
          if (currencyCode !== this.props.currencyCode) {
            // if the currencyCode will change
            if (indexInVisibleTokens >= 0) {
              // if the new currency code is already taken / visible
              Alert.alert(
                s.strings.edittoken_delete_title,
                s.strings.edittoken_duplicate_currency_code
              )
            } else {
              // not in the array of visible tokens, CASE 3
              if (parseInt(decimalPlaces) !== 'NaN') {
                const denomination =
                  UTILS.decimalPlacesToDenomination(decimalPlaces)
                this.props.editCustomToken(
                  walletId,
                  currencyName,
                  currencyCode,
                  contractAddress,
                  denomination,
                  this.props.currencyCode
                )
              } else {
                Alert.alert(
                  s.strings.edittoken_delete_title,
                  s.strings.edittoken_invalid_decimal_places
                )
              }
            }
          } else {
            if (parseInt(decimalPlaces) !== 'NaN') {
              const denomination =
                UTILS.decimalPlacesToDenomination(decimalPlaces)
              this.props.editCustomToken(
                walletId,
                currencyName,
                currencyCode,
                contractAddress,
                denomination,
                this.props.currencyCode
              )
            } else {
              Alert.alert(
                s.strings.edittoken_delete_title,
                s.strings.edittoken_invalid_decimal_places
              )
            }
          }
        } else {
          Alert.alert(
            s.strings.edittoken_delete_title,
            s.strings.addtoken_default_error_message
          )
        }
      }
    )
  }
}

const rawStyles = {
  container: {
    paddingHorizontal: scale(20),
    backgroundColor: THEME.COLORS.GRAY_4
  },

  instructionalArea: {
    paddingVertical: scale(16),
    paddingHorizontal: scale(20)
  },
  instructionalText: {
    fontSize: scale(16),
    textAlign: 'center'
  },

  nameArea: {
    height: scale(70)
  },
  currencyCodeArea: {
    height: scale(70)
  },
  contractAddressArea: {
    height: scale(70)
  },
  decimalPlacesArea: {
    height: scale(70)
  },
  errorMessageArea: {
    height: scale(16),
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessageText: {
    color: THEME.COLORS.ACCENT_RED
  },
  buttonsArea: {
    marginVertical: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: scale(4)
  },
  deleteButton: {
    flex: 1,
    marginRight: scale(1)
  },
  saveButton: {
    flex: 1,
    padding: scale(13),
    marginLeft: scale(1)
  }
}
const styles: typeof rawStyles = StyleSheet.create(rawStyles)

export const EditTokenScene = connect(
  (state: RootState): StateProps => ({
    customTokens: state.ui.settings.customTokens,
    editCustomTokenProcessing:
      state.ui.scenes.editToken.editCustomTokenProcessing
  }),
  (dispatch: Dispatch): DispatchProps => ({
    async deleteCustomToken(walletId: string, currencyCode: string) {
      await dispatch(deleteCustomToken(walletId, currencyCode))
    },
    editCustomToken(
      walletId: string,
      currencyName: string,
      currencyCode: string,
      contractAddress: string,
      denomination: string,
      oldCurrencyCode: string
    ) {
      dispatch(
        editCustomToken(
          walletId,
          currencyName,
          currencyCode,
          contractAddress,
          denomination,
          oldCurrencyCode
        )
      )
    }
  })
)(EditTokenComponent)
