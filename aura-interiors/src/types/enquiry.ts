export type EnquiryInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type EnquiryField = keyof EnquiryInput;

export type EnquiryErrors = Partial<Record<EnquiryField, string>>;
