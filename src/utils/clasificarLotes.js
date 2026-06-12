export default function clasificar(n) {
  if (n >= 1 && n <= 23) return "A";
  if (n >= 24 && n <= 50) return "B";
  if (n >= 51 && n <= 75) return "C";
  if (n >= 76 && n <= 78) return "B";
  return null;
}
