export function otpValidator(otpCode) {
  const re = /^\d{6}$/
  if (!re.test(otpCode)) return 'Sai định dạng OTP.'
  return ''
}
