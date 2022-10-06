// Xử lý đồng bộ (Synchronous)
// Hiểu một cách đơn giản thì đồng bộ hay chính xác là xử lý đồng bộ
// là code sẽ được chạy tuần tự theo trình tự đã viết sẵn từ trên xuống dưới

const foo = () => console.log('first')
const bar = () => setTimeout(()=>console.log('second'), 1000 )
const bar1 = () => setTimeout(()=>console.log('third'), 2000 )
const bar2 = () => setTimeout(()=>console.log('four'), 3000 )
const baz = () => console.log('five');

bar();
bar1();
bar2();
foo();
baz();