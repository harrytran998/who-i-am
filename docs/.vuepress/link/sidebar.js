module.exports = {
  getLeadershipSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'Leadership',
        children: ['/leadership/leadership'],
      },
    ]
  },
  getFinanceSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'Finance',
        children: ['/finance/finance'],
      },
    ]
  },
  getInvestingSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'Investing',
        children: ['/investing/investing'],
      },
    ]
  },
  getOtherSideBar() {
    return [
      {
        title: 'Introduction',
        children: [['', 'Giới thiệu']],
      },
      {
        title: 'Other',
        children: ['/other/other'],
      },
    ]
  },
}
