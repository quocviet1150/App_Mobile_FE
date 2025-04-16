export function passwordValidator(password) {
  if (!password) return "Mật khẩu không được để trống."
  if (password.length < 8) return 'Mật khẩu phải dài ít nhất 8 ký tự.'
  const regex = /^(?=.*[a-zz])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
  if (!regex.test(password)) {
    return 'Mật khẩu phải chứa ít nhất một chữ hoa, một số và một ký tự đặc biệt.';
  }
  return ''
}
