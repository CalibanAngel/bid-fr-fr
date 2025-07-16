Hooks.once('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'bid-fr-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});