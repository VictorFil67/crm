'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface PromotionFormModalProps extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
