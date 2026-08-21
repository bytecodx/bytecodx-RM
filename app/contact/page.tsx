import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote",
  description:
    "Contact ByteCodX to start your web development project. Get a free quote for websites, web applications, MERN stack, and full-stack development.",
};

export default function ContactPage() {
  return <ContactForm />;
}
