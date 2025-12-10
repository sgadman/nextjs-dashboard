import {ErrorMessage} from "@/app/ui/error-message";

export function ErrorMessageList ({ id, errors = [] }: { id: string, errors: string[] | undefined}) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors?.map((error) => (
        <ErrorMessage key={error}>{error}</ErrorMessage>
      ))}
    </div>
  );
}