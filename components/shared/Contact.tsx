// components/shared/Contact.tsx
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const DynamicForm = dynamic(() => import('./DynamicForm'), { ssr: false });

const CustomToast: React.FC<{ message: string; onClose: () => void; isError?: boolean }> = ({ message, onClose, isError = false }) => (
  <div className={`fixed bottom-4 right-4 ${isError ? 'bg-red-500' : 'bg-green-500'} text-white p-4 rounded shadow-lg`}>
    {message}
    <button onClick={onClose} className="ml-4 text-sm underline">Close</button>
  </div>
);

const Contact: React.FC = () => {
  const [toast, setToast] = useState<{ show: boolean; message: string; isError: boolean }>({ show: false, message: '', isError: false });

  const handleSubmit = (values: any, status: 'success' | 'error') => {
    console.log(values);
    if (status === 'success') {
      setToast({ show: true, message: "Thank you for your message. I'll get back to you soon.", isError: false });
    } else {
      setToast({ show: true, message: "There was an error sending your message. Please try again later.", isError: true });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>Fill out the form below to send me a message.</CardDescription>
          </CardHeader>
          <CardContent>
            <DynamicForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>New York, NY, USA</span>
            </div>
          </CardContent>
        </Card>
      </div>
      {toast.show && (
        <CustomToast
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
          isError={toast.isError}
        />
      )}
    </section>
  );
};

export default Contact;