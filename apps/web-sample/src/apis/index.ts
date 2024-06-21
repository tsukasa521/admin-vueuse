const TABLE_MOCK_DATA = [
  { id: 1, userName: '廖涵衍', age: 25 },
  { id: 2, userName: '邓毅然', age: 25 },
  { id: 3, userName: '谢承望', age: 25 },
  { id: 4, userName: '胡嘉荣', age: 25 },
  { id: 5, userName: '胡和平', age: 25 },
  { id: 6, userName: '钟弘和', age: 25 },
  { id: 7, userName: '高波光', age: 25 },
  { id: 8, userName: '江承安', age: 25 },
  { id: 9, userName: '黎承恩', age: 25 },
  { id: 10, userName: '赵浩然', age: 25 },
  { id: 11, userName: '梁若云', age: 25 },
  { id: 12, userName: '周芳泽', age: 25 },
  { id: 13, userName: '乔清嘉', age: 25 },
  { id: 14, userName: '袁司辰', age: 25 },
  { id: 15, userName: '石秀媚', age: 25 },
  { id: 16, userName: '金惠芳', age: 25 },
  { id: 17, userName: '邹抒怀', age: 25 },
  { id: 18, userName: '夏铃语', age: 25 },
  { id: 19, userName: '陈津文', age: 25 },
]

const TABLE_MOCK_DATA2 = [
  { id: 1, userName: '廖涵衍', age: 25 },
  { id: 2, userName: '邓毅然', age: 25 },
  { id: 3, userName: '谢承望', age: 25 },
  { id: 4, userName: '胡嘉荣', age: 25 },
  { id: 5, userName: '胡和平', age: 25 },
]

/**
 * 查询列表（带分页）
 * @param query 
 * @returns 
 */
export const searchTableByPage = (query: any) => {
  console.log("query", query);

  const { pageNum, pageSize, name } = query

  return new Promise((resolve, reject) => {
    let list: any[] = TABLE_MOCK_DATA;
    if (name) {
      list = list.filter(p => p.name.includes(name))
    }

    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const page = list.slice(startIndex, endIndex);

    resolve({ data: { list: page, count: list.length } })
  })
}

export const searchTable = (query: any) => {
  console.log("query", query);

  return new Promise((resolve, reject) => {
    let list: any[] = TABLE_MOCK_DATA;

    if (query.name) {
      list = list.filter(p => p.name.includes(query.name))
    }
    resolve({ data: list })
  })
}

export const searchTable2 = (query: any) => {
  console.log("query", query);

  return new Promise((resolve, reject) => {
    let list: any[] = TABLE_MOCK_DATA2;

    if (query.name) {
      list = list.filter(p => p.name.includes(query.name))
    }
    resolve({ data: list })
  })
}

export function submitForm(formData: any) {
  return new Promise((resolve, reject) => {
    resolve(formData)
  })
}



