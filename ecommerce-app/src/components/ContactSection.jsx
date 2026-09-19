import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const contactDetails = [
    {
        icon: FiPhone,
        label: "Call us",
        value: "+1 (800) 555-0198",
        href: "tel:+18005550198",
    },
    {
        icon: FiMail,
        label: "Email us",
        value: "hello@contactsneakers.com",
        href: "mailto:hello@contactsneakers.com",
    },
    {
        icon: FiMapPin,
        label: "Visit us",
        value: "24 Madison Avenue, New York",
        href: "https://maps.google.com/?q=24+Madison+Avenue+New+York",
    },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
];

const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <div className="bg-white px-6 py-20 md:px-15 md:py-28">
            <div className="mx-auto grid grid-cols-2 gap-16">
                <div>
                    <span className='text-lg font-semibold bg-(--secondary-color) text-(--primary-color) py-2 px-4 rounded-lg mb-6 inline-block'>
                        Get in touch
                    </span>
                    <h2 className="Recoleta max-w-xl text-5xl font-bold leading-tight text-(--primary-color) md:text-6xl">
                        Let&apos;s talk about your next pair.
                    </h2>
                    <p className="mt-6 max-w-xl text-lg font-medium text-(--text-color)">
                        Questions about sizing, orders, or a style you have in mind? Our
                        team is ready to help you find the right fit.
                    </p>
                    <div className="mt-10 space-y-6">
                        {contactDetails.map(({ icon: Icon, label, value, href }) => (
                            <Link key={label} to={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noreferrer" : undefined} className="group flex items-center gap-4 text-(--primary-color)">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--primary-color) text-xl text-(--secondary-color)">
                                    <Icon />
                                </span>
                                <span>
                                    <span className="block text-base font-medium text-(--text-color)">{label}</span>
                                    <span className="mt-1 block text-base font-semibold transition-colors group-hover:text-(--light-color)">
                                        {value}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12 border-t border-(--primary-color)/15 pt-7">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-(--light-color)">
                            Follow our steps
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <Link key={label} to={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-(--primary-color)/25 text-(--primary-color) transition-colors hover:bg-(--primary-color) hover:text-(--secondary-color)">
                                    <Icon />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="bg-[#ececec] p-7 md:p-10">
                    <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                            <h3 className="Recoleta text-3xl font-bold text-(--primary-color)">
                                Send us a message
                            </h3>
                            <p className="mt-2 text-sm text-(--text-color)">
                                We reply within one business day.
                            </p>
                        </div>
                        <FiArrowUpRight className="mt-1 text-2xl text-(--light-color)" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="text-sm font-semibold text-(--primary-color)">
                            Your name
                            <input required type="text" name="name" placeholder="Alex Morgan" className="mt-2 w-full border-b border-(--primary-color)/25 bg-transparent px-0 py-3 text-base font-medium outline-none transition-colors placeholder:text-(--text-color)/60 focus:border-(--light-color)"/>
                        </label>
                        <label className="text-sm font-semibold text-(--primary-color)">
                            Email address
                            <input required type="email" name="email" placeholder="alex@example.com" className="mt-2 w-full border-b border-(--primary-color)/25 bg-transparent px-0 py-3 text-base font-medium outline-none transition-colors placeholder:text-(--text-color)/60 focus:border-(--light-color)"/>
                        </label>
                    </div>
                    <label className="mt-7 block text-sm font-semibold text-(--primary-color)">
                        Subject
                        <select name="subject" className="mt-2 w-full border-b border-(--primary-color)/25 bg-transparent px-0 py-3 text-base font-medium outline-none transition-colors focus:border-(--light-color)" defaultValue="">
                            <option value="" disabled>Choose a topic</option>
                            <option value="order">Order support</option>
                            <option value="sizing">Sizing advice</option>
                            <option value="returns">Returns and exchanges</option>
                            <option value="other">Something else</option>
                        </select>
                    </label>
                    <label className="mt-7 block text-sm font-semibold text-(--primary-color)">
                        Message
                        <textarea required name="message" rows="4" placeholder="Tell us how we can help..." className="mt-2 w-full resize-none border-b border-(--primary-color)/25 bg-transparent px-0 py-3 text-base font-medium outline-none transition-colors placeholder:text-(--text-color)/60 focus:border-(--light-color)"/>
                    </label>
                    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <button type="submit" className="inline-flex items-center justify-center bg-(--primary-color) px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-(--light-color)">
                            Send message <FiArrowUpRight className="ml-2 text-lg" />
                        </button>
                        {isSubmitted && (
                            <p className="text-sm font-semibold text-(--light-color)" role="status">
                                Thanks, your message is on its way.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;