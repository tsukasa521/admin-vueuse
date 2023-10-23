export const searchTable = (query: any) => {
  console.log("query", query);


  return new Promise((resolve, reject) => {
    let l: any[] = [
      { id: '1', name: '张三', userAge: 25 },
      { id: '2', name: '李四', userAge: 25 },
      { id: '3', name: '王五', userAge: 25 }
    ]

    if (query.name) {
      l = l.filter(p => p.name == query.name)
    }

    resolve({ data: { list: l, count: l.length } })
  })
}