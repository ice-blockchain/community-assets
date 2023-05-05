import { LayoutChangeEvent, ImageSourcePropType } from 'react-native';
import type { Translations } from '../../translations/types';
export declare const PlusIce: ({ onLayout, closeBtnIsShown, translations, appLogo, inviteCode, showToast, handleModal, onCopy, }: {
    onLayout: (e: LayoutChangeEvent) => void;
    closeBtnIsShown: boolean;
    translations: Translations;
    appLogo: ImageSourcePropType;
    inviteCode: string;
    showToast: () => void;
    handleModal: (isVisible: boolean) => void;
    onCopy?: (() => void) | undefined;
}) => JSX.Element;
//# sourceMappingURL=PlusIce.d.ts.map