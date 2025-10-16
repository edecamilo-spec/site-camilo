"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontFamily: "system-ui" }}>
        Home OK — build dinâmica
      </h1>
      <p>Se você está vendo isso em produção, a build passou 👍</p>
    </main>
  );
}

