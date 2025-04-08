import { ActionTree, MutationTree } from 'vuex'
export type RootState = ReturnType<typeof state>

export const state = () => ({
    lang: 'en',
})

export const mutations: MutationTree<RootState> = {
    changeLang(state, lang: string) {
      state.lang = lang;
    }
}

export const actions: ActionTree<RootState, RootState> = {
    changeLangAction({ commit }, lang) {
      commit('changeLang', lang);
    },
  }