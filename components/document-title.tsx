"use client";

import { useEffect } from "react";

type DocumentTitleProps = {
  title: string;
};

export function DocumentTitle({ title }: DocumentTitleProps) {
  useEffect(() => {
    if (!title) return;

    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
}

