"use client";

import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md font-bricolage border-zinc-700 bg-zinc-900 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl">Contact Me</DialogTitle>
                    <DialogDescription className="text-sm text-gray-400">
                        Don&apos;t hesitate to reach out if you have something interesting or just want to say hi!
                    </DialogDescription>
                </DialogHeader>

                <div className="text-sm font-semibold mt-4 mb-2">Recommended!</div>
                <div className="flex gap-2">
                    <a href="https://wa.me/2347036886069" target="_blank" rel="noreferrer">
                        <Button variant="secondary" className="w-full justify-between">
                            Whatsapp <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                    <a href="https://discord.com/users/1097891811395129434" target="_blank" rel="noreferrer">
                        <Button variant="secondary" className="w-full justify-between">
                            Discord <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                </div>

                <div className="text-sm font-semibold mt-6 mb-2">Other</div>
                <div className="flex flex-col gap-2">
                    <a href="mailto:sultanabaniks@gmail.com" target="_blank" rel="noreferrer" className="">
                        <Button variant="outline" className="w-full justify-between bg-zinc-800/5 border-zinc-700">
                            Email <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                    <a href="https://instagram.com/devsultan06" target="_blank" rel="noreferrer">
                        <Button variant="outline" className="w-full justify-between bg-zinc-800/5 border-zinc-700">
                            Instagram <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3"
                >
                    <X className="" />
                </button>
            </DialogContent>
        </Dialog>
    );
}
