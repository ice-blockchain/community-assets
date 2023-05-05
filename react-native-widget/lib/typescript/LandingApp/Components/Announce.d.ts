import type { Translations } from '../../translations/types';
export declare const Announce: ({ showToast, translations, handleModal, inviteCode, onCopy, quote, quoteAuthor, isQuoteShown, }: {
    translations: Translations;
    inviteCode: string;
    showToast: () => void;
    handleModal: (isVisible: boolean) => void;
    onCopy?: (() => void) | undefined;
    quote: string;
    quoteAuthor: string;
    isQuoteShown: boolean;
}) => JSX.Element;
//# sourceMappingURL=Announce.d.ts.map