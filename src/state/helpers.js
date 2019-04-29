import {mapState, mapGetters, mapActions} from 'vuex'
// 用户
export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser
  }),
  ...mapGetters('auth', ['loggedIn'])
}
export const authMethods = mapActions('auth', ['logIn', 'logOut'])

// 全局
export const globalComputed = {
  ...mapState('global', {
    currentTitles: (state) => state.currentTitles,
    marginBottom: (state) => state.marginBottom
  })
}

// 交易记录
export const tradeComputed = {
  ...mapGetters('trade', ['trades', 'pageDetail', 'page', 'date', 'keyword', 'type'])
}
export const tradeMethods = {
  ...mapActions('trade', ['setPage', 'setTradeType', 'setDate', 'setKeyword'])
}


// 团长
export const leaderComputed = {
  ...mapGetters('leader', [
    'withdrawalList',
    'withdrawalPageDetail',
    'withdrawalPage',
    'withdrawalSn',
    'withdrawalType',
    'withdrawalKeyword',
    'withdrawalStatus',
    'billList',
    'billType',
    'billAcceptType',
    'billAcceptId',
    'billPageDetail',
    'billPage',
    'startAt',
    'endAt'
  ])
}

export const leaderMethods = mapActions('leader', [
  'getWithdrawalList',
  'setWithdrawalPage',
  'setWithdrawalType',
  'setWithdrawalStatus',
  'setWithdrawalSearch',
  'setBillPage',
  'setBillType',
  'setWidthTime'
])

// 加盟商
export const franchiseComputed = {
  ...mapGetters('franchise', [
    'franchiseSettlement',
    'settlementStart',
    'settlementEnd',
    'settlementKeyword',
    'settlementStatus',
    'pageTotal',
    'settlementPage',
    'franchiseList',
    'franListKeyword',
    'franListPageTotal',
    'franListPage',
  ])
}

export const franchiseMethods = mapActions('franchise', [
  'getFranchiseSettlement',
  'setfranPage',
  'setfranStatus',
  'setfranKeyword',
  'setfranTime',
  'setfranListKeyword',
  'setfranListPage'
])


// 意向单
export const intentComputed = {
  ...mapGetters('intent', ['list', 'pageDetail', 'searchNum', 'status', 'page', 'startTime', 'endTime', 'type', 'limit', 'pageName'])
}

export const intentMethods = {
  ...mapActions('intent', ['getIntentList', 'setSearchNum', 'setIntentStatus', 'setIntentType', 'setPage','initData','initType'])
}
