"use client";

import { Suspense } from "react";
import MainLayout from "@/components/MainLayout";
import LoginForm from "@/components/LoginForm";

function LoginFormLoading() {
  return (
    <section className="space-y-6">
      <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
      <div className="max-w-xl space-y-4">
        <div className="space-y-2">
          <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-64 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="space-y-4">
            <div className="h-10 animate-pulse rounded bg-slate-200" />
            <div className="h-10 animate-pulse rounded bg-slate-200" />
            <div className="h-10 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <MainLayout>
      <Suspense fallback={<LoginFormLoading />}>
        <LoginForm />
      </Suspense>
    </MainLayout>
  );
}
