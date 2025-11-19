
function signup(){localStorage.setItem('user',JSON.stringify({email:email.value,pass:pass.value}));alert('تم الإنشاء');}
function login(){let u=JSON.parse(localStorage.getItem('user'));if(u&&u.email==email.value&&u.pass==pass.value){localStorage.setItem('logged',1);location.href='dashboard.html';}else alert('خطأ');}
