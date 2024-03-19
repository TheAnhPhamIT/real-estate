const emailPattern = /^\S+@\S+\.\S+$/;

export function isValidEmail(email: string): boolean {
  return emailPattern.test(email);
}
