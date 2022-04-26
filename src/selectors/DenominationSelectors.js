// @flow

import { type EdgeCurrencyInfo, type EdgeDenomination } from 'edge-core-js'

import type { Dispatch, GetState, RootState } from '../types/reduxTypes.js'

const emptyEdgeDenomination: EdgeDenomination = {
  name: '',
  multiplier: '1',
  symbol: ''
}

export const getDisplayDenominationFromState =
  (pluginId: string, currencyCode: string) =>
  (dispatch: Dispatch, getState: GetState): EdgeDenomination => {
    const state = getState()
    return getDisplayDenomination(state, pluginId, currencyCode)
  }

export const getDisplayDenomination = (state: RootState, pluginId: string, currencyCode: string): EdgeDenomination => {
  return state.ui.settings.denominationSettings[pluginId][currencyCode] ?? getExchangeDenomination(state, pluginId, currencyCode)
}

export const getExchangeDenominationFromState = (pluginId: string, currencyCode: string) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  return getExchangeDenomination(state, pluginId, currencyCode)
}

/**
 * Finds the primary denomination for the given currencyCode.
 * This would match "BTC" but not "sats".
 */
export const getExchangeDenomination = (state: RootState, pluginId: string, currencyCode: string): EdgeDenomination => {
  const currencyConfig = state.core.account.currencyConfig[pluginId]
  const { builtinTokens = {}, currencyInfo, customTokens = {} } = currencyConfig

  if (currencyInfo.currencyCode === currencyCode) return currencyInfo.denominations[0]
  for (const tokenId of Object.keys(customTokens)) {
    const token = customTokens[tokenId]
    if (token.currencyCode === currencyCode) return token.denominations[0]
  }
  for (const tokenId of Object.keys(builtinTokens)) {
    const token = builtinTokens[tokenId]
    if (token.currencyCode === currencyCode) return token.denominations[0]
  }

  return emptyEdgeDenomination
}

/**
 * @deprecated Use `getExchangeDenomination` instead.
 * This is buggy, since it does not include custom tokens.
 */
export const getDenominationFromCurrencyInfo = (currencyInfo: EdgeCurrencyInfo, currencyCode: string): EdgeDenomination => {
  const mainDenom = currencyInfo.denominations.find(denom => denom.name === currencyCode)
  if (mainDenom != null) return mainDenom

  const metaToken = currencyInfo.metaTokens.find(token => token.currencyCode === currencyCode)
  const metaTokenDenoms = metaToken?.denominations ?? []
  const metaTokenDenom = metaTokenDenoms.find(denom => denom.name === currencyCode)
  if (metaTokenDenom != null) return metaTokenDenom
  return emptyEdgeDenomination
}
