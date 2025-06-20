function validateData(form) {
    let check = true;
  
    // nhap email
    switch (true) {
      case form.email.value === '':
        errorEmail.innerText = 'Email không được để trống';
        check = false;
        break;
      case !validEmail(form.email.value):
        errorEmail.innerText = 'Email không hợp lệ';
        check = false;
        break;
      default:
        errorEmail.innerText = '';
    }
  
    // nhap mat khau
    switch (true) {
      case form.password.value === '':
        errorPassword.innerText = 'Password không được để trống';
        check = false;
        break;
      case !validPassword(form.password.value):
        errorPassword.innerText = 'Password không hợp lệ';
        check = false;
        break;
      default:
        errorPassword.innerText = '';
    }
  
    // nhap lai mat khau
    switch (true) {
      case form.confirmPassword.value === '':
        errorConfirmPassword.innerText = 'Xác nhận mật khẩu không được để trống';
        check = false;
        break;
      case form.password.value !== form.confirmPassword.value:
        errorConfirmPassword.innerText = 'Xác nhận mật khẩu không trùng khớp';
        check = false;
        break;
      default:
        errorConfirmPassword.innerText = '';
    }
  
    return check;
  }
  