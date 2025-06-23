'use client';

import { useState } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true)
        setIsSuccess(false)
        // You can handle form submission here

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsSuccess(true)
                setTimeout(() => {
                    onClose();
                    setIsSubmitting(false); // reset for next open
                    setIsSuccess(false);
                }, 1500);
            } else {
                alert('Failed to send message.');

                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Something went wrong.');
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <h2>Contact Us</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us what you're looking for..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={isSubmitting}>
                        {isSuccess ? 'Success! Message Sent' : (
                            <>
                                Send Message
                                {isSubmitting && <span className={styles.spinner} />}
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
