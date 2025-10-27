"use client";

import React from "react";

export default function SlowComponent() {
  return (
    <div style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}>
      <div>This component is loaded lazily</div>
    </div>
  );
}


