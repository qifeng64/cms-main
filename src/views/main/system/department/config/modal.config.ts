const modalConfig = {
  pageName: 'department',
  header: {
    createTitle: '新建部门',
    editTitle: '编辑部门'
  },
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入部门名称',
      initialValue: '摸鱼部'
    },
    { type: 'input', label: '部门领导', prop: 'leader', placeholder: '请输入部门领导' },
    {
      type: 'select',
      label: '上级部门',
      prop: 'parentId',
      placeholder: '请选择上级部门',
      options: [] as any[] // 服务器返回的动态数据
    }
  ]
}

export default modalConfig
