export function userNameValidator(userName) {
  const re = /^[A-Za-z0-9]+$/
  if (!userName) return "Tên đăng nhập không được để trống."
  if (!re.test(userName)) return 'Tên đăng nhập không hợp lệ.'
  if (userName.length > 50) return 'Tên đăng nhập phải dưới 50 ký tự.'
  return ''
}
