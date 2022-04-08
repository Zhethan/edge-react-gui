// @flow

import * as React from 'react'
import { View } from 'react-native'
import { sprintf } from 'sprintf-js'

import { PLUGIN_BUY } from '../../constants/SceneKeys.js'
import { SPECIAL_CURRENCY_INFO } from '../../constants/WalletAndCurrencyConstants.js'
import s from '../../locales/strings.js'
import { connect } from '../../types/reactRedux.js'
import { Actions } from '../../types/routerTypes.js'
import { type Theme, type ThemeProps, cacheStyles, withTheme } from '../services/ThemeContext.js'
import { CurrencyIcon } from '../themed/CurrencyIcon.js'
import { EdgeText } from './EdgeText.js'
import { ButtonBox } from './ThemedButtons.js'

const allowedCurrencies = Object.keys(SPECIAL_CURRENCY_INFO)
  .filter(pluginId => !!SPECIAL_CURRENCY_INFO[pluginId].displayBuyCrypto)
  .map(pluginId => SPECIAL_CURRENCY_INFO[pluginId].chainCode)

type OwnProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  walletId: string,
  currencyCode: string
}

type StateProps = { currencyName: string }

type Props = OwnProps & StateProps & ThemeProps

export class BuyCryptoComponent extends React.PureComponent<Props> {
  handlePress = (): void => {
    Actions.push(PLUGIN_BUY, { direction: 'buy' })
  }

  render() {
    const { currencyCode, currencyName, theme } = this.props
    const styles = getStyles(theme)

    return (
      <>
        {allowedCurrencies.includes(currencyCode) && (
          <ButtonBox onPress={this.handlePress} paddingRem={1}>
            <View style={styles.container}>
              <View style={styles.buyCrypto}>
                <CurrencyIcon currencyCode={currencyCode} sizeRem={2.25} marginRem={[0.25, 0]} resizeMode="cover" />

                <EdgeText style={styles.buyCryptoText}>{sprintf(s.strings.transaction_list_buy_crypto_message, currencyName)}</EdgeText>
              </View>
            </View>
          </ButtonBox>
        )}
        <View style={styles.noTransactionContainer}>
          <EdgeText style={styles.noTransactionText}>{s.strings.transaction_list_no_tx_yet}</EdgeText>
        </View>
      </>
    )
  }
}

const getStyles = cacheStyles((theme: Theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.rem(1),
    backgroundColor: theme.tileBackground
  },
  buyCrypto: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  buyCryptoText: {
    fontFamily: theme.fontFaceMedium,
    marginVertical: theme.rem(0.25)
  },
  noTransactionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.rem(0.5)
  },
  noTransactionText: {
    fontSize: theme.rem(1.25)
  }
}))

export const BuyCrypto = connect<StateProps, {}, OwnProps>(
  (state, { walletId, currencyCode }) => {
    const guiWallet = state.ui.wallets.byId[walletId]
    return { currencyName: guiWallet.currencyNames[currencyCode] }
  },
  dispatch => ({})
)(withTheme(BuyCryptoComponent))
