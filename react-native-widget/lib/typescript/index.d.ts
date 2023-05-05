import { ImageSourcePropType } from 'react-native';
import type { Translations } from './translations/types';
type Props = {
    translations?: Translations;
    visible: boolean;
    appLogo?: ImageSourcePropType;
    inviteCode: string;
    onCopy?: () => void;
    quote?: string;
    quoteAuthor?: string;
    isQuoteShown?: boolean;
};
export declare const IceModal: ({ translations, visible, appLogo, inviteCode, onCopy, quote, quoteAuthor, isQuoteShown, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map