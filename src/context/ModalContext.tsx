import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FormType = 
  | 'crm_automation' 
  | 'solar' 
  | 'education' 
  | 'jewellery' 
  | 'hospitality' 
  | 'healthcare' 
  | 'ecommerce'
  | 'homepage'
  | 'lead_gen';

interface ModalContextType {
  isOpen: boolean;
  formType: FormType;
  openModal: (type: FormType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('homepage');

  const openModal = (type: FormType) => {
    setFormType(type);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <ModalContext.Provider value={{ isOpen, formType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
