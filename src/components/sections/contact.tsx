"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

async function handleSubmit(data: ContactFormValues) {
    // In a real app, you'd send this to a server endpoint.
    // For this example, we'll just log it and show a toast.
    console.log('Contact form submitted:', data);
    return { success: true };
}

const Contact = () => {
    const { toast } = useToast();
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });
    
    const { formState: { isSubmitting } } = form;

    const onSubmit = async (values: ContactFormValues) => {
        const result = await handleSubmit(values);
        if (result.success) {
            toast({
                title: "Message Sent!",
                description: "Thanks for reaching out. I'll get back to you soon.",
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <section id="contact" className="py-24 lg:py-32">
            <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send me a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl><Textarea placeholder="Your message here..." className="min-h-[150px]" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Contact Details</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <p className='text-foreground/80'><strong>Email:</strong><br /> ugesh@example.com</p>
                            <p className='text-foreground/80'><strong>Location:</strong><br /> Nepal</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Follow Me</CardTitle></CardHeader>
                        <CardContent className="flex space-x-4">
                            <Button asChild variant="outline" size="icon">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                            </Button>
                            <Button asChild variant="outline" size="icon">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
