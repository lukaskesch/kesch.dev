"use client";

import React, { Suspense, lazy, use } from "react";

const LazyComponent = lazy(() => import("./SlowComponent"));

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SuspenseEntry = { status: 'pending' | 'resolved'; promise: Promise<void> };
const suspensions = new Map<number, SuspenseEntry>();

function suspendFor(ms: number) {
  const existing = suspensions.get(ms);
  if (existing) {
    if (existing.status === 'pending') throw existing.promise;
    return;
  }
  const promise = wait(ms).then(() => {
    const entry = suspensions.get(ms);
    if (entry) entry.status = 'resolved';
  });
  suspensions.set(ms, { status: 'pending', promise });
  throw promise;
}

const UseHookComponent = ({ ms }: { ms: number }) => {
  use(wait(ms));
  return (<p>This component used the use() hook to wait for {ms}ms</p>)
}

const SuspendingComponent = ({ ms }: { ms: number }) => { 
  suspendFor(ms);
  return (<p>This component is suspended for {ms}ms</p>)
}

export default function TestPage() {
  return (
    <div>
      <h1>React Suspense demo</h1>
      <Suspense fallback={<div>Loading lazy component…</div>}>
        <LazyComponent />
      </Suspense>
      <Suspense fallback={<div>Loading suspended component…</div>}>
        <SuspendingComponent ms={100} />
        <SuspendingComponent ms={1000} />
      </Suspense>
      <Suspense fallback={<div>Loading slow components…</div>}>
        <UseHookComponent ms={100} />
        <UseHookComponent ms={1000} />
      </Suspense>
    </div>
  );
}
