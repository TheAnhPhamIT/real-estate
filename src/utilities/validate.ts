const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function isValidEmail(email: string): boolean {
  return emailPattern.test(email);
}
