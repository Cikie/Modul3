// Từ khoá async dùng để đánh dấu: function này luôn trả về một promise

async function f(){
    return Promise.resolve(1)
}
f().then(alert); // log ra 1 