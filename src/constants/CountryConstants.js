// @flow

import { type CountryData } from '../types/types.js'
import { imageServerUrl } from './WalletAndCurrencyConstants.js'

export const FLAG_LOGO_URL = `${imageServerUrl}/country-logos`

export const COUNTRY_CODES: CountryData[] = [
  { name: 'Afghanistan', 'alpha-2': 'AF', fiat: '' },
  { name: 'Åland Islands', filename: 'aland-islands', 'alpha-2': 'AX' },
  { name: 'Albania', 'alpha-2': 'AL' },
  { name: 'Algeria', 'alpha-2': 'DZ' },
  { name: 'American Samoa', 'alpha-2': 'AS' },
  { name: 'Andorra', 'alpha-2': 'AD' },
  { name: 'Angola', 'alpha-2': 'AO' },
  { name: 'Anguilla', 'alpha-2': 'AI' },
  {
    name: 'Antigua and Barbuda',
    filename: 'antigua-and-barbuda',
    'alpha-2': 'AG'
  },
  { name: 'Argentina', 'alpha-2': 'AR' },
  { name: 'Armenia', 'alpha-2': 'AM' },
  { name: 'Aruba', 'alpha-2': 'AW' },
  { name: 'Australia', 'alpha-2': 'AU' },
  { name: 'Austria', 'alpha-2': 'AT' },
  { name: 'Azerbaijan', 'alpha-2': 'AZ' },
  { name: 'Bahamas', 'alpha-2': 'BS' },
  { name: 'Bahrain', 'alpha-2': 'BH' },
  { name: 'Bangladesh', 'alpha-2': 'BD' },
  { name: 'Barbados', 'alpha-2': 'BB' },
  { name: 'Belarus', 'alpha-2': 'BY' },
  { name: 'Belgium', 'alpha-2': 'BE' },
  { name: 'Belize', 'alpha-2': 'BZ' },
  { name: 'Benin', 'alpha-2': 'BJ' },
  { name: 'Bermuda', 'alpha-2': 'BM' },
  { name: 'Bhutan', 'alpha-2': 'BT' },
  {
    name: 'Bolivia (Plurinational State of)',
    filename: 'bolivia',
    'alpha-2': 'BO'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    filename: 'bonaire',
    'alpha-2': 'BQ'
  },
  {
    name: 'Bosnia and Herzegovina',
    filename: 'bosnia-and-herzegovina',
    'alpha-2': 'BA'
  },
  { name: 'Botswana', 'alpha-2': 'BW' },
  { name: 'Brazil', 'alpha-2': 'BR' },
  {
    name: 'British Indian Ocean Territory',
    filename: 'british-indian-ocean-territory',
    'alpha-2': 'IO'
  },
  { name: 'Brunei Darussalam', filename: 'brunei', 'alpha-2': 'BN' },
  { name: 'Bulgaria', 'alpha-2': 'BG' },
  { name: 'Burkina Faso', 'alpha-2': 'BF' },
  { name: 'Burundi', 'alpha-2': 'BI' },
  { name: 'Cabo Verde', filename: 'cape-verde', 'alpha-2': 'CV' },
  { name: 'Cambodia', 'alpha-2': 'KH' },
  { name: 'Cameroon', 'alpha-2': 'CM' },
  { name: 'Canada', 'alpha-2': 'CA' },
  { name: 'Cayman Islands', 'alpha-2': 'KY' },
  {
    name: 'Central African Republic',
    filename: 'central-african-republic',
    'alpha-2': 'CF'
  },
  { name: 'Chad', 'alpha-2': 'TD' },
  { name: 'Chile', 'alpha-2': 'CL' },
  { name: 'China', 'alpha-2': 'CN' },
  { name: 'Christmas Island', 'alpha-2': 'CX' },
  {
    name: 'Cocos (Keeling) Islands',
    filename: 'cocos-island',
    'alpha-2': 'CC'
  },
  { name: 'Colombia', 'alpha-2': 'CO' },
  { name: 'Comoros', 'alpha-2': 'KM' },
  { name: 'Congo', 'alpha-2': 'CG' },
  {
    name: 'Congo, Democratic Republic of the',
    filename: 'democratic-republic-of-congo',
    'alpha-2': 'CD'
  },
  { name: 'Cook Islands', 'alpha-2': 'CK' },
  { name: 'Costa Rica', 'alpha-2': 'CR' },
  { name: "Côte d'Ivoire", filename: 'ivory-coast', 'alpha-2': 'CI' },
  { name: 'Croatia', 'alpha-2': 'HR' },
  { name: 'Cuba', 'alpha-2': 'CU' },
  { name: 'Curaçao', filename: 'curacao', 'alpha-2': 'CW' },
  { name: 'Cyprus', 'alpha-2': 'CY' },
  { name: 'Czechia', filename: 'czech-republic', 'alpha-2': 'CZ' },
  { name: 'Denmark', 'alpha-2': 'DK' },
  { name: 'Djibouti', 'alpha-2': 'DJ' },
  { name: 'Dominica', 'alpha-2': 'DM' },
  { name: 'Dominican Republic', 'alpha-2': 'DO' },
  { name: 'Ecuador', 'alpha-2': 'EC' },
  { name: 'Egypt', 'alpha-2': 'EG' },
  { name: 'El Salvador', filename: 'salvador', 'alpha-2': 'SV' },
  { name: 'Equatorial Guinea', 'alpha-2': 'GQ' },
  { name: 'Eritrea', 'alpha-2': 'ER' },
  { name: 'Estonia', 'alpha-2': 'EE' },
  { name: 'Eswatini', 'alpha-2': 'SZ' },
  { name: 'Ethiopia', 'alpha-2': 'ET' },
  {
    name: 'Falkland Islands (Malvinas)',
    filename: 'falkland-islands',
    'alpha-2': 'FK'
  },
  { name: 'Faroe Islands', 'alpha-2': 'FO' },
  { name: 'Fiji', 'alpha-2': 'FJ' },
  { name: 'Finland', 'alpha-2': 'FI' },
  { name: 'France', 'alpha-2': 'FR' },
  { name: 'French Guiana', filename: 'guyana', 'alpha-2': 'GF' },
  { name: 'French Polynesia', 'alpha-2': 'PF' },
  { name: 'Gabon', 'alpha-2': 'GA' },
  { name: 'Gambia', 'alpha-2': 'GM' },
  { name: 'Georgia', 'alpha-2': 'GE' },
  { name: 'Germany', 'alpha-2': 'DE' },
  { name: 'Ghana', 'alpha-2': 'GH' },
  { name: 'Gibraltar', 'alpha-2': 'GI' },
  { name: 'Greece', 'alpha-2': 'GR' },
  { name: 'Greenland', 'alpha-2': 'GL' },
  { name: 'Grenada', 'alpha-2': 'GD' },
  { name: 'Guam', 'alpha-2': 'GU' },
  { name: 'Guatemala', 'alpha-2': 'GT' },
  { name: 'Guernsey', 'alpha-2': 'GG' },
  { name: 'Guinea', 'alpha-2': 'GN' },
  { name: 'Guinea-Bissau', 'alpha-2': 'GW' },
  { name: 'Guyana', 'alpha-2': 'GY' },
  { name: 'Haiti', 'alpha-2': 'HT' },
  { name: 'Holy See', filename: 'vatican-city', 'alpha-2': 'VA' },
  { name: 'Honduras', 'alpha-2': 'HN' },
  { name: 'Hong Kong', 'alpha-2': 'HK' },
  { name: 'Hungary', 'alpha-2': 'HU' },
  { name: 'Iceland', 'alpha-2': 'IS' },
  { name: 'India', 'alpha-2': 'IN' },
  { name: 'Indonesia', 'alpha-2': 'ID' },
  { name: 'Iran (Islamic Republic of)', filename: 'iran', 'alpha-2': 'IR' },
  { name: 'Iraq', 'alpha-2': 'IQ' },
  { name: 'Ireland', 'alpha-2': 'IE' },
  { name: 'Isle of Man', filename: 'isle-of-man', 'alpha-2': 'IM' },
  { name: 'Israel', 'alpha-2': 'IL' },
  { name: 'Italy', 'alpha-2': 'IT' },
  { name: 'Jamaica', 'alpha-2': 'JM' },
  { name: 'Japan', 'alpha-2': 'JP' },
  { name: 'Jersey', 'alpha-2': 'JE' },
  { name: 'Jordan', 'alpha-2': 'JO' },
  { name: 'Kazakhstan', 'alpha-2': 'KZ' },
  { name: 'Kenya', 'alpha-2': 'KE' },
  { name: 'Kiribati', 'alpha-2': 'KI' },
  {
    name: "Korea (Democratic People's Republic of)",
    filename: 'north-korea',
    'alpha-2': 'KP'
  },
  { name: 'Korea, Republic of', filename: 'south-korea', 'alpha-2': 'KR' },
  { name: 'Kuwait', 'alpha-2': 'KW' },
  { name: 'Kyrgyzstan', 'alpha-2': 'KG' },
  {
    name: "Lao People's Democratic Republic",
    filename: 'laos',
    'alpha-2': 'LA'
  },
  { name: 'Latvia', 'alpha-2': 'LV' },
  { name: 'Lebanon', 'alpha-2': 'LB' },
  { name: 'Lesotho', 'alpha-2': 'LS' },
  { name: 'Liberia', 'alpha-2': 'LR' },
  { name: 'Libya', 'alpha-2': 'LY' },
  { name: 'Liechtenstein', 'alpha-2': 'LI' },
  { name: 'Lithuania', 'alpha-2': 'LT' },
  { name: 'Luxembourg', 'alpha-2': 'LU' },
  { name: 'Macao', 'alpha-2': 'MO' },
  { name: 'Madagascar', 'alpha-2': 'MG' },
  { name: 'Malawi', 'alpha-2': 'MW' },
  { name: 'Malaysia', 'alpha-2': 'MY' },
  { name: 'Maldives', 'alpha-2': 'MV' },
  { name: 'Mali', 'alpha-2': 'ML' },
  { name: 'Malta', 'alpha-2': 'MT' },
  { name: 'Marshall Islands', filename: 'marshall-island', 'alpha-2': 'MH' },
  { name: 'Martinique', 'alpha-2': 'MQ' },
  { name: 'Mauritania', 'alpha-2': 'MR' },
  { name: 'Mauritius', 'alpha-2': 'MU' },
  { name: 'Mexico', 'alpha-2': 'MX' },
  {
    name: 'Micronesia (Federated States of)',
    filename: 'micronesia',
    'alpha-2': 'FM'
  },
  { name: 'Moldova, Republic of', filename: 'moldova', 'alpha-2': 'MD' },
  { name: 'Monaco', 'alpha-2': 'MC' },
  { name: 'Mongolia', 'alpha-2': 'MN' },
  { name: 'Montenegro', 'alpha-2': 'ME' },
  { name: 'Montserrat', 'alpha-2': 'MS' },
  { name: 'Morocco', 'alpha-2': 'MA' },
  { name: 'Mozambique', 'alpha-2': 'MZ' },
  { name: 'Myanmar', 'alpha-2': 'MM' },
  { name: 'Namibia', 'alpha-2': 'NA' },
  { name: 'Nauru', 'alpha-2': 'NR' },
  { name: 'Nepal', 'alpha-2': 'NP' },
  { name: 'Netherlands', 'alpha-2': 'NL' },
  { name: 'New Zealand', 'alpha-2': 'NZ' },
  { name: 'Nicaragua', 'alpha-2': 'NI' },
  { name: 'Niger', 'alpha-2': 'NE' },
  { name: 'Nigeria', 'alpha-2': 'NG' },
  { name: 'Niue', 'alpha-2': 'NU' },
  { name: 'Norfolk Island', 'alpha-2': 'NF' },
  { name: 'North Macedonia', 'alpha-2': 'MK' },
  {
    name: 'Northern Mariana Islands',
    filename: 'northern-marianas-islands',
    'alpha-2': 'MP'
  },
  { name: 'Norway', 'alpha-2': 'NO' },
  { name: 'Oman', 'alpha-2': 'OM' },
  { name: 'Pakistan', 'alpha-2': 'PK' },
  { name: 'Palau', 'alpha-2': 'PW' },
  { name: 'Palestine, State of', filename: 'palestine', 'alpha-2': 'PS' },
  { name: 'Panama', 'alpha-2': 'PA' },
  { name: 'Papua New Guinea', filename: 'papua-new-guinea', 'alpha-2': 'PG' },
  { name: 'Paraguay', 'alpha-2': 'PY' },
  { name: 'Peru', 'alpha-2': 'PE' },
  { name: 'Philippines', 'alpha-2': 'PH' },
  { name: 'Pitcairn', filename: 'pitcairn-islands', 'alpha-2': 'PN' },
  { name: 'Poland', filename: 'republic-of-poland', 'alpha-2': 'PL' },
  { name: 'Portugal', 'alpha-2': 'PT' },
  { name: 'Puerto Rico', 'alpha-2': 'PR' },
  { name: 'Qatar', 'alpha-2': 'QA' },
  { name: 'Romania', 'alpha-2': 'RO' },
  { name: 'Russian Federation', filename: 'russia', 'alpha-2': 'RU' },
  { name: 'Rwanda', 'alpha-2': 'RW' },
  {
    name: 'Saint Kitts and Nevis',
    filename: 'saint-kitts-and-nevis',
    'alpha-2': 'KN'
  },
  { name: 'Saint Lucia', filename: 'st-lucia', 'alpha-2': 'LC' },
  {
    name: 'Saint Vincent and the Grenadines',
    filename: 'st-vincent-and-the-grenadines',
    'alpha-2': 'VC'
  },
  { name: 'Samoa', 'alpha-2': 'WS' },
  { name: 'San Marino', 'alpha-2': 'SM' },
  {
    name: 'Sao Tome and Principe',
    filename: 'sao-tome-and-principe',
    'alpha-2': 'ST'
  },
  { name: 'Saudi Arabia', 'alpha-2': 'SA' },
  { name: 'Senegal', 'alpha-2': 'SN' },
  { name: 'Serbia', 'alpha-2': 'RS' },
  { name: 'Seychelles', 'alpha-2': 'SC' },
  { name: 'Sierra Leone', 'alpha-2': 'SL' },
  { name: 'Singapore', 'alpha-2': 'SG' },
  { name: 'Slovakia', 'alpha-2': 'SK' },
  { name: 'Slovenia', 'alpha-2': 'SI' },
  { name: 'Solomon Islands', 'alpha-2': 'SB' },
  { name: 'Somalia', 'alpha-2': 'SO' },
  { name: 'South Africa', 'alpha-2': 'ZA' },
  { name: 'South Sudan', 'alpha-2': 'SS' },
  { name: 'Spain', 'alpha-2': 'ES' },
  { name: 'Sri Lanka', 'alpha-2': 'LK' },
  { name: 'Sudan', 'alpha-2': 'SD' },
  { name: 'Suriname', 'alpha-2': 'SR' },
  { name: 'Sweden', 'alpha-2': 'SE' },
  { name: 'Switzerland', 'alpha-2': 'CH' },
  { name: 'Syrian Arab Republic', filename: 'syria', 'alpha-2': 'SY' },
  { name: 'Taiwan, Province of China', filename: 'taiwan', 'alpha-2': 'TW' },
  { name: 'Tajikistan', 'alpha-2': 'TJ' },
  {
    name: 'Tanzania, United Republic of',
    filename: 'tanzania',
    'alpha-2': 'TZ'
  },
  { name: 'Thailand', 'alpha-2': 'TH' },
  { name: 'Timor-Leste', filename: 'east-timor', 'alpha-2': 'TL' },
  { name: 'Togo', 'alpha-2': 'TG' },
  { name: 'Tokelau', 'alpha-2': 'TK' },
  { name: 'Tonga', 'alpha-2': 'TO' },
  {
    name: 'Trinidad and Tobago',
    filename: 'trinidad-and-tobago',
    'alpha-2': 'TT'
  },
  { name: 'Tunisia', 'alpha-2': 'TN' },
  { name: 'Turkey', 'alpha-2': 'TR' },
  { name: 'Turkmenistan', 'alpha-2': 'TM' },
  {
    name: 'Turks and Caicos Islands',
    filename: 'turks-and-caicos',
    'alpha-2': 'TC'
  },
  { name: 'Tuvalu', 'alpha-2': 'TV' },
  { name: 'Uganda', 'alpha-2': 'UG' },
  { name: 'Ukraine', 'alpha-2': 'UA' },
  {
    name: 'United Arab Emirates',
    filename: 'united-arab-emirates',
    'alpha-2': 'AE'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    filename: 'united-kingdom',
    'alpha-2': 'GB'
  },
  {
    name: 'United States of America',
    filename: 'united-states-of-america',
    'alpha-2': 'US'
  },
  { name: 'Uruguay', 'alpha-2': 'UY' },
  { name: 'Uzbekistan', filename: 'uzbekistn', 'alpha-2': 'UZ' },
  { name: 'Vanuatu', 'alpha-2': 'VU' },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    filename: 'venezuela',
    'alpha-2': 'VE'
  },
  { name: 'Viet Nam', filename: 'vietnam', 'alpha-2': 'VN' },
  {
    name: 'Virgin Islands (British)',
    filename: 'british-virgin-islands',
    'alpha-2': 'VG'
  },
  {
    name: 'Virgin Islands (U.S.)',
    filename: 'virgin-islands',
    'alpha-2': 'VI'
  },
  { name: 'Western Sahara', 'alpha-2': 'EH' },
  { name: 'Yemen', 'alpha-2': 'YE' },
  { name: 'Zambia', 'alpha-2': 'ZM' },
  { name: 'Zimbabwe', 'alpha-2': 'ZW' }
]

export const FIAT_COUNTRY: {
  [string]: { countryName: string, logoUrl: string }
} = {
  AFN: {
    countryName: 'AFGHANISTAN',
    logoUrl: `${FLAG_LOGO_URL}/afghanistan.png`
  },
  ALL: { countryName: 'ALBANIA', logoUrl: `${FLAG_LOGO_URL}/albania.png` },
  DZD: { countryName: 'ALGERIA', logoUrl: `${FLAG_LOGO_URL}/algeria.png` },
  USD: {
    countryName: 'United States of America',
    logoUrl: `${FLAG_LOGO_URL}/united-states-of-america.png`
  },
  EUR: {
    countryName: 'European Union',
    logoUrl: `${FLAG_LOGO_URL}/european-union.png`
  },
  AOA: { countryName: 'ANGOLA', logoUrl: `${FLAG_LOGO_URL}/angola.png` },
  XCD: {
    countryName: 'SAINT VINCENT AND THE GRENADINES',
    logoUrl: `${FLAG_LOGO_URL}/st-vincent-and-the-grenadines.png`
  },
  '': { countryName: '-', logoUrl: '' },
  ARS: { countryName: 'ARGENTINA', logoUrl: `${FLAG_LOGO_URL}/argentina.png` },
  AMD: { countryName: 'ARMENIA', logoUrl: `${FLAG_LOGO_URL}/armenia.png` },
  AWG: { countryName: 'ARUBA', logoUrl: `${FLAG_LOGO_URL}/aruba.png` },
  AUD: { countryName: 'TUVALU', logoUrl: `${FLAG_LOGO_URL}/tuvalu.png` },
  AZN: {
    countryName: 'AZERBAIJAN',
    logoUrl: `${FLAG_LOGO_URL}/azerbaijan.png`
  },
  BSD: { countryName: 'BAHAMAS', logoUrl: `${FLAG_LOGO_URL}/bahamas.png` },
  BHD: { countryName: 'BAHRAIN', logoUrl: `${FLAG_LOGO_URL}/bahrain.png` },
  BDT: {
    countryName: 'BANGLADESH',
    logoUrl: `${FLAG_LOGO_URL}/bangladesh.png`
  },
  BBD: { countryName: 'BARBADOS', logoUrl: `${FLAG_LOGO_URL}/barbados.png` },
  BYN: { countryName: 'BELARUS', logoUrl: `${FLAG_LOGO_URL}/belarus.png` },
  BZD: { countryName: 'BELIZE', logoUrl: `${FLAG_LOGO_URL}/belize.png` },
  XOF: { countryName: 'TOGO', logoUrl: `${FLAG_LOGO_URL}/togo.png` },
  BMD: { countryName: 'BERMUDA', logoUrl: `${FLAG_LOGO_URL}/bermuda.png` },
  BTN: { countryName: 'BHUTAN', logoUrl: `${FLAG_LOGO_URL}/bhutan.png` },
  INR: { countryName: 'INDIA', logoUrl: `${FLAG_LOGO_URL}/india.png` },
  BOB: {
    countryName: 'BOLIVIA (PLURINATIONAL STATE OF)',
    logoUrl: `${FLAG_LOGO_URL}/bolivia.png`
  },
  BOV: {
    countryName: 'BOLIVIA (PLURINATIONAL STATE OF)',
    logoUrl: `${FLAG_LOGO_URL}/bolivia.png`
  },
  BAM: {
    countryName: 'BOSNIA AND HERZEGOVINA',
    logoUrl: `${FLAG_LOGO_URL}/bosnia-and-herzegovina.png`
  },
  BWP: { countryName: 'BOTSWANA', logoUrl: `${FLAG_LOGO_URL}/botswana.png` },
  NOK: { countryName: 'NORWAY', logoUrl: `${FLAG_LOGO_URL}/norway.png` },
  BRL: { countryName: 'BRAZIL', logoUrl: `${FLAG_LOGO_URL}/brazil.png` },
  BND: {
    countryName: 'BRUNEI DARUSSALAM',
    logoUrl: `${FLAG_LOGO_URL}/brunei.png`
  },
  BGN: { countryName: 'BULGARIA', logoUrl: `${FLAG_LOGO_URL}/bulgaria.png` },
  BIF: { countryName: 'BURUNDI', logoUrl: `${FLAG_LOGO_URL}/burundi.png` },
  CVE: {
    countryName: 'CABO VERDE',
    logoUrl: `${FLAG_LOGO_URL}/cape-verde.png`
  },
  KHR: { countryName: 'CAMBODIA', logoUrl: `${FLAG_LOGO_URL}/cambodia.png` },
  XAF: { countryName: 'GABON', logoUrl: `${FLAG_LOGO_URL}/gabon.png` },
  CAD: { countryName: 'CANADA', logoUrl: `${FLAG_LOGO_URL}/canada.png` },
  KYD: {
    countryName: 'CAYMAN ISLANDS',
    logoUrl: `${FLAG_LOGO_URL}/cayman-islands.png`
  },
  CLF: { countryName: 'CHILE', logoUrl: `${FLAG_LOGO_URL}/chile.png` },
  CLP: { countryName: 'CHILE', logoUrl: `${FLAG_LOGO_URL}/chile.png` },
  CNY: { countryName: 'CHINA', logoUrl: `${FLAG_LOGO_URL}/china.png` },
  COP: { countryName: 'COLOMBIA', logoUrl: `${FLAG_LOGO_URL}/colombia.png` },
  COU: { countryName: 'COLOMBIA', logoUrl: `${FLAG_LOGO_URL}/colombia.png` },
  KMF: { countryName: 'COMOROS', logoUrl: `${FLAG_LOGO_URL}/comoros.png` },
  CDF: {
    countryName: 'CONGO, DEMOCRATIC REPUBLIC OF THE',
    logoUrl: `${FLAG_LOGO_URL}/democratic-republic-of-congo.png`
  },
  NZD: { countryName: 'TOKELAU', logoUrl: `${FLAG_LOGO_URL}/tokelau.png` },
  CRC: {
    countryName: 'COSTA RICA',
    logoUrl: `${FLAG_LOGO_URL}/costa-rica.png`
  },
  HRK: { countryName: 'CROATIA', logoUrl: `${FLAG_LOGO_URL}/croatia.png` },
  CUC: { countryName: 'CUBA', logoUrl: `${FLAG_LOGO_URL}/cuba.png` },
  CUP: { countryName: 'CUBA', logoUrl: `${FLAG_LOGO_URL}/cuba.png` },
  ANG: {
    countryName: 'NETHERLANDS',
    logoUrl: `${FLAG_LOGO_URL}/netherlands.png`
  },
  CZK: {
    countryName: 'CZECHIA',
    logoUrl: `${FLAG_LOGO_URL}/czech-republic.png`
  },
  DKK: { countryName: 'GREENLAND', logoUrl: `${FLAG_LOGO_URL}/greenland.png` },
  DJF: { countryName: 'DJIBOUTI', logoUrl: `${FLAG_LOGO_URL}/djibouti.png` },
  DOP: {
    countryName: 'DOMINICAN REPUBLIC',
    logoUrl: `${FLAG_LOGO_URL}/dominican-republic.png`
  },
  EGP: { countryName: 'EGYPT', logoUrl: `${FLAG_LOGO_URL}/egypt.png` },
  SVC: { countryName: 'EL SALVADOR', logoUrl: `${FLAG_LOGO_URL}/salvador.png` },
  ERN: { countryName: 'ERITREA', logoUrl: `${FLAG_LOGO_URL}/eritrea.png` },
  ETB: { countryName: 'ETHIOPIA', logoUrl: `${FLAG_LOGO_URL}/ethiopia.png` },
  FKP: {
    countryName: 'FALKLAND ISLANDS (MALVINAS)',
    logoUrl: `${FLAG_LOGO_URL}/falkland-islands.png`
  },
  FJD: { countryName: 'FIJI', logoUrl: `${FLAG_LOGO_URL}/fiji.png` },
  XPF: {
    countryName: 'FRENCH POLYNESIA',
    logoUrl: `${FLAG_LOGO_URL}/french-polynesia.png`
  },
  GMD: { countryName: 'GAMBIA', logoUrl: `${FLAG_LOGO_URL}/gambia.png` },
  GEL: { countryName: 'GEORGIA', logoUrl: `${FLAG_LOGO_URL}/georgia.png` },
  GHS: { countryName: 'GHANA', logoUrl: `${FLAG_LOGO_URL}/ghana.png` },
  GIP: { countryName: 'GIBRALTAR', logoUrl: `${FLAG_LOGO_URL}/gibraltar.png` },
  GTQ: { countryName: 'GUATEMALA', logoUrl: `${FLAG_LOGO_URL}/guatemala.png` },
  GBP: {
    countryName: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND',
    logoUrl: `${FLAG_LOGO_URL}/united-kingdom.png`
  },
  GNF: { countryName: 'GUINEA', logoUrl: `${FLAG_LOGO_URL}/guinea.png` },
  GYD: { countryName: 'GUYANA', logoUrl: `${FLAG_LOGO_URL}/guyana.png` },
  HTG: { countryName: 'HAITI', logoUrl: `${FLAG_LOGO_URL}/haiti.png` },
  HNL: { countryName: 'HONDURAS', logoUrl: `${FLAG_LOGO_URL}/honduras.png` },
  HKD: { countryName: 'HONG KONG', logoUrl: `${FLAG_LOGO_URL}/hong-kong.png` },
  HUF: { countryName: 'HUNGARY', logoUrl: `${FLAG_LOGO_URL}/hungary.png` },
  ISK: { countryName: 'ICELAND', logoUrl: `${FLAG_LOGO_URL}/iceland.png` },
  IDR: { countryName: 'INDONESIA', logoUrl: `${FLAG_LOGO_URL}/indonesia.png` },
  XDR: { countryName: '-', logoUrl: '' },
  IRR: {
    countryName: 'IRAN (ISLAMIC REPUBLIC OF)',
    logoUrl: `${FLAG_LOGO_URL}/iran.png`
  },
  IQD: { countryName: 'IRAQ', logoUrl: `${FLAG_LOGO_URL}/iraq.png` },
  ILS: { countryName: 'ISRAEL', logoUrl: `${FLAG_LOGO_URL}/israel.png` },
  JMD: { countryName: 'JAMAICA', logoUrl: `${FLAG_LOGO_URL}/jamaica.png` },
  JPY: { countryName: 'JAPAN', logoUrl: `${FLAG_LOGO_URL}/japan.png` },
  JOD: { countryName: 'JORDAN', logoUrl: `${FLAG_LOGO_URL}/jordan.png` },
  KZT: {
    countryName: 'KAZAKHSTAN',
    logoUrl: `${FLAG_LOGO_URL}/kazakhstan.png`
  },
  KES: { countryName: 'KENYA', logoUrl: `${FLAG_LOGO_URL}/kenya.png` },
  KPW: {
    countryName: `KOREA (DEMOCRATIC PEOPLE'S REPUBLIC OF)`,
    logoUrl: `${FLAG_LOGO_URL}/north-korea.png`
  },
  KRW: {
    countryName: 'Korea, Republic of',
    logoUrl: `${FLAG_LOGO_URL}/south-korea.png`
  },
  KWD: { countryName: 'KUWAIT', logoUrl: `${FLAG_LOGO_URL}/kuwait.png` },
  KGS: {
    countryName: 'KYRGYZSTAN',
    logoUrl: `${FLAG_LOGO_URL}/kyrgyzstan.png`
  },
  LAK: {
    countryName: `LAO PEOPLE'S DEMOCRATIC REPUBLIC`,
    logoUrl: `${FLAG_LOGO_URL}/laos.png`
  },
  LBP: { countryName: 'LEBANON', logoUrl: `${FLAG_LOGO_URL}/lebanon.png` },
  LSL: { countryName: 'LESOTHO', logoUrl: `${FLAG_LOGO_URL}/lesotho.png` },
  ZAR: {
    countryName: 'SOUTH AFRICA',
    logoUrl: `${FLAG_LOGO_URL}/south-africa.png`
  },
  LRD: { countryName: 'LIBERIA', logoUrl: `${FLAG_LOGO_URL}/liberia.png` },
  LYD: { countryName: 'LIBYA', logoUrl: `${FLAG_LOGO_URL}/libya.png` },
  CHF: {
    countryName: 'SWITZERLAND',
    logoUrl: `${FLAG_LOGO_URL}/switzerland.png`
  },
  MOP: { countryName: 'MACAO', logoUrl: `${FLAG_LOGO_URL}/macao.png` },
  MGA: {
    countryName: 'MADAGASCAR',
    logoUrl: `${FLAG_LOGO_URL}/madagascar.png`
  },
  MWK: { countryName: 'MALAWI', logoUrl: `${FLAG_LOGO_URL}/malawi.png` },
  MYR: { countryName: 'MALAYSIA', logoUrl: `${FLAG_LOGO_URL}/malaysia.png` },
  MVR: { countryName: 'MALDIVES', logoUrl: `${FLAG_LOGO_URL}/maldives.png` },
  MRU: {
    countryName: 'MAURITANIA',
    logoUrl: `${FLAG_LOGO_URL}/mauritania.png`
  },
  MUR: { countryName: 'MAURITIUS', logoUrl: `${FLAG_LOGO_URL}/mauritius.png` },
  XUA: { countryName: '-', logoUrl: '' },
  MXN: { countryName: 'MEXICO', logoUrl: `${FLAG_LOGO_URL}/mexico.png` },
  MXV: { countryName: 'MEXICO', logoUrl: `${FLAG_LOGO_URL}/mexico.png` },
  MDL: {
    countryName: 'MOLDOVA, REPUBLIC OF',
    logoUrl: `${FLAG_LOGO_URL}/moldova.png`
  },
  MNT: { countryName: 'MONGOLIA', logoUrl: `${FLAG_LOGO_URL}/mongolia.png` },
  MAD: {
    countryName: 'WESTERN SAHARA',
    logoUrl: `${FLAG_LOGO_URL}/western-sahara.png`
  },
  MZN: {
    countryName: 'MOZAMBIQUE',
    logoUrl: `${FLAG_LOGO_URL}/mozambique.png`
  },
  MMK: { countryName: 'MYANMAR', logoUrl: `${FLAG_LOGO_URL}/myanmar.png` },
  NAD: { countryName: 'NAMIBIA', logoUrl: `${FLAG_LOGO_URL}/namibia.png` },
  NPR: { countryName: 'NEPAL', logoUrl: `${FLAG_LOGO_URL}/nepal.png` },
  NIO: { countryName: 'NICARAGUA', logoUrl: `${FLAG_LOGO_URL}/nicaragua.png` },
  NGN: { countryName: 'NIGERIA', logoUrl: `${FLAG_LOGO_URL}/nigeria.png` },
  OMR: { countryName: 'OMAN', logoUrl: `${FLAG_LOGO_URL}/oman.png` },
  PKR: { countryName: 'PAKISTAN', logoUrl: `${FLAG_LOGO_URL}/pakistan.png` },
  PAB: { countryName: 'PANAMA', logoUrl: `${FLAG_LOGO_URL}/panama.png` },
  PGK: {
    countryName: 'PAPUA NEW GUINEA',
    logoUrl: `${FLAG_LOGO_URL}/papua-new-guinea.png`
  },
  PYG: { countryName: 'PARAGUAY', logoUrl: `${FLAG_LOGO_URL}/paraguay.png` },
  PEN: { countryName: 'PERU', logoUrl: `${FLAG_LOGO_URL}/peru.png` },
  PHP: {
    countryName: 'PHILIPPINES',
    logoUrl: `${FLAG_LOGO_URL}/philippines.png`
  },
  PLN: {
    countryName: 'POLAND',
    logoUrl: `${FLAG_LOGO_URL}/republic-of-poland.png`
  },
  QAR: { countryName: 'QATAR', logoUrl: `${FLAG_LOGO_URL}/qatar.png` },
  MKD: {
    countryName: 'NORTH MACEDONIA',
    logoUrl: `${FLAG_LOGO_URL}/north-macedonia.png`
  },
  RON: { countryName: 'ROMANIA', logoUrl: `${FLAG_LOGO_URL}/romania.png` },
  RUB: { countryName: 'RUSSIA', logoUrl: `${FLAG_LOGO_URL}/russia.png` },
  RWF: { countryName: 'RWANDA', logoUrl: `${FLAG_LOGO_URL}/rwanda.png` },
  SHP: { countryName: '-', logoUrl: '' },
  WST: { countryName: 'SAMOA', logoUrl: `${FLAG_LOGO_URL}/samoa.png` },
  STN: {
    countryName: 'SAO TOME AND PRINCIPE',
    logoUrl: `${FLAG_LOGO_URL}/sao-tome-and-principe.png`
  },
  SAR: {
    countryName: 'SAUDI ARABIA',
    logoUrl: `${FLAG_LOGO_URL}/saudi-arabia.png`
  },
  RSD: { countryName: 'SERBIA', logoUrl: `${FLAG_LOGO_URL}/serbia.png` },
  SCR: {
    countryName: 'SEYCHELLES',
    logoUrl: `${FLAG_LOGO_URL}/seychelles.png`
  },
  SLL: {
    countryName: 'SIERRA LEONE',
    logoUrl: `${FLAG_LOGO_URL}/sierra-leone.png`
  },
  SGD: { countryName: 'SINGAPORE', logoUrl: `${FLAG_LOGO_URL}/singapore.png` },
  XSU: { countryName: '-', logoUrl: '' },
  SBD: {
    countryName: 'SOLOMON ISLANDS',
    logoUrl: `${FLAG_LOGO_URL}/solomon-islands.png`
  },
  SOS: { countryName: 'SOMALIA', logoUrl: `${FLAG_LOGO_URL}/somalia.png` },
  SSP: {
    countryName: 'SOUTH SUDAN',
    logoUrl: `${FLAG_LOGO_URL}/south-sudan.png`
  },
  LKR: { countryName: 'SRI LANKA', logoUrl: `${FLAG_LOGO_URL}/sri-lanka.png` },
  SDG: { countryName: 'SUDAN', logoUrl: `${FLAG_LOGO_URL}/sudan.png` },
  SRD: { countryName: 'SURINAME', logoUrl: `${FLAG_LOGO_URL}/suriname.png` },
  SZL: { countryName: 'ESWATINI', logoUrl: `${FLAG_LOGO_URL}/eswatini.png` },
  SEK: { countryName: 'SWEDEN', logoUrl: `${FLAG_LOGO_URL}/sweden.png` },
  CHE: {
    countryName: 'SWITZERLAND',
    logoUrl: `${FLAG_LOGO_URL}/switzerland.png`
  },
  CHW: {
    countryName: 'SWITZERLAND',
    logoUrl: `${FLAG_LOGO_URL}/switzerland.png`
  },
  SYP: {
    countryName: 'SYRIAN ARAB REPUBLIC',
    logoUrl: `${FLAG_LOGO_URL}/syria.png`
  },
  TWD: {
    countryName: 'Taiwan, Province of China',
    logoUrl: `${FLAG_LOGO_URL}/taiwan.png`
  },
  TJS: {
    countryName: 'TAJIKISTAN',
    logoUrl: `${FLAG_LOGO_URL}/tajikistan.png`
  },
  TZS: {
    countryName: 'TANZANIA, UNITED REPUBLIC OF',
    logoUrl: `${FLAG_LOGO_URL}/tanzania.png`
  },
  THB: { countryName: 'THAILAND', logoUrl: `${FLAG_LOGO_URL}/thailand.png` },
  TOP: { countryName: 'TONGA', logoUrl: `${FLAG_LOGO_URL}/tonga.png` },
  TTD: {
    countryName: 'TRINIDAD AND TOBAGO',
    logoUrl: `${FLAG_LOGO_URL}/trinidad-and-tobago.png`
  },
  TND: { countryName: 'TUNISIA', logoUrl: `${FLAG_LOGO_URL}/tunisia.png` },
  TRY: { countryName: 'TURKEY', logoUrl: `${FLAG_LOGO_URL}/turkey.png` },
  TMT: {
    countryName: 'TURKMENISTAN',
    logoUrl: `${FLAG_LOGO_URL}/turkmenistan.png`
  },
  UGX: { countryName: 'UGANDA', logoUrl: `${FLAG_LOGO_URL}/uganda.png` },
  UAH: { countryName: 'UKRAINE', logoUrl: `${FLAG_LOGO_URL}/ukraine.png` },
  AED: {
    countryName: 'UNITED ARAB EMIRATES',
    logoUrl: `${FLAG_LOGO_URL}/united-arab-emirates.png`
  },
  USN: {
    countryName: 'United States of America',
    logoUrl: `${FLAG_LOGO_URL}/united-states-of-america.png`
  },
  UYI: { countryName: 'URUGUAY', logoUrl: `${FLAG_LOGO_URL}/uruguay.png` },
  UYU: { countryName: 'URUGUAY', logoUrl: `${FLAG_LOGO_URL}/uruguay.png` },
  UZS: { countryName: 'UZBEKISTAN', logoUrl: `${FLAG_LOGO_URL}/uzbekistn.png` },
  VUV: { countryName: 'VANUATU', logoUrl: `${FLAG_LOGO_URL}/vanuatu.png` },
  VEF: {
    countryName: 'VENEZUELA (BOLIVARIAN REPUBLIC OF)',
    logoUrl: `${FLAG_LOGO_URL}/venezuela.png`
  },
  VND: { countryName: 'VIET NAM', logoUrl: `${FLAG_LOGO_URL}/vietnam.png` },
  YER: { countryName: 'YEMEN', logoUrl: `${FLAG_LOGO_URL}/yemen.png` },
  ZMW: { countryName: 'ZAMBIA', logoUrl: `${FLAG_LOGO_URL}/zambia.png` },
  ZWL: { countryName: 'ZIMBABWE', logoUrl: `${FLAG_LOGO_URL}/zimbabwe.png` }
}

// utility for recreating list from https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json
/* const modifiedCountryCodes = COUNTRY_CODES.map(country => {
  return {
    name: country.name,
    'alpha-2': country['alpha-2']
  }
})

console.log(JSON.stringify(modifiedCountryCodes)) */
