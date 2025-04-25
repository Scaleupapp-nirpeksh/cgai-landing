'use client';
import { useEffect } from "react";
import { observeReveal } from "@/src/lib/reveal";

export default function RevealClient() {
  useEffect(() => observeReveal(), []);
  return null; // nothing rendered
}
