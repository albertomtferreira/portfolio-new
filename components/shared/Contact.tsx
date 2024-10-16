// components/Contact.tsx
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const DynamicForm = dynamic(() => import('./DynamicForm'), { ssr: false });

const CustomToast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
    {message}
    <button onClick={onClose} className="ml-4 text-sm underline">Close</button>
  </div>
);

const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
    setShowToast(true);
  };

  return (
    <section id="contact" className="py-20">
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
      {showToast && (
        <CustomToast
          message="Thank you for your message. I'll get back to you soon."
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default Contact;