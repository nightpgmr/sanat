import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gold">۴۰۴</h1>
      <p className="mt-4 text-xl text-muted">صفحه مورد نظر یافت نشد</p>
      <Button href="/" className="mt-8">بازگشت به خانه</Button>
    </div>
  );
}
