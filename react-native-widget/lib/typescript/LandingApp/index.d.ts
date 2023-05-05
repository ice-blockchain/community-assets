import { ImageSourcePropType } from 'react-native';
import type { Translations } from '../translations/types';
type Props = {
    translations: Translations;
    appLogo: ImageSourcePropType;
    inviteCode: string;
    handleModal: (isVisible: boolean) => void;
    showToast: () => void;
    onCopy?: () => void;
    quote: string;
    quoteAuthor: string;
    isQuoteShown: boolean;
};
export declare const LandingApp: ({ translations, appLogo, inviteCode, showToast, handleModal, onCopy, quote, quoteAuthor, isQuoteShown, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map