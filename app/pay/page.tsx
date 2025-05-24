// app/pay/page.tsx
import { Suspense } from "react";
import PayPageContent from "./pay-page-content";

export default function PayPage() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <PayPageContent />
    </Suspense>
  );
}
