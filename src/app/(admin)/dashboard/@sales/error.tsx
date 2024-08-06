'use client';

import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>UNEXPECTED error inside slot sales</div>;
}
