"use client";

import Image from "next/image";
import Step1Form from "../forms/step1-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CongratulationCard() {
    const [isAccepte, setIsAccepte] = useState(true);
    return (
        <div className="rounded-xl w-2/3  mx-auto shadow-lg my-auto space-y-4  bg-white p-6">


            <div className="flex  flex-col items-center justify-center p-2">
                <div className="flex w-full max-w-2xl flex-col items-center gap-4 rounded-sm bg-white p-4">
                    <Image
                        src="/images/congratulation.svg"
                        alt="Complete your profile"
                        width={300}
                        height={300}
                    />
                    <p className="text-3xl font-medium text-primary-500">Toutes nos félicitations</p>
                    <p className="px-6 text-center text-lg text-[#686868]">
                        Vous complétez votre profil avec succès.
                    </p>
                    <div className=" flex items-center space-x-2">
                        <Checkbox
                            onClick={() => setIsAccepte(!isAccepte)}
                            id="terms1"
                        />
                        <Link
                            aria-label="start-now"
                            href=""
                            className="text-blue-500 hover:text-blue-500 underline"
                        >
                            J'accepte les conditions générales d'utilisation .
                        </Link>
                    </div>
                    <div className=" flex items-center space-x-2">
                        <Checkbox
                            id="terms2"
                        />
                        <Link
                            aria-label="start-now"
                            href=""
                            className="text-blue-500 hover:text-blue-500 underline"
                        >
                            Je souhaite recevoir des notifications par e-mail.
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="terms2"
                        />
                        <Link
                            aria-label="start-now"
                            href=""
                            className="text-blue-500 hover:text-blue-500 underline"
                        >
                            Je souhaite m'inscrire à la newsletter.
                        </Link>
                    </div>
                    <Button

                        disabled={isAccepte}
                        className="h-[45px] w-full rounded-sm bg-blue-500 text-xl hover:bg-blue-500"
                    >
                        <Link
                            aria-label="start-now"
                            href=""
                        >
                            Soumettre
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
