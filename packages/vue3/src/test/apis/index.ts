const TABLE_MOCK_DATA = [
  { id: 1, name: '廖涵衍', userAge: 25 },
  { id: 2, name: '邓毅然', userAge: 25 },
  { id: 3, name: '谢承望', userAge: 25 },
  { id: 4, name: '胡嘉荣', userAge: 25 },
  { id: 5, name: '胡和平', userAge: 25 },
  { id: 6, name: '钟弘和', userAge: 25 },
  { id: 7, name: '高波光', userAge: 25 },
  { id: 8, name: '江承安', userAge: 25 },
  { id: 9, name: '黎承恩', userAge: 25 },
  { id: 10, name: '赵浩然', userAge: 25 },
  { id: 11, name: '梁若云', userAge: 25 },
  { id: 12, name: '周芳泽', userAge: 25 },
  { id: 13, name: '乔清嘉', userAge: 25 },
  { id: 14, name: '袁司辰', userAge: 25 },
  { id: 15, name: '石秀媚', userAge: 25 },
  { id: 16, name: '金惠芳', userAge: 25 },
  { id: 17, name: '邹抒怀', userAge: 25 },
  { id: 18, name: '夏铃语', userAge: 25 },
  { id: 19, name: '陈津文', userAge: 25 },
]

export const searchTableByPage = (query: any) => {
  console.log("query", query);

  return new Promise((resolve, reject) => {
    let list: any[] = TABLE_MOCK_DATA;
    if (query.name) {
      list = list.filter(p => p.name == query.name)
    }
    resolve({ data: { list: list, count: list.length } })
  })
}

export const searchTable = (query: any) => {
  console.log("query", query);

  return new Promise((resolve, reject) => {
    let list: any[] = TABLE_MOCK_DATA;
    if (query.name) {
      list = list.filter(p => p.name == query.name)
    }
    resolve({ data: list })
  })
}


