export default(context: any, inject: any) => { // https://nuxtjs.org/docs/directory-structure/plugins/#inject-in-root--context
    inject('translate', (chi: any, en: any) => {
        var currentLang = context.store.state.lang;
        switch(currentLang)
        {
            default:
            case 'chi':
                return chi;
                break
            case 'en':
                return en;
                break
        }
    })
}