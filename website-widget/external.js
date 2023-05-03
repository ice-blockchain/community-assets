let common = {
    logo: '',
    coupon: '',
    phoneMockup: ''
}
let widgetBody = ''
let localizationList = {}
const host = 'https://ice-production.b-cdn.net/website-widget'

function getData(elementId) {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split('-')[0]
    if (!userLang) {
        userLang = 'en'
    }
    let element = document.getElementById(elementId)
    if (element) {
        fetch(host + '/data/localization.json')
            .then((response) => response.json())
            .then((localizations) => {
                if (!localizations[userLang]) {
                    userLang = 'en'
                }
                localizationList = localizations[userLang]
                common.phoneMockup = userLang + '.png'
                widgetBody = getHtml(userLang)
                element.innerHTML = widgetBody
                if (!getCookie("ice-popup")) {
                    setTimeout(function() {
                        showThePopup();
                        setCookie("ice-popup", "1", 1);
                    }, 2000);
                }
            });
    }
}

function getStyles() {
    return '@import url(\'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\');;\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "Euclid Circular B";\n' +
        '    src: url("' + host + '/fonts/Euclid Circular B Regular.ttf");\n' +
        '}\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "Coco-Sharp-Bold-trial";\n' +
        '    src: url("' + host + '/fonts/Coco-Sharp-Bold-trial.ttf");\n' +
        '}\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "CocoSharp-trial";\n' +
        '    src: url("' + host + '/fonts/Coco-Sharp-Regular-trial.ttf");\n' +
        '}\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "Euclid Circular Light";\n' +
        '    src: url("' + host + '/fonts/Euclid Circular B Light.ttf");\n' +
        '}\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "Euclid Circular Regular";\n' +
        '    src: url("' + host + '/fonts/Euclid Circular B Regular.ttf");\n' +
        '}\n' +
        '\n' +
        '@font-face {\n' +
        '    font-family: "Euclid Circular Bold";\n' +
        '    src: url("' + host + '/fonts/Euclid Circular B Medium.ttf");\n' +
        '}\n' +
        '/*desktop*/\n' +
        '\n' +
        'a {\n' +
        '    text-decoration: none;\n' +
        '}\n' +
        '\n' +
        '.overlay-com {\n' +
        '    background: rgba(64, 93, 134, 60%);\n' +
        '    align-items: flex-start;\n' +
        '    justify-content: center;\n' +
        '    position: absolute;\n' +
        '    bottom: 0;\n' +
        '    right: 0;\n' +
        '    left: 0;\n' +
        '    top: 0;\n' +
        '    overflow: auto;\n' +
        '    z-index: 100000;\n' +
        '    display: none;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.show {\n' +
        '    animation: overlayIn 0.3s ease-in-out 0.1s forwards;\n' +
        '    display: inline-block;\n' +
        '    height: 100vh;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .close-button {\n' +
        '    float: left;\n' +
        '    position: absolute;\n' +
        '    background-image: url("' + host + '/images/close-icon.png");\n' +
        '    width: 12px;\n' +
        '    height: 12px;\n' +
        '    top: 27px;\n' +
        '    right: 36px;\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: cover;\n' +
        '    cursor: pointer;\n' +
        '    z-index: 3;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner {\n' +
        '    display: flex;\n' +
        '    width: 80%;\n' +
        '    max-width: 1183px !important;\n' +
        '    padding: 0px !important;\n' +
        // '    margin: 3.6rem auto;\n' +
        '    position: absolute;\n' +
        '    top: 50%;\n' +
        '    left: 50%;\n' +
        '    margin-right: -50%;\n' +
        '    transform: translate(-50%, -50%);\n' +
        '    background: rgb(43, 91, 227) !important;\n' +
        '    background: linear-gradient(\n' +
        '            103deg,\n' +
        '            rgba(43, 91, 227, 1) 0%,\n' +
        '            rgba(20, 57, 165, 1) 76%,\n' +
        '            rgba(20, 57, 165, 1) 76%,\n' +
        '            rgba(255, 255, 255, 1) 76.1%\n' +
        '    ) !important;\n' +
        // '    position: relative;\n' +
        '    border-radius: 6px;\n' +
        '    animation: overlayInnerIn 0.3s ease-in-out 0.1s forwards;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .looper-bg {\n' +
        '    float: left;\n' +
        '    position: absolute;\n' +
        '    background-image: url(' + host + '/images/looper-bg.png);\n' +
        '    background-position: -40px -65px;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: cover;\n' +
        '    width: 100%;\n' +
        '    height: 100%;\n' +
        '    z-index: 1;\n' +
        '    opacity: 0.4;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg {\n' +
        '    float: left;\n' +
        '    position: relative;\n' +
        '    width: 100%;\n' +
        '    height: 100%;\n' +
        '    color: #fff;\n' +
        '    padding: 53px 80px 53px 104px;\n' +
        '    z-index: 2;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info {\n' +
        '    float: left;\n' +
        '    position: relative;\n' +
        '    width: 65%;\n' +
        '    padding-top: 69px;\n' +
        '    z-index: 2;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .logos {\n' +
        '    font-family: "Coco-Sharp-Bold-trial";\n' +
        '    font-size: 42px;\n' +
        '    line-height: 50px;\n' +
        '    font-weight: 400;\n' +
        '}\n' +
        '\n' +
        '/*.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.logos\n' +
        'div:nth-child(2) {\n' +
        '    display: flex;\n' +
        '    font-family: "Coco-Sharp-Bold-trial";\n' +
        '    font-size: 42px;\n' +
        '    line-height: 50px;\n' +
        '    font-weight: 400;\n' +
        '    padding: 0px 32px;\n' +
        '}*/\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .logos .ice-logo {\n' +
        '    color: #fff;\n' +
        '    font-size: 42px;\n' +
        '    font-weight: 800;\n' +
        '    font-family: "Coco-Sharp-Bold-trial";\n' +
        '    letter-spacing: 0.02em;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .logos .ice-logo i {\n' +
        '    background-image: url("' + host + '/images/ice-logo.png");\n' +
        '    background-position: left center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: contain;\n' +
        '    height: 65px;\n' +
        '    width: 65px;\n' +
        '    display: inline-block;\n' +
        '    margin-bottom: -20px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .logos .brand-logo {\n' +
        '    height: 65px;\n' +
        '    margin-bottom: -20px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info p {\n' +
        '    padding: 0px;\n' +
        '    margin: 0px;\n' +
        '    color: #fff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 500;\n' +
        '    font-size: 17.5384px;\n' +
        '    line-height: 26px;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    max-width: 421px;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .base-info {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    padding: 52px 0px 64px;\n' +
        '    max-width: 505px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .base-info h3 {\n' +
        '    font-weight: 800;\n' +
        '    font-size: 24px;\n' +
        '    line-height: 29px;\n' +
        '    padding: 0px 0px 17px;\n' +
        '    margin: 0px;\n' +
        '    color: #ffffff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .base-info h3 span {\n' +
        '    padding-left: 10px;\n' +
        '    padding-right: 10px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .base-info h3 i {\n' +
        '    padding-right: 10px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .base-info h3 .ice-logo-inline {\n' +
        '    background-image: url("' + host + '/images/ice-logo.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: center;\n' +
        '    background-size: contain;\n' +
        '    width: 28px;\n' +
        '    height: 28px;\n' +
        '    display: inline-block;\n' +
        '    margin-bottom: -5px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .signup-info {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h4 {\n' +
        '    display: flex;\n' +
        '    font-size: 20px;\n' +
        '    line-height: 24px;\n' +
        '    padding: 0px 0px 6px;\n' +
        '    margin: 0px;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 700;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h3 {\n' +
        '    font-size: 27px;\n' +
        '    line-height: 32px;\n' +
        '    padding: 0px 0px 17px;\n' +
        '    margin: 0px;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 800;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        'h3\n' +
        '.ice-logo-inline {\n' +
        '    background-image: url("' + host + '/images/ice-logo.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: center;\n' +
        '    background-size: cover;\n' +
        '    width: 28px;\n' +
        '    height: 28px;\n' +
        '    display: inline-block;\n' +
        '    margin-bottom: -4px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h3 span {\n' +
        '    font-family: "Roboto", sans-serif;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .signup-info .coupon {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    flex-grow: 1;\n' +
        '    width: 100%;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    justify-content: flex-start;\n' +
        '    align-items: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    width: 80%;\n' +
        '    max-width: 316px;\n' +
        '    padding: 12px 19px;\n' +
        '    background-color: #ffffff;\n' +
        '    border-radius: 8.77px;\n' +
        '    justify-content: space-between;\n' +
        '    align-items: center;\n' +
        '    margin-right: 7px;\n' +
        '    cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.coupon-text {\n' +
        '    color: #0a2155;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-size: 17px;\n' +
        '    line-height: 20px;\n' +
        '    font-weight: 800;\n' +
        '    letter-spacing: 0.01em;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip\n' +
        '.icon-copy {\n' +
        '    display: inline-block;\n' +
        '    width: 12px;\n' +
        '    height: 16px;\n' +
        '    background-image: url("' + host + '/images/copy-icon.png");\n' +
        '    background-position: center;\n' +
        '    background-size: cover;\n' +
        '    background-repeat: no-repeat;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip {\n' +
        '    display: flex;\n' +
        '    cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip\n' +
        'span {\n' +
        '    display: inline-block;\n' +
        '    color: #535353;\n' +
        '    font-size: 12px;\n' +
        '    line-height: 15px;\n' +
        '    font-weight: 600;\n' +
        '    text-transform: uppercase;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    padding-right: 9px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.signup-info\n' +
        '.coupon\n' +
        '.coupon-support {\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 500;\n' +
        '    font-size: 12px;\n' +
        '    line-height: 14px;\n' +
        '    color: #ffffff;\n' +
        '    padding-top: 13px;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    background-image: url("' + host + '/images/hand-icon.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: 0px 8px;\n' +
        '    padding-left: 23px;\n' +
        '    background-size: 18px 18px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .modal-info .buttons-list {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    justify-content: flex-start;\n' +
        '    align-items: center;\n' +
        '    padding-top: 58px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.buttons-list\n' +
        '.button-more {\n' +
        '    display: flex;\n' +
        '    padding: 13px 0px;\n' +
        '    color: #ffffff;\n' +
        '    background-color: #0a2155;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-size: 14px;\n' +
        '    font-weight: 800;\n' +
        '    line-height: 17px;\n' +
        '    border-radius: 7px;\n' +
        '    margin-right: 19px;\n' +
        '    width: 157px;\n' +
        '    max-width: 157px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join\n' +
        '.inner\n' +
        '.inner-bg\n' +
        '.modal-info\n' +
        '.buttons-list\n' +
        '.button-whitepaper {\n' +
        '    display: flex;\n' +
        '    padding: 13px 0px;\n' +
        '    color: #0a2155;\n' +
        '    background-color: #ffffff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-size: 14px;\n' +
        '    font-weight: 800;\n' +
        '    line-height: 17px;\n' +
        '    border-radius: 7px;\n' +
        '    width: 157px;\n' +
        '    max-width: 157px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .app-info {\n' +
        '    float: right;\n' +
        '    position: relative;\n' +
        '    width: 35%;\n' +
        '    padding-top: 19px;\n' +
        '    z-index: 1;\n' +
        '    max-width: 280px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .app-info .app-mockup img {\n' +
        '    width: 100%;\n' +
        '    max-width: 280px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .app-info .app-links {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    padding-top: 15px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .app-info .app-links .appstore {\n' +
        '    display: flex;\n' +
        '    background-image: url("' + host + '/images/appstore-logo.png");\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: contain;\n' +
        '    width: 120px;\n' +
        '    height: 40px;\n' +
        '    margin-right: 18px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner .inner-bg .app-info .app-links .googleplay {\n' +
        '    display: flex;\n' +
        '    background-image: url("' + host + '/images/google-play-logo.png");\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: contain;\n' +
        '    width: 120px;\n' +
        '    height: 40px;\n' +
        '}\n' +
        '\n' +
        'body.overlay-on {\n' +
        '    overflow-y: hidden;\n' +
        '}\n' +
        '\n' +
        '/*mobile*/\n' +
        '.overlay-com.ice-join .inner.mobile {\n' +
        '    display: none;\n' +
        '    width: 100%;\n' +
        '    left: 0px;\n'+
        '    right: 0px;\n'+
        '    top: 0px;\n'+
        '    bottom: 0px;\n'+
        '    max-width: 1183px !important;\n' +
        '    padding: 0px !important;\n' +
        '    flex-direction: column;\n' +
        '    transform: none;\n' +
        '    margin: 0px;\n' +
        '    background: linear-gradient(169.59deg, #2B5BE3 8.62%, #1338A2 98.1%) !important;\n' +
        '    position: relative;\n' +
        '    border-radius: 6px;\n' +
        '    animation: overlayInnerIn 0.3s ease-in-out 0.1s forwards;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg {\n' +
        '    display: flex;\n' +
        '    padding: 13px 0px 40px !important;\n' +
        '    flex-direction: column;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .top-level {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    justify-content: space-between;\n' +
        '    flex-grow: 1;\n' +
        '    align-items: center;\n' +
        '    padding-top: 8px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .top-level .brand-logo {\n' +
        '    padding-left: 27px;\n' +
        '    display: flex;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .top-level .brand-logo img {\n' +
        '    width: 133px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .top-level .close-mobile-button {\n' +
        '    height: 24px;\n' +
        '    width: 24px;\n' +
        '    display: flex;\n' +
        '    background-image: url("' + host + '/images/close-mobile-button.png");\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    margin-right: 20px;\n' +
        '    background-size: cover;\n' +
        '    cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .join-block {\n' +
        '    float: left;\n' +
        '    position: relative;\n' +
        '    text-align: center;\n' +
        '    padding-top: 61px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .join-block h3 {\n' +
        '    color: #fff;\n' +
        '    text-align: center;\n' +
        '    float: left;\n' +
        '    position: relative;\n' +
        '    font-weight: 800;\n' +
        '    font-size: 24px;\n' +
        '    line-height: 29px;\n' +
        '    margin: 0px;\n' +
        '    color: #ffffff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    padding: 0px 60px 22px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .join-block span {\n' +
        '    padding-left: 10px;\n' +
        '    padding-right: 10px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .join-block h3 .ice-logo-inline {\n' +
        '    background-image: url("' + host + '/images/ice-logo.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: center;\n' +
        '    background-size: contain;\n' +
        '    width: 28px;\n' +
        '    height: 28px;\n' +
        '    display: inline-block;\n' +
        '    margin-bottom: -5px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .join-block p {\n' +
        '    float: left;\n' +
        '    position: relative;\n' +
        '    text-align: center;\n' +
        '    padding: 0px 30px;\n' +
        '    margin: 0px;\n' +
        '    color: #fff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 500;\n' +
        '    font-size: 14px;\n' +
        '    line-height: 24px;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .looper-bg {\n' +
        '    float: left;\n' +
        '    position: absolute;\n' +
        '    background-image: url(' + host + '/images/looper-bg.png);\n' +
        '    background-position: -12px -25px;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: 120%;\n' +
        '    width: 100%;\n' +
        '    height: 100%;\n' +
        '    z-index: 1;\n' +
        '    opacity: 0.4;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    justify-content: center;\n' +
        '    padding-top: 42px;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block .app-mockup {\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block .app-mockup img {\n' +
        '    max-width: 261px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block .app-links {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    padding-top: 16px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block .app-links .appstore {\n' +
        '    display: flex;\n' +
        '    background-image: url("' + host + '/images/appstore-logo.png");\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: cover;\n' +
        '    width: 120px;\n' +
        '    height: 40px;\n' +
        '    margin-right: 18px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .app-block .app-links .googleplay {\n' +
        '    display: flex;\n' +
        '    background-image: url("' + host + '/images/google-play-logo.png");\n' +
        '    background-position: center;\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-size: cover;\n' +
        '    width: 120px;\n' +
        '    height: 40px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block {\n' +
        '    padding-top: 38px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block h3 {\n' +
        '    text-align: center;\n' +
        '    font-size: 24px;\n' +
        '    line-height: 32px;\n' +
        '    padding: 0px 40px 21px;\n' +
        '    margin: 0px;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 800;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        'h3\n' +
        '.ice-logo-inline {\n' +
        '    background-image: url("' + host + '/images/ice-logo.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: center;\n' +
        '    background-size: cover;\n' +
        '    width: 28px;\n' +
        '    height: 28px;\n' +
        '    display: inline-block;\n' +
        '    margin-bottom: -4px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block h3 span {\n' +
        '    font-family: "Roboto", sans-serif;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    color: #ffffff;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block .coupon {\n' +
        '    display: flex;\n' +
        '    flex-direction: column;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    justify-content: flex-start;\n' +
        '    align-items: center;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    width: 80%;\n' +
        '    max-width: 316px;\n' +
        '    padding: 12px 19px;\n' +
        '    background-color: #ffffff;\n' +
        '    border-radius: 8.77px;\n' +
        '    justify-content: space-between;\n' +
        '    align-items: center;\n' +
        '    cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.coupon-text {\n' +
        '    color: #0a2155;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-weight: 800;\n' +
        '    font-size: 17px;\n' +
        '    line-height: 22px;\n' +
        '    letter-spacing: 0.01em;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip\n' +
        '.icon-copy {\n' +
        '    display: inline-block;\n' +
        '    width: 12px;\n' +
        '    height: 16px;\n' +
        '    background-image: url("' + host + '/images/copy-icon.png");\n' +
        '    background-position: center;\n' +
        '    background-size: cover;\n' +
        '    background-repeat: no-repeat;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip {\n' +
        '    display: flex;\n' +
        '    cursor: pointer;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-info\n' +
        '.coupon-input\n' +
        '.icon-tooltip\n' +
        'span {\n' +
        '    display: inline-block;\n' +
        '    color: #535353;\n' +
        '    font-weight: 600;\n' +
        '    font-size: 12px;\n' +
        '    line-height: 15px;\n' +
        '    text-transform: uppercase;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    padding-right: 9px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-support {\n' +
        '    font-family: "Lato";\n' +
        '    font-weight: 500;\n' +
        '    font-size: 12px;\n' +
        '    line-height: 14px;\n' +
        '    color: #ffffff;\n' +
        '    padding-top: 11.88px;\n' +
        '    letter-spacing: 0.01em;\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .signup-info-block\n' +
        '.coupon\n' +
        '.coupon-support div {\n' +
        '    background-image: url("' + host + '/images/hand-icon.png");\n' +
        '    background-repeat: no-repeat;\n' +
        '    background-position: 0px 0px;\n' +
        '    padding-left: 23px;\n' +
        '    padding-top: 3px;\n' +
        '    background-size: 18px 18px;\n' +
        '    display: flex;\n' +
        '    height: 18px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg .buttons-list {\n' +
        '    display: flex;\n' +
        '    flex-direction: row;\n' +
        '    justify-content: center;\n' +
        '    align-items: center;\n' +
        '    padding-top: 39.57px;\n' +
        '    padding-bottom: 42px;\n' +
        '    padding-left: 13px;\n' +
        '    padding-right: 13px;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg\n' +
        '.buttons-list\n' +
        '.button-more {\n' +
        '    display: flex;\n' +
        '    padding: 12px 0px;\n' +
        '    color: #ffffff;\n' +
        '    background-color: #0a2155;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-size: 14px;\n' +
        '    font-weight: 800;\n' +
        '    line-height: 17px;\n' +
        '    border-radius: 7px;\n' +
        '    margin-right: 13px;\n' +
        '    width: 165px;\n' +
        '    max-width: 165px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '.overlay-com.ice-join .inner.mobile .inner-bg\n' +
        '.buttons-list\n' +
        '.button-whitepaper {\n' +
        '    display: flex;\n' +
        '    padding: 12px 0px;\n' +
        '    color: #0a2155;\n' +
        '    background-color: #ffffff;\n' +
        '    font-family: "Lato", sans-serif;\n' +
        '    font-size: 14px;\n' +
        '    font-weight: 800;\n' +
        '    line-height: 17px;\n' +
        '    border-radius: 7px;\n' +
        '    width: 165px;\n' +
        '    max-width: 165px;\n' +
        '    justify-content: center;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.back-link a {\n' +
        '    font-family: \'Lato\', sans-serif;\n' +
        '    font-weight: 500;\n' +
        '    font-size: 14px;\n' +
        '    line-height: 17px;\n' +
        '    color: #fff;\n' +
        '    text-decoration: none;\n' +
        '    background-image: url("' + host + '/images/back-button-arrow.png");\n' +
        '    padding-left: 20px;\n' +
        '    background-position: left center;\n' +
        '    background-size: 10px 10px;\n' +
        '    background-repeat: no-repeat;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '\n' +
        '/*    mobile breakpoint*/\n' +
        '@media only screen and (max-width: 555px) {\n' +
        '    .overlay-com.ice-join .inner {\n' +
        '        display: none;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-on {\n' +
        '        overflow: auto !important;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner.mobile {\n' +
        '        display: flex;\n' +
        '        max-width: 375px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com {\n' +
        '        position: absolute;\n' +
        '    }\n' +
        '\n' +
        '    .back-link {\n' +
        '        text-align: center;\n' +
        '        padding-bottom: 85px;\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '@media only screen and (max-width: 1024px) and (min-width: 556px) {\n' +
        '    .overlay-com.ice-join .inner {\n' +
        '        width: 90%;\n' +
        '    }\n' +
        '    .overlay-com.ice-join .inner .inner-bg {\n' +
        '        padding: 40px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info {\n' +
        '        padding-top: 40px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .base-info {\n' +
        '        padding-right: 20px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .signup-info {\n' +
        '        padding-right: 20px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .logos {\n' +
        '        font-family: "Coco-Sharp-Bold-trial";\n' +
        '        font-size: 36px !important;\n' +
        '        line-height: 40px !important;\n' +
        '        font-weight: 400;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .logos a {\n' +
        '        font-family: "Coco-Sharp-Bold-trial";\n' +
        '        font-size: 36px !important;\n' +
        '        line-height: 40px !important;\n' +
        '        font-weight: 400;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .base-info h3 {\n' +
        '        font-size: 18px;\n' +
        '        line-height: 22px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info p {\n' +
        '        font-size: 14px;\n' +
        '        font-weight: 400;\n' +
        '        line-height: 18px;\n' +
        '        max-width: 421px;\n' +
        '    color: #ffffff;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h4 {\n' +
        '        font-size: 16px;\n' +
        '        line-height: 20px;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h3 {\n' +
        '        font-size: 18px;\n' +
        '        line-height: 24px;\n' +
        '    }\n' +
        '\n' +
        '    .brand-logo {\n' +
        '        height: 24px !important;\n' +
        '        margin-bottom: 0px !important;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .logos .ice-logo i {\n' +
        '        height: 24px;\n' +
        '        width: 24px;\n' +
        '        display: inline-block;\n' +
        '        margin-bottom: 0px !important;\n' +
        '    }\n' +
        '\n' +
        '    .overlay-com.ice-join .inner .inner-bg .modal-info .signup-info h3 .ice-logo-inline {\n' +
        '        margin-bottom: -6px;\n' +
        '    }\n' +
        '\n' +
        '}' +
        '\n' +
        '.rtl .logos {\n' +
        '   text-align: right !important;\n' +
        '   padding-right: 30px !important;\n' +
        '}\n' +
        '.rtl .base-info {\n' +
        '   align-items: flex-end !important;\n' +
        '   padding-right: 30px !important;\n' +
        '   max-width: unset !important;\n' +
        '}\n' +
        '.rtl .base-info h3 {\n' +
        '   text-align: right !important;\n' +
        '}\n' +
        '.rtl .signup-info {\n' +
        '   align-items: flex-end !important;\n' +
        '   padding-right: 30px !important;\n' +
        '}\n' +
        '.rtl .signup-info h3 {\n' +
        '   text-align: right !important;\n' +
        '}\n' +
        '.rtl .base-info p {\n' +
        '   text-align: right !important;\n' +
        '}\n' +
        '.rtl .coupon-info {\n' +
        '   justify-content: flex-end !important;\n' +
        '}\n' +
        '.rtl .coupon-info .coupon-input {\n' +
        '  margin-right: 0px !important;\n' +
        '}\n' +
        '.rtl .buttons-list {\n' +
        '  justify-content: flex-end !important;\n' +
        '  padding-right: 30px;\n' +
        '}\n' +
        '.rtl .coupon .coupon-support {\n' +
        '  background-position: right 8px !important;\n' +
        '  padding-right: 23px !important;  \n' +
        '  padding-left: 0px !important;  \n' +
        '  text-align: right !important;  \n' +
        '}\n' +
        '.coupon .rtl.coupon-support div {\n' +
        '  background-position: right 0px !important;\n' +
        '  padding-right: 23px !important;  \n' +
        '  padding-left: 0px !important;  \n' +
        '  text-align: right !important;  \n' +
        '}\n';
}


function getHtml(language) {
    let styles = '<style>' + getStyles() +  '</style>'
    let textDirection = localizationList.direction
    
    return styles + '<div class="overlay-com ice-join panel remote-overlay" id="ice-modal">\n' +
        '    <div class="bg"></div>\n' +
        '    <div class="inner ' + textDirection + '">\n' +
        '        <div\n' +
        '                class="close-button close-btn close-cross"\n' +
        '                onClick="hideThePopup()"\n' +
        '        ></div>\n' +
        '        <div class="looper-bg"></div>\n' +
        '        <div class="inner-bg">\n' +
        '            <div class="modal-info">\n' +
        '                <div class="logos">\n' +
        '                    <img data-change="brand_logo" src="' + common.logo + '" height="65px" border="0" class="brand-logo"/>&nbsp;\n' +
        '                    +\n' +
        '                    <a href="https://ice.io" target="_blank" class="ice-logo"\n' +
        '                    ><i class="top-logo-ice"></i>&nbsp;ice</a\n' +
        '                    >\n' +
        '                </div>\n' +
        '                <div class="base-info">\n' +
        '                    <h3 data-localization="ice_join">' + localizationList['ice_join'] + '</h3>\n' +
        '                    <p data-localization="ice_join_description">' + localizationList['ice_join_description'] + '</p>\n' +
        '                </div>\n' +
        '                <div class="signup-info">\n' +
        '                    <h4 data-localization="signup">' + localizationList['signup'] + '</h4>\n' +
        '                    <h3 data-localization="use_code">' + localizationList['use_code'] + '</h3>\n' +
        '                    <div class="coupon">\n' +
        '                        <div class="coupon-info">\n' +
        '                            <div class="coupon-input" onClick="copyCoupon()">\n' +
        '                                <div class="coupon-text" data-change="coupon_value" id="coupon-text">' + common.coupon + '</div>\n' +
        '                                <div class="icon-tooltip">\n' +
        '                                    <span data-localization="copy" id="icon-tooltip-text">' + localizationList['copy'] + '</span>\n' +
        '                                    <div class="icon-copy"></div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="coupon-support" data-localization="coupon_support">' + localizationList['coupon_support'] + '</div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="buttons-list">\n' +
        '                    <a\n' +
        '                            class="button-more"\n' +
        '                            target="_blank"\n' +
        '                            href="https://ice.io"\n' +
        '                            data-localization="learn_more"\n' +
        '                    >' + localizationList['learn_more'] + '</a\n' +
        '                    >\n' +
        '                    <a\n' +
        '                            class="button-whitepaper"\n' +
        '                            target="_blank"\n' +
        '                            href="https://ice.io/@' + common.coupon + '"\n' +
        '                            data-localization="download_now"\n' +
        '                    >' + localizationList['download_now'] + '</a\n' +
        '                    >\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="app-info">\n' +
        '                <a\n' +
        '                        href="https://ice.io/@' + common.coupon + '"\n' +
        '                        target="_blank"\n' +
        '                        class="app-mockup"\n' +
        '                >\n' +
        '                    <img src="' + host + '/images/' + common.phoneMockup + '"/>\n' +
        '                </a>\n' +
        '                <div class="app-links">\n' +
        '                    <a\n' +
        '                            href="https://ice.io/@' + common.coupon + '"\n' +
        '                            target="_blank"\n' +
        '                            class="appstore"\n' +
        '                    ></a>\n' +
        '                    <a\n' +
        '                            href="https://ice.io/@' + common.coupon + '"\n' +
        '                            target="_blank"\n' +
        '                            class="googleplay"\n' +
        '                    ></a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="inner mobile">\n' +
        '        <div class="looper-bg"></div>\n' +
        '        <div class="inner-bg">\n' +
        '            <div class="top-level">\n' +
        '                <div class="brand-logo">\n' +
        '                    <img data-change="brand_logo" src="' + common.logo + '" border="0"/>\n' +
        '                </div>\n' +
        '                <div class="close-mobile-button" onclick="return hideThePopup()"></div>\n' +
        '            </div>\n' +
        '            <div class="join-block">\n' +
        '                <h3 data-localization="ice_join">' + localizationList['ice_join'] + '</h3>\n' +
        '                <p data-localization="ice_join_description">' + localizationList['ice_join_description'] + '</p>\n' +
        '            </div>\n' +
        '            <div class="app-block">\n' +
        '                <a href="https://ice.io/@' + common.coupon + '" target="_blank" class="app-mockup">\n' +
        '                    <img src="' + host + '/images/' + common.phoneMockup + '" width="76%">\n' +
        '                </a>\n' +
        '                <div class="app-links">\n' +
        '                    <a\n' +
        '                            href="https://ice.io/@' + common.coupon + '"\n' +
        '                            target="_blank"\n' +
        '                            class="appstore"\n' +
        '                    ></a>\n' +
        '                    <a\n' +
        '                            href="https://ice.io/@' + common.coupon + '"\n' +
        '                            target="_blank"\n' +
        '                            class="googleplay"\n' +
        '                    ></a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="signup-info-block">\n' +
        '                <h3 data-localization="use_code">' + localizationList['use_code'] + '</h3>\n' +
        '                <div class="coupon">\n' +
        '                    <div class="coupon-info">\n' +
        '                        <div class="coupon-input" onClick="copyCoupon()">\n' +
        '                            <div class="coupon-text" data-change="coupon_value" id="coupon-text">' + common.coupon + '</div>\n' +
        '                            <div class="icon-tooltip">\n' +
        '                                <span data-localization="copy" id="icon-tooltip-text">' + localizationList['copy'] + '</span>\n' +
        '                                <div class="icon-copy"></div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="' + textDirection + ' coupon-support">\n' +
        '                        <div data-localization="coupon_support">' + localizationList['coupon_support'] + '</div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="buttons-list">\n' +
        '                <a\n' +
        '                        class="button-more"\n' +
        '                        target="_blank"\n' +
        '                        href="https://ice.io"\n' +
        '                        data-localization="learn_more"\n' +
        '                >' + localizationList['learn_more'] + '</a\n' +
        '                >\n' +
        '                <a\n' +
        '                        class="button-whitepaper"\n' +
        '                        target="_blank"\n' +
        '                        href="https://ice.io/@' + common.coupon + '"\n' +
        '                        data-localization="download_now"\n' +
        '                >' + localizationList['download_now'] + '</a\n' +
        '                >\n' +
        '            </div>\n' +
        '            <div class="back-link">\n' +
        '                <a href="#" onclick="return hideThePopup()" data-localization="go_back">' + localizationList['go_back'] + '</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'
}

function setBrandLogo(logoUrl) {
    let logos = document.querySelectorAll('[data-change="brand_logo"]')
    if (logos.length > 0) {
        for (index in logos) {
            logos[index].src = logoUrl
        }
    }
}

function setCouponCode(code) {
    let coupons = document.querySelectorAll('[data-change="coupon_value"]')
    if (coupons.length > 0) {
        for (index in coupons) {
            coupons[index].innerText = code
        }
    }
}

function initWidget(elementId, logo, coupon) {
    common.logo = logo
    common.coupon = coupon
    getData(elementId)

}
function copyCoupon() {
    let copyText = document.getElementById("coupon-text");
    let tooltips = document.querySelectorAll("#icon-tooltip-text");
    let valueOfCopy = copyText.innerText;
    navigator.clipboard.writeText(valueOfCopy);
    if (tooltips.length > 0) {
        for (index in tooltips) {
            tooltips[index].innerText = localizationList['copied']
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}



function showThePopup() {
    document.body.classList.add("overlay-on");
    document.documentElement.style.overflow = 'hidden'
    document.getElementById("ice-modal").classList.add("show");
}

function hideThePopup() {
    document.body.classList.remove("overlay-on")
    document.documentElement.style.overflow = 'auto'
    document.getElementById("ice-modal").classList.remove("show")
    return false
}

