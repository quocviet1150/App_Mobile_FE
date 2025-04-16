export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email không được để trống."
  if (!re.test(email)) return 'Địa chỉ email không hợp lệ.'
  if (email.length < 11) return 'Email phải dài ít nhất 11 ký tự.'
  return ''
}
