
# React Native widget

Our React Native widget is easy to integrate into any react native app and allows users to effortlessly expand their team by inviting their app users to join their ice micro-community.


![Ice Android Widget](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjZmZGMwYjNmMDZhYWJlNWZmOWJjY2FkMmM5NjM0NjhmZjVjNjEwNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/zN0rgUMX7QQFeImsmJ/giphy.gif)

## Installation

```bash
yarn add https://github.com/ice-blockchain/community-assets/tree/master/react-native-widget
  
yarn add @react-native-clipboard/clipboard react-native-haptic-feedback react-native-snap-carousel

cd ios && pod install cd ..
```
create `react-native.config.js` and put this string into assets field - `'./node_modules/react-native-widget/src/assets/fonts/'` then run the command:

```bash
npx react-native-asset
```
Then you should rebuild your project and import the component:

```bash
import {IceModal} from 'react-native-widget';

render() {
 return (<IceModal visible={true} inviteCode={'invite-code'} appLogo={require('path/to/logo')} />)
}
```
## Props
**Prop | Type | Default | Description**
|--- |--- |--- |---
visible | boolean | REQUIRED | show/hide modal | 
appLogo | image | dummy image | your app logo | 
inviteCode | string | REQUIRED | invite code for registration | 
translations | object | { sign_up: 'Sign up today', use_code: 'Use our code to', … } | English is default | 
onCopy | func | undefined | callback to track copy event | 
quote | string | “Lorem Ipsum” | quote section | 
quoteAuthor | string | "Team" | quote author | 
isQuoteShown | boolean | true | show/hide quete section | 

## Translations

```bash

import {IceModal} from 'react-native-widget';

export const en = {
  sign_up: 'Sign up today',
  use_code: 'Use our code to',
  receive_10: 'receive 10',
  ice_coins: 'ice coins',
  invitation_code: 'Use our invitation code when\nyou create the account.',
  download: 'Download on the',
  app_store: 'App Store',
  get_it_on: 'GET IT ON',
  google_play: 'Google Play',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  quote_author: 'Team',
  join_ice: 'Join ice today',
  global_currency: 'The global\ncurrency reset',
  get_reward: 'Download the app and get your welcome reward today',
  sign_up_with: 'Sign up with our',
  code_and_receive: 'code and receive 10',
  create_account: 'Use this invitation code when you create the account',
  go_back: 'Go back to app',
  carousel_items: {
    one: {
      title: 'Free to mine',
      description:
        'No more mining dificulty or hidden fees. Anyone can mine with just a mobile phone.',
    },
    two: {
      title: 'Available worldwide',
      description:
        'Anyone from anywhere in the world with an Android or iOS device can join ice.',
    },
    three: {
      title: 'No battery drain',
      description:
        'We don’t use any phone resources or hardware, having no impact on battery or network.',
    },
    four: {
      title: 'Decentralized',
      description:
        'Everything that we develop is run by the Decentralized Autonomous Organization (DAO).',
    },
    five: {
      title: 'Community-based',
      description:
        'Growing up your team builds trust across the network, and increases earnings for everybody.',
    },
    six: {
      title: 'Transparent',
      description:
        'We are a 100% open-source project, so you can easily keep track of our development.',
    },
  },
  copy: 'Copy',
  copied: 'Copied!',
} as const;

const App = () => {
    render() {
        return (
            <IceModal
                visible={true} 
                inviteCode={'invite-code'} 
                appLogo={require('path/to/logo')} 
                translations={en} 
            />
        )
    }
}
```

## Development

```bash
git clone git clone -b react-native-widget git@github.com:ice-blockchain/community-assets.git

cd ./community-assets/react-native-widget && yarn

cd ./example && yarn && cd ios && pod install

yarn ios or android
```

## Testing

After you've made some changes or improvements in the `root/src` you should run:

```bash
npm pack

cd ./example && yarn add ../react-native-widget-0.1.0.tgz

yarn ios or android
```
