export function ErrorMessage({ children }: { children: string }) {
  return(
    <p className="mt-2 text-sm text-red-500">{children}</p>
  );
}