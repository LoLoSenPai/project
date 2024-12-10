"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface InfoCardProps {
    title: string;
    description: string;
    imageUrl: string;
    children: React.ReactNode;
}

export default function InfoCard({ title, description, imageUrl, children }: InfoCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="border-2 hover:border-blue-500/40 transition-colors cursor-pointer">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={400}
                            height={200}
                            className="rounded-lg w-full object-cover"
                        />
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}