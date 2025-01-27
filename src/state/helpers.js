import {mapState, mapGetters, mapActions} from 'vuex'
// 用户
export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser
  }),
  ...mapGetters('auth', ['loggedIn', 'firstMenu'])
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
  ...mapGetters('trade', ['trades', 'pageDetail', 'page', 'date', 'keyword', 'type', 'orderType', 'sourceType'])
}
export const tradeMethods = {
  ...mapActions('trade', ['setPage', 'setTradeType', 'setDate', 'setKeyword', 'setOrderType', 'setSourceType'])
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
    'isCertification'
  ])
}

export const franchiseMethods = mapActions('franchise', [
  'getFranchiseSettlement',
  'setfranPage',
  'setfranStatus',
  'setfranKeyword',
  'setfranTime',
  'setfranListKeyword',
  'setfranListPage',
  'setfranData'
])

// 意向单
export const intentComputed = {
  ...mapGetters('intent', [
    'list',
    'pageDetail',
    'searchNum',
    'tabStatus',
    'status',
    'page',
    'startTime',
    'endTime',
    'type',
    'limit',
    'pageName'
  ])
}

export const intentMethods = {
  ...mapActions('intent', [
    'getIntentList',
    'setSearchNum',
    'setIntentStatus',
    'setIntentType',
    'setPage',
    'initData',
    'initType'
  ])
}

// 商品
export const productComputed = {
  ...mapGetters('product', ['unitsList', 'reqCategoryList', 'productList', 'statePageTotal'])
}

export const productMethods = {
  ...mapActions('product', ['getAuxiliaryList', 'getCategoryList', 'getProductList', 'getGoodsDetailData'])
}

// 全国包邮-商品
export const fsGoodsComputed = {
  ...mapGetters('freeShippingGoodsManage', ['goodsList', 'statePageTotal'])
}
export const fsGoodsMethods = {
  ...mapActions('freeShippingGoodsManage', ['getGoodsList', 'getGoodsDetailData'])
}

// 全国包邮-订单
export const fsOrderComputed = {
  ...mapGetters('fsOrder', ['list', 'pageDetail', 'page', 'date', 'keyword', 'type'])
}
export const fsOrderMethods = {
  ...mapActions('fsOrder', ['setPage', 'setOrderType', 'setDate', 'setKeyword', 'getOrderList', 'resetParams'])
}

// 内容
export const contentComputed = {
  ...mapGetters('content', [
    'workCategoryId',
    'contentPage',
    'workType',
    'contentWorkPage',
    'workStatus',
    'workKeyword',
    'contentClassList',
    'workTabIndex',
    'contentClassPage',
    'workList',
    'workPage',
    'centerList',
    'centerPage'
  ])
}
export const contentMethods = {
  ...mapActions('content', [
    'infoContent',
    'contentAddPage',
    'setWorkIndex',
    'infoWork',
    'getWorkListMore',
    'getContentClassList',
    'getWorkList',
    'selectWork',
    'getCenterList'
  ])
}
