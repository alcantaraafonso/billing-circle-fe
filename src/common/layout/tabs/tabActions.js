
export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}


/**
 * O "..." é, neste caso o operador rest que funciona deixando a passagem de parametros dinâmicas na chamada da função
 * chamada: showTabs('tabList', 'tabCreate')
 */
export function showTabs(...tabId) {
    //declarando um objeto vazio para saber se o valor é verdadeiro ou falso
    const tabsToShow = {}

    //o resultado dessa operação será
    //tabsToShow: { tabList: true}
    tabId.forEach(e => tabsToShow[e] = true )

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}